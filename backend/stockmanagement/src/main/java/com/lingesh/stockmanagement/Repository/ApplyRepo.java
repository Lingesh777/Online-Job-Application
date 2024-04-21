package com.lingesh.stockmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lingesh.stockmanagement.Model.Apply;
@Repository
public interface ApplyRepo extends JpaRepository<Apply,Integer>{
    
}
