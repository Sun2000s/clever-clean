package com.clever.clean.clever_clean_service.entity;

import com.clever.clean.clever_clean_service.dto.request.Highlight;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "packages")
@Data
public class PackageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    @Column(name = "price")
    private Integer price;

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

    @Column(name = "description")
    private String description;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "benefit", columnDefinition = "jsonb")
    private List<String> benefit;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "highlight", columnDefinition = "jsonb")
    private List<Highlight> highlight;
    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private String createdBy;
    private String updatedBy;
}