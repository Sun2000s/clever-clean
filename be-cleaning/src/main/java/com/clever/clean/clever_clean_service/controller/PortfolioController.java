package com.clever.clean.clever_clean_service.controller;

import com.clever.clean.clever_clean_service.dto.ApiResponse;
import com.clever.clean.clever_clean_service.dto.request.CreatePortfolioRequest;
import com.clever.clean.clever_clean_service.dto.request.UpdatePortfolioRequest;
import com.clever.clean.clever_clean_service.dto.response.PortfolioDetailResponse;
import com.clever.clean.clever_clean_service.dto.response.PortfolioListResponse;
import com.clever.clean.clever_clean_service.service.PortfolioService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/portfolios")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @PostMapping("/create")
    public ApiResponse<?> createPortfolio(@RequestBody @Valid CreatePortfolioRequest request) {
        boolean result = portfolioService.createPortfolio(request);
        return new ApiResponse<>("SC001", "Success", result);
    }

    @GetMapping
    public ApiResponse<List<PortfolioListResponse>> getPortfolios(@RequestParam("category") String category) {
        List<PortfolioListResponse> result = portfolioService.getPortfoliosByCategory(category);
        return new ApiResponse<>("SC001", "Success", result);
    }

    @GetMapping("/{id}")
    public ApiResponse<PortfolioDetailResponse> getPortfolioDetail(@PathVariable("id") Long id) {
        PortfolioDetailResponse result = portfolioService.getPortfolioDetail(id);
        return new ApiResponse<>("SC001", "Success", result);
    }

    @PostMapping("/update")
    public ApiResponse<?> updatePortfolio(@RequestBody @Valid UpdatePortfolioRequest request) {
        boolean result = portfolioService.updatePortfolio(request);
        return new ApiResponse<>("SC001", "Success", result);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> deletePortfolio(@PathVariable("id") Long id) {
        boolean result = portfolioService.deletePortfolio(id);
        return new ApiResponse<>("SC001", "Success", result);
    }
}
