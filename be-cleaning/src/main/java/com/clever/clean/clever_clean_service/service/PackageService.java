package com.clever.clean.clever_clean_service.service;

import com.clever.clean.clever_clean_service.dto.request.Image;
import com.clever.clean.clever_clean_service.dto.request.NewPackageRequest;
import com.clever.clean.clever_clean_service.dto.response.PackageListResponse;
import com.clever.clean.clever_clean_service.entity.ImagesEntity;
import com.clever.clean.clever_clean_service.entity.PackageEntity;
import com.clever.clean.clever_clean_service.repository.ImageRepository;
import com.clever.clean.clever_clean_service.repository.PackageRepository;
import org.springframework.stereotype.Service;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

@Service
public class PackageService {

    private final PackageRepository packageRepository;
    private final ImageRepository imageRepository;

    public PackageService(PackageRepository packageRepository, ImageRepository imageRepository) {
        this.packageRepository = packageRepository;
        this.imageRepository = imageRepository;
    }

    public List<PackageListResponse> getPackageList(){
        List<PackageEntity> packageEntityList = packageRepository.findAll();

        List<PackageListResponse> response = packageEntityList.stream().map(p -> {
            PackageListResponse pkg = new PackageListResponse();

            pkg.setId(p.getId()); // format id
            pkg.setName(p.getName());

            pkg.setPrice(p.getPrice());

            pkg.setMinDurationHours(p.getDurationMinHours());
            pkg.setMaxDurationHours(p.getDurationMaxHours());

            pkg.setMinStaff(p.getTeamSizeMin());
            pkg.setMaxStaff(p.getTeamSizeMax());

            pkg.setRating(p.getRating());



            ImagesEntity img = imageRepository.findByPackageIdAndType(pkg.getId(), "COVER");

            pkg.setCoverImageUrl(img.getUrl());

            return pkg;
        }).toList();



        return response;
    }

    public boolean createPackage(NewPackageRequest request){

        PackageEntity pkg = new PackageEntity();

        ObjectMapper mapper = new ObjectMapper();

        pkg.setName(request.getName());
        pkg.setDurationMinHours(request.getMinDurationHours());
        pkg.setDurationMaxHours(request.getMaxDurationHours());
        pkg.setTeamSizeMin(request.getMinStaff());
        pkg.setTeamSizeMax(request.getMaxStaff());
        pkg.setPrice(request.getPrice());
        pkg.setDescription(request.getDescription());

        pkg.setHighlight(request.getHighlights());
        pkg.setBenefit(request.getBenefits());


        Long pkgId = packageRepository.save(pkg).getId();

        if (request.getCoverImage() != null){
            ImagesEntity image = new ImagesEntity();
            image.setPackageId(pkgId);
            image.setUrl(request.getCoverImage().getUrl());
            image.setType("COVER");
            image.setPublicId(request.getCoverImage().getPublicId());

            imageRepository.save(image);
        }

        if(!request.getGalleryImages().isEmpty()){
            for(Image image: request.getGalleryImages()){

                ImagesEntity newImage = new ImagesEntity();
                newImage.setPackageId(pkgId);
                newImage.setUrl(image.getUrl());
                newImage.setType("GALLERY");
                newImage.setPublicId(image.getPublicId());

                imageRepository.save(newImage);
            }
        }

        return true;
    }

}
