package com.clever.clean.clever_clean_service.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "packages")
@Data
public class PackageEntity {

    @Id
    private String id;

    private String name;

    @Column(name = "price_min")
    private Integer priceMin;

    @Column(name = "price_max")
    private Integer priceMax;

    @Column(name = "duration_min_hours")
    private Integer durationMinHours;

    @Column(name = "duration_max_hours")
    private Integer durationMaxHours;

    @Column(name = "team_size_min")
    private Integer teamSizeMin;

    @Column(name = "team_size_max")
    private Integer teamSizeMax;

    private Float rating;

    @Column(name = "image_url")
    private String imageUrl;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private String createdBy;
    private String updatedBy;
}