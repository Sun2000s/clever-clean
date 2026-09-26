package com.clever.clean.clever_clean_service.dto.response;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PortfolioListResponse {

    private Long id;
    private String title;
    private String category;
    private String coverImageUrl;
    private LocalDateTime createdAt;
}
