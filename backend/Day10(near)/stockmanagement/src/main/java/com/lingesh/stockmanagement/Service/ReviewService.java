package com.lingesh.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.Review;
import com.lingesh.stockmanagement.Repository.ReviewRepo;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepo rr;

    public String post(Review rev)
    {
        rr.save(rev);
        return "Posted";
    }

    public List<Review> get()
    {
        return rr.findAll();
    }

    public String del(int rid)
    {
        rr.deleteById(rid);
        return "deleted";
    }

    
}
