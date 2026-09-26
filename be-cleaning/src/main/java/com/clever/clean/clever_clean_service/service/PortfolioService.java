package com.clever.clean.clever_clean_service.service;

import com.clever.clean.clever_clean_service.dto.request.CreatePortfolioRequest;
import com.clever.clean.clever_clean_service.dto.request.Image;
import com.clever.clean.clever_clean_service.dto.request.UpdatePortfolioRequest;
import com.clever.clean.clever_clean_service.dto.response.PortfolioDetailResponse;
import com.clever.clean.clever_clean_service.dto.response.PortfolioListResponse;
import com.clever.clean.clever_clean_service.entity.PortfolioEntity;
import com.clever.clean.clever_clean_service.entity.PortfolioImageEntity;
import com.clever.clean.clever_clean_service.repository.PortfolioImageRepository;
import com.clever.clean.clever_clean_service.repository.PortfolioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    private final PortfolioRepository portfolioRepository;
    private final PortfolioImageRepository portfolioImageRepository;

    public PortfolioService(PortfolioRepository portfolioRepository, PortfolioImageRepository portfolioImageRepository) {
        this.portfolioRepository = portfolioRepository;
        this.portfolioImageRepository = portfolioImageRepository;
    }

    @Transactional
    public boolean createPortfolio(CreatePortfolioRequest request) {
        PortfolioEntity portfolio = new PortfolioEntity();
        portfolio.setTitle(request.getTitle());
        portfolio.setDescription(request.getDescription());
        portfolio.setCategory(request.getCategory());

        PortfolioEntity savedPortfolio = portfolioRepository.save(portfolio);
        Long portfolioId = savedPortfolio.getId();

        if (request.getImages() != null && !request.getImages().isEmpty()) {
            for (Image imgDto : request.getImages()) {
                if (imgDto.getUrl() != null && !imgDto.getUrl().isBlank()) {
                    PortfolioImageEntity imageEntity = new PortfolioImageEntity();
                    imageEntity.setPortfolioId(portfolioId);
                    imageEntity.setUrl(imgDto.getUrl());
                    imageEntity.setPublicId(imgDto.getPublicId());
                    portfolioImageRepository.save(imageEntity);
                }
            }
        }

        return true;
    }

    @Transactional(readOnly = true)
    public List<PortfolioListResponse> getPortfoliosByCategory(String category) {
        List<PortfolioEntity> portfolios = portfolioRepository.findByCategoryOrderByCreatedAtDesc(category);
        if (portfolios.isEmpty()) {
            return Collections.emptyList();
        }

        List<Long> portfolioIds = portfolios.stream().map(PortfolioEntity::getId).toList();

        // N+1 query optimization: fetch all images for the listed portfolios in one query
        List<PortfolioImageEntity> allImages = portfolioImageRepository.findByPortfolioIdIn(portfolioIds);
        Map<Long, List<PortfolioImageEntity>> imagesByPortfolio = allImages.stream()
                .collect(Collectors.groupingBy(PortfolioImageEntity::getPortfolioId));

        // Get the first image as cover image
        Map<Long, String> coverImageMap = new HashMap<>();
        imagesByPortfolio.forEach((portId, imgList) -> {
            if (imgList != null && !imgList.isEmpty()) {
                imgList.sort(Comparator.comparing(PortfolioImageEntity::getId));
                coverImageMap.put(portId, imgList.get(0).getUrl());
            }
        });

        return portfolios.stream().map(p -> {
            PortfolioListResponse resp = new PortfolioListResponse();
            resp.setId(p.getId());
            resp.setTitle(p.getTitle());
            resp.setCategory(p.getCategory());
            resp.setCoverImageUrl(coverImageMap.get(p.getId()));
            resp.setCreatedAt(p.getCreatedAt());
            return resp;
        }).toList();
    }

    @Transactional(readOnly = true)
    public PortfolioDetailResponse getPortfolioDetail(Long id) {
        PortfolioEntity p = portfolioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Portfolio not found"));

        List<PortfolioImageEntity> imageEntities = portfolioImageRepository.findByPortfolioId(p.getId());
        List<Image> images = imageEntities.stream().map(img -> {
            Image imageDto = new Image();
            imageDto.setUrl(img.getUrl());
            imageDto.setPublicId(img.getPublicId());
            return imageDto;
        }).toList();

        PortfolioDetailResponse resp = new PortfolioDetailResponse();
        resp.setId(p.getId());
        resp.setTitle(p.getTitle());
        resp.setDescription(p.getDescription());
        resp.setCategory(p.getCategory());
        resp.setImages(images);
        resp.setCreatedAt(p.getCreatedAt());
        resp.setUpdatedAt(p.getUpdatedAt());

        return resp;
    }

    @Transactional
    public boolean updatePortfolio(UpdatePortfolioRequest request) {
        PortfolioEntity portfolio = portfolioRepository.findById(request.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Portfolio not found"));

        portfolio.setTitle(request.getTitle());
        portfolio.setDescription(request.getDescription());
        portfolio.setCategory(request.getCategory());

        portfolioRepository.save(portfolio);

        // Delete existing images first
        portfolioImageRepository.deleteByPortfolioId(request.getId());

        // Save new ones
        if (request.getImages() != null && !request.getImages().isEmpty()) {
            for (Image imgDto : request.getImages()) {
                if (imgDto.getUrl() != null && !imgDto.getUrl().isBlank()) {
                    PortfolioImageEntity imageEntity = new PortfolioImageEntity();
                    imageEntity.setPortfolioId(request.getId());
                    imageEntity.setUrl(imgDto.getUrl());
                    imageEntity.setPublicId(imgDto.getPublicId());
                    portfolioImageRepository.save(imageEntity);
                }
            }
        }

        return true;
    }

    @Transactional
    public boolean deletePortfolio(Long id) {
        PortfolioEntity portfolio = portfolioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Portfolio not found"));

        // Delete associated images
        portfolioImageRepository.deleteByPortfolioId(id);

        // Delete portfolio
        portfolioRepository.delete(portfolio);

        return true;
    }
}
