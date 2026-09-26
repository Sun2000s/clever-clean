package com.clever.clean.clever_clean_service.dto.response;

import com.clever.clean.clever_clean_service.dto.request.Image;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class PortfolioDetailResponse {

    private Long id;
    private String title;
    private String description;
    private String category;
    private List<Image> images;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
