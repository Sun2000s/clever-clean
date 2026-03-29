package com.clever.clean.clever_clean_service.repository;

import com.clever.clean.clever_clean_service.entity.PackageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<PackageEntity, Long> {

}