
export interface HighlightItem {
  header: string;
  bullets: string[];
}

// ข้อมูลดิบจาก API
export interface PackageApi {
  id: number;
  name: string;
  minDurationHours: number;
  maxDurationHours: number;
  minStaff: number;
  maxStaff: number;
  price: number;
  description?: string;
  coverImageUrl?: string;
  currency?: string | null;
  rating?: number;
  highlights?: HighlightItem[];
  benefits?: string[];
}

export interface ImageType {
  url: string;
  publicId: string;
}

export interface PackageType {
  id: number;
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
