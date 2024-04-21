package com.lingesh.stockmanagement.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.Apply;
import com.lingesh.stockmanagement.Model.User;
import com.lingesh.stockmanagement.Repository.ApplyRepo;
import com.lingesh.stockmanagement.Repository.UserRepo;

@Service
public class ApplyService {
    @Autowired
    private ApplyRepo ar;
    @Autowired
    private UserRepo ur;

    public void postDetails(Apply apply,int uid)
    {
        apply.setUser(ur.findById(uid).get());
        ar.save(apply);
    }

    public List<Apply> getDetails()
    {
        return ar.findAll();
    }
    public Apply getDetailsById(int aid)
    {
        return ar.findById(aid).get();
    }
    public String update(Apply apply,int uid)
    {
        apply.setUser(ur.findById(uid).get());
        ar.save(apply);
        return "updated successfully";
    }
    public String updatestatus(int aid, String status) {
        Optional<Apply> optionalApply = ar.findById(aid);
        if (optionalApply.isPresent()) {
            Apply apply = optionalApply.get();
            apply.setStatus(status);
            ar.save(apply);
            return "Updated successfully";
        } else {
            return "Apply with ID " + aid + " not found";
        }
    }
    public String delete(int aid)
    {
        ar.deleteById(aid);
        return "deleted successfully";
    }

    public Optional<User> getUserByApplicationId(int applicationId) {
        Optional<Apply> optionalApply = ar.findById(applicationId);
        if (optionalApply.isPresent()) {
            Apply apply = optionalApply.get();
            return Optional.of(apply.getUser());
        } else {
            return Optional.empty(); // Or you can throw an exception if application not found
        }
    }
}
