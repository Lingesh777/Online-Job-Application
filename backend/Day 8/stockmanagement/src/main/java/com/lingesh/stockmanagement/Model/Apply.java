package com.lingesh.stockmanagement.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lingesh.stockmanagement.Model.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="applyjobs")
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;
    private String resume;
    private String name;
    private String jobtitle;
    private String joblocation;
    private String jobtype;
    private String cgpa;
    private String jobexperience;
    private String dob;
    private String projects;
    private String jobdescription;
    private String[] skills;
    private String status;

    @ManyToOne()
    @JoinColumn(name="uid")
    @JsonIgnore
    private User user;
}
