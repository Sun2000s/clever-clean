// 👉 type จาก API (ดิบ)
export interface PackageApi {
  id: string;

  name: string;

  minDurationHours: number;
  maxDurationHours: number;

  minStaff: number;
  maxStaff: number;

  price: number;

  description: string;

  coverImage: {
    url: string;
    publicId: string;
  };

  galleryImages: {
    url: string;
    publicId: string;
  }[];

  highlights?: {
    header: string;
    bullets: string[];
  }[];

  benefits?: string[];

  rating?: number;
}

export interface ImageType {
  url: string;
  publicId: string;
}

export interface HighlightItem {
  header: string;
  bullets: string[];
}

export interface PackageType {
  id: string;

  name: string;

  minDurationHours: number;
  maxDurationHours: number;

  minStaff: number;
  maxStaff: number;

  price: number;

  description: string;

  coverImage: ImageType;

  galleryImages: ImageType[];

  highlights?: HighlightItem[];

  benefits?: string[];

  rating?: number;

  coverImageUrl: string;
}