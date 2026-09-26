package com.clever.clean.clever_clean_service.repository;

import com.clever.clean.clever_clean_service.entity.PortfolioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepository extends JpaRepository<PortfolioEntity, Long> {

    List<PortfolioEntity> findByCategoryOrderByCreatedAtDesc(String category);
}
