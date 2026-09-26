package com.clever.clean.clever_clean_service.dto.response;

import com.clever.clean.clever_clean_service.dto.request.Highlight;
import com.clever.clean.clever_clean_service.dto.request.Image;
import lombok.Data;

import java.util.List;

@Data
public class PackageDetailResponse {

    private Long id;
    private String name;
    private int price;

    private int minDurationHours;
    private int maxDurationHours;

    private int minStaff;
    private int maxStaff;

    private float rating;
    private String description;

    private Image coverImage;
    private List<Image> galleryImages;

    private List<Highlight> highlights;
    private List<String> benefits;
}
