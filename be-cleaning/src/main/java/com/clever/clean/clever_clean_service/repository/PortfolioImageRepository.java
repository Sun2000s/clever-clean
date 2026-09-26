package com.clever.clean.clever_clean_service.repository;

import com.clever.clean.clever_clean_service.entity.PortfolioImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioImageRepository extends JpaRepository<PortfolioImageEntity, Long> {

    List<PortfolioImageEntity> findByPortfolioId(Long portfolioId);

    List<PortfolioImageEntity> findByPortfolioIdIn(List<Long> portfolioIds);

    void deleteByPortfolioId(Long portfolioId);
}
