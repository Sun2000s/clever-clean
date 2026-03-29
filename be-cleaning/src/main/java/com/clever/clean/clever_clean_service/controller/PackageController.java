package com.clever.clean.clever_clean_service.controller;

import com.clever.clean.clever_clean_service.dto.ApiResponse;
import com.clever.clean.clever_clean_service.dto.response.PackageListResponse;
import com.clever.clean.clever_clean_service.entity.PackageEntity;
import com.clever.clean.clever_clean_service.repository.PackageRepository;
import com.clever.clean.clever_clean_service.service.PackageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/packages")
public class PackageController {

    private final PackageRepository packageRepository;
    private final PackageService packageService;

    public PackageController(PackageRepository packageRepository, PackageService packageService) {
        this.packageRepository = packageRepository;
        this.packageService = packageService;
    }

//    @GetMapping
//    public List<PackageEntity> getAllPackages() {
//        return packageRepository.findAll();
//    }
//
////    @PostMapping
//    public PackageEntity createPackage(@RequestBody CleaningPackage request) {
//
//        // optional: set ค่า default
//        request.setCreatedBy("admin");
//        request.setUpdatedBy("admin");
//
//        return packageRepository.save(request);
//    }

    @GetMapping()
    public ApiResponse<List<PackageListResponse>> getPackages() {
        return new ApiResponse<>("SC001", "Success", packageService.getPackageList());
    }
}