package com.lingesh.stockmanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.stockmanagement.Model.Apply;
import com.lingesh.stockmanagement.Model.User;
import com.lingesh.stockmanagement.Repository.UserRepo;
import com.lingesh.stockmanagement.Service.ApplyService;
import com.lingesh.stockmanagement.constant.Api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ApplyController {
    @Autowired
    private ApplyService as;

    @PostMapping("/postapply/{uid}")
    public String post(@RequestBody Apply app,@PathVariable int uid)
    {

        as.postDetails(app,uid);
        return "posted successfully";
    } 

    @GetMapping("/getapply")
    public List<Apply> get()
    {
        return as.getDetails();
    }

    @GetMapping("/getapply/{aid}")
    public Apply getaid(@PathVariable int aid)
    {
        return as.getDetailsById(aid);                        
    }
    @GetMapping("/getuserapply/{aid}")
    public User getuserapply(@PathVariable int aid)
    {
             return as.getUserByApplicationId(aid).get();                   
    }

    @PutMapping("/updateapply/{aid}/{uid}")
    public String putMethodName(@PathVariable long aid,@PathVariable int uid, @RequestBody Apply apply) {
       apply.setAid(aid);
       return as.update(apply,uid);
    }
    @PutMapping("/updatestatus/{aid}/{status}")
    public String putstatus(@PathVariable int aid,@PathVariable String status) {
       return as.updatestatus(aid,status);
    }
    @DeleteMapping("/deleteapply/{aid}")
    public String del(@PathVariable int aid)
    {
        return as.delete(aid);
    }
}
