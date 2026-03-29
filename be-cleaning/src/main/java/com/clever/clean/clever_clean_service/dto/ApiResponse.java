package com.clever.clean.clever_clean_service.dto;

import lombok.Data;

@Data
public class ApiResponse<T> {
    private String statusCode;
    private String message;
    private T data;

    public ApiResponse(String statusCode, String message, T data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}
