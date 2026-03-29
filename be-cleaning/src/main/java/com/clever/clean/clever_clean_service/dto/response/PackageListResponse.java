package com.clever.clean.clever_clean_service.dto.response;

import lombok.Data;

@Data
public class PackageListResponse {

    private String id;
    private String name;

    private int price;
    private String currency;

    private int minDurationHours;
    private int maxDurationHours;

    private int minStaff;
    private int maxStaff;

    private float rating;

    private String imageUrl;
}
