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
import com.lingesh.stockmanagement.Service.ApplyService;
import com.lingesh.stockmanagement.constant.Api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin("*")
public class ApplyController {
    @Autowired
    private ApplyService as;

    @PostMapping("/postapply")
    public String post(@RequestBody Apply app)
    {
        as.postDetails(app);
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

    @PutMapping("/updateapply/{aid}")
    public String putMethodName(@PathVariable long aid, @RequestBody Apply apply) {
       apply.setAid(aid);
       return as.update(apply);
    }
    @DeleteMapping("/deleteapply/{aid}")
    public String del(@PathVariable int aid)
    {
        return as.delete(aid);
    }
}
