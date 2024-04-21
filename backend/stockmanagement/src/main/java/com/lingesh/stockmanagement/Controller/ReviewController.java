package com.lingesh.stockmanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.stockmanagement.Model.Review;
import com.lingesh.stockmanagement.Service.ReviewService;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService rs;

    @PostMapping("/addreview")
    public String addreview(@RequestBody Review rev)
    {
        return rs.post(rev);
    }

    @GetMapping("/getreview")
    public List<Review> getrev()
    {
        return rs.get();
    }
    @DeleteMapping("/deletereview/{rid}")
    public String delete(@PathVariable int rid)
    {
        return rs.del(rid);
    }
}
