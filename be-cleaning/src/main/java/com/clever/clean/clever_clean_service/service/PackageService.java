package com.clever.clean.clever_clean_service.service;

import com.clever.clean.clever_clean_service.dto.response.PackageListResponse;
import com.clever.clean.clever_clean_service.entity.PackageEntity;
import com.clever.clean.clever_clean_service.repository.PackageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {

    private final PackageRepository packageRepository;

    public PackageService(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

    public List<PackageListResponse> getPackageList(){
        List<PackageEntity> packageEntityList = packageRepository.findAll();

        List<PackageListResponse> response = packageEntityList.stream().map(p -> {
            PackageListResponse dto = new PackageListResponse();

            dto.setId(p.getId()); // format id
            dto.setName(p.getName());

            dto.setPrice(p.getPriceMin()); // ใช้ min เป็นหลัก

            dto.setMinDurationHours(p.getDurationMinHours());
            dto.setMaxDurationHours(p.getDurationMaxHours());

            dto.setMinStaff(p.getTeamSizeMin());
            dto.setMaxStaff(p.getTeamSizeMax());

            dto.setRating(p.getRating());
            dto.setImageUrl(p.getImageUrl());

            return dto;
        }).toList();

        return response;
    }

}
