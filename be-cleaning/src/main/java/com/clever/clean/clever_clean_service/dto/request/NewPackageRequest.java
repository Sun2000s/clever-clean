package com.clever.clean.clever_clean_service.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class NewPackageRequest {

    private String name;

    private int minDurationHours;
    private int maxDurationHours;

    private int minStaff;
    private int maxStaff;

    private int price;

    private String description;

    private Image coverImage;

    private List<Image> galleryImages;

    private List<Highlight> highlights;
    private List<String> benefits;

}

