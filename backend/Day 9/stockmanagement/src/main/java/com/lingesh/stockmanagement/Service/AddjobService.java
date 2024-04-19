package com.lingesh.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.Addjob;
import com.lingesh.stockmanagement.Repository.AddjobRepo;

@Service
public class AddjobService {
    @Autowired
    private AddjobRepo ar;

    public void addjob(Addjob aj)
    {
        ar.save(aj);
    }
    public List<Addjob> getjob()
    {
        return ar.findAll();
    }
    public Addjob getjobById(int id)
    {
        return ar.findById(id).get();
    }
    public String update(Addjob aj)
    {
        ar.save(aj);
        return "updated Successfully";
    }
    public String delete(int id)
    {
        ar.deleteById(id);
        return "deleted successfully";
    }
}
