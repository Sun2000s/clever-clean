package com.clever.clean.clever_clean_service.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.util.List;

@Data
public class UpdatePortfolioRequest {

    @NotNull(message = "ID is required")
    @Min(value = 1, message = "ID must be a positive number")
    private Long id;

    @NotBlank(message = "Title is required")
    private String title;

    private String description;

    @NotBlank(message = "Category is required")
    @Pattern(regexp = "REGULAR|DAILY", message = "Category must be either REGULAR or DAILY")
    private String category;

    private List<Image> images;
}
