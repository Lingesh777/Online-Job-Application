package com.lingesh.stockmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.stockmanagement.Model.Addjob;
import com.lingesh.stockmanagement.Service.AddjobService;
import com.lingesh.stockmanagement.constant.Api;
import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin("*")
public class AddjobController {
    @Autowired
    private AddjobService as;

    @PostMapping("/addjob")
    public String post(@RequestBody Addjob aj)
    {
        as.addjob(aj);
        return "job posted successfully";
    }
    @GetMapping("/getjob")
    public List<Addjob> get()
    {
        return as.getjob();
    }
    @GetMapping("/getjob/{id}")
    public Addjob getById(@PathVariable int id)
    {
        return as.getjobById(id);
    }
    @PutMapping("/updatejob/{id}")
    public String update(@PathVariable long id, @RequestBody Addjob aj) {
        aj.setId(id);
        return as.update(aj);
    }
    @DeleteMapping("/deletejob/{id}")
    public String del(@PathVariable int id)
    {
        return as.delete(id);
    }
}
