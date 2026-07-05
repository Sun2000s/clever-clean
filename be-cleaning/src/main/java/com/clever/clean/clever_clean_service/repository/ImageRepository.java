package com.clever.clean.clever_clean_service.repository;

import com.clever.clean.clever_clean_service.entity.ImagesEntity;
import com.clever.clean.clever_clean_service.entity.PackageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<ImagesEntity, Long> {

    ImagesEntity findByPackageIdAndType(Long pkgId, String type);

    void deleteByPackageIdAndType(Long packageId, String type);

}