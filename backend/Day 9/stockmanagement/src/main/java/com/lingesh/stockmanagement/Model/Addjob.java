package com.lingesh.stockmanagement.Model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="jobs")
public class Addjob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orgname;
    private String jobtitle;
    private String joblocation;
    private String jobtype;
    private String jobpackage;
    private String jobexperience;
    private String jobdeadline;
    private int jobopenings;
    private String jobdescription;
    private String[] educationalrequirements;
    private String[] skills;
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable=false,updatable = false)
    private Date createdAt;

    @PrePersist
    protected void onCreate(){
        createdAt=new Date();
    }
}
