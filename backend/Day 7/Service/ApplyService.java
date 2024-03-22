package com.lingesh.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.Apply;
import com.lingesh.stockmanagement.Repository.ApplyRepo;

@Service
public class ApplyService {
    @Autowired
    private ApplyRepo ar;

    public void postDetails(Apply apply)
    {
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
    public String update(Apply apply)
    {
        ar.save(apply);
        return "updated successfully";
    }
    public String delete(int aid)
    {
        ar.deleteById(aid);
        return "deleted successfully";
    }
}
