package com.clever.clean.clever_clean_service.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "images")
@Data
public class ImagesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "public_id", nullable = false)
    private String publicId;

    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "package_id", nullable = false)
    private Long packageId;

    @Column(name = "type", nullable = false)
    private String type;
}