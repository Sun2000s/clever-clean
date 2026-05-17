package com.clever.clean.clever_clean_service.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class Highlight {
    private String header;
    private List<String> bullets;
}
