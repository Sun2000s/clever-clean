"use client";

import { useState } from "react";
import Image from "next/image";
import { uploadImage } from "@/lib/uploadImage";

interface BenefitItem {
  title: string;
  description: string;
}

interface HighlightItem {
  header: string;
  bullets: string[];
}

interface ImageItem {
  url: string;
  publicId: string;
}

interface Props {
  initialData?: any;
  onSubmit: (data: any) => Promise<void> | void;
}

export default function PackageForm({
  initialData,
  onSubmit,
}: Props) {
  // =========================
  // BASIC INFO
  // =========================

  const [name, setName] = useState(
    initialData?.name || ""
  );

  const [price, setPrice] = useState(
    initialData?.price || 0
  );

  const [minDurationHours, setMinDurationHours] =
    useState(
      initialData?.minDurationHours || 1
    );

  const [maxDurationHours, setMaxDurationHours] =
    useState(
      initialData?.maxDurationHours || 2
    );

  const [minStaff, setMinStaff] = useState(
    initialData?.minStaff || 1
  );

  const [maxStaff, setMaxStaff] = useState(
    initialData?.maxStaff || 2
  );

  const [description, setDescription] =
    useState(
      initialData?.description || ""
    );

  // =========================
  // IMAGES
  // =========================

  const [coverImage, setCoverImage] =
  useState<ImageItem | null>(
    initialData?.coverImage || null
  );

  const [galleryImages, setGalleryImages] =
    useState<ImageItem[]>(
      initialData?.galleryImages || []
    );

  // =========================
  // HIGHLIGHTS
  // =========================

  const [highlights, setHighlights] =
    useState<HighlightItem[]>(
      initialData?.highlights || [
        {
          header: "",
          bullets: [""],
        },
      ]
    );

  // =========================
  // BENEFITS
  // =========================

  const [benefits, setBenefits] =
    useState<string[]>(
      initialData?.benefits || [
        ""
      ]
    );

  // =========================
  // UI STATES
  // =========================

  const [isUploading, setIsUploading] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [coverPreview, setCoverPreview] =
  useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  // =========================
  // COVER IMAGE UPLOAD
  // =========================

  const handleCoverUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    try {

      setErrorMessage("");
      setSuccessMessage("");

      setIsUploading(true);

      // preview ทันที
      const previewUrl =
        URL.createObjectURL(file);

      setCoverPreview(previewUrl);

      console.log(
        "START UPLOAD COVER IMAGE"
      );

      const uploaded =
        await uploadImage(file);

      console.log(
        "UPLOAD RESULT:",
        uploaded
      );

      if (!uploaded?.url) {

        throw new Error(
          "Failed to upload cover image"
        );

      }

      // สำคัญมาก
      setCoverImage({
        url: uploaded.url,
        publicId:
          uploaded.publicId,
      });

      setSuccessMessage(
        "Cover image uploaded successfully"
      );

    } catch (error: any) {

      console.error(
        "COVER UPLOAD ERROR:",
        error
      );

      setCoverImage(null);

      setCoverPreview("");

      setErrorMessage(
        error?.message ||
        "Failed to upload cover image"
      );

    } finally {

      setIsUploading(false);

    }
  };
  // =========================
  // GALLERY IMAGE UPLOAD
  // =========================

  const handleGalleryUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    try {
      setErrorMessage("");
      setSuccessMessage("");

      setIsUploading(true);

      const uploadedImages: ImageItem[] = [];

      for (const file of Array.from(files)) {
        const uploaded =
          await uploadImage(file);

        console.log(
          "GALLERY UPLOAD:",
          uploaded
        );

        if (!uploaded?.url) {
          throw new Error(
            "Failed to upload gallery image"
          );
        }

        uploadedImages.push({
          url: uploaded.url,
          publicId:
            uploaded.publicId,
        });
      }

      setGalleryImages((prev) => [
        ...prev,
        ...uploadedImages,
      ]);

      setSuccessMessage(
        "Gallery uploaded successfully"
      );
    } catch (error: any) {
      console.error(
        "GALLERY ERROR:",
        error
      );

      setErrorMessage(
        error?.message ||
          "Failed to upload gallery images"
      );
    } finally {
      setIsUploading(false);
    }
  };
  // =========================
  // HIGHLIGHTS
  // =========================

  const handleHighlightHeaderChange = (
    index: number,
    value: string
  ) => {
    const updated = [...highlights];

    updated[index].header = value;

    setHighlights(updated);
  };

  const handleBulletChange = (
    highlightIndex: number,
    bulletIndex: number,
    value: string
  ) => {
    const updated = [...highlights];

    updated[highlightIndex].bullets[
      bulletIndex
    ] = value;

    setHighlights(updated);
  };

  const addHighlight = () => {
    setHighlights([
      ...highlights,
      {
        header: "",
        bullets: [""],
      },
    ]);
  };

  const addBullet = (
    highlightIndex: number
  ) => {
    const updated = [...highlights];

    updated[highlightIndex].bullets.push(
      ""
    );

    setHighlights(updated);
  };

  // =========================
  // BENEFITS
  // =========================

  const handleBenefitChange = (
    index: number,
    value: string
  ) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };

  const addBenefit = () => {
    setBenefits([
      ...benefits,
      ""
    ]);
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setErrorMessage("");
      setSuccessMessage("");

      // กันกด save ตอน upload
      if (isUploading) {
        throw new Error(
          "Please wait until image upload finishes"
        );
      }

      // VALIDATE COVER
      if (
        !coverPreview &&
        !coverImage?.url
      ) {

        throw new Error(
          "Please upload cover image first"
        );
      }

      setIsSaving(true);

      const payload = {
        name,
        price,

        minDurationHours,
        maxDurationHours,

        minStaff,
        maxStaff,

        description,

        coverImage,

        galleryImages,

        highlights,

        benefits,
      };

      console.log(
        "FINAL PAYLOAD:",
        payload
      );

      await onSubmit(payload);

      setSuccessMessage(
        "Package saved successfully"
      );
    } catch (error: any) {
      console.error(
        "SAVE PACKAGE ERROR:",
        error
      );

      if (
        error?.message?.includes(
          "Failed to fetch"
        )
      ) {
        setErrorMessage(
          "Cannot connect to backend server"
        );
      } else {
        setErrorMessage(
          error?.message ||
            "Something went wrong"
        );
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Package Information
        </h2>

        <p className="text-gray-500 mt-2">
          Fill in package details below
        </p>
      </div>

      {/* ERROR */}
      {errorMessage && (
        <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {/* SUCCESS */}
      {successMessage && (
        <div className="mb-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-600">
          {successMessage}
        </div>
      )}

      {/* LOADING */}
      {(isUploading || isSaving) && (
        <div className="mb-4 rounded-xl bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-700">
          {isUploading
            ? "Uploading image..."
            : "Saving package..."}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-black"
      >

        {/* NAME */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Package Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(Number(e.target.value))
            }
            className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* DURATION */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Min Duration
            </label>

            <input
              type="number"
              value={minDurationHours}
              onChange={(e) =>
                setMinDurationHours(
                  Number(e.target.value)
                )
              }
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Max Duration
            </label>

            <input
              type="number"
              value={maxDurationHours}
              onChange={(e) =>
                setMaxDurationHours(
                  Number(e.target.value)
                )
              }
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

        </div>

        {/* STAFF */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Min Staff
            </label>

            <input
              type="number"
              value={minStaff}
              onChange={(e) =>
                setMinStaff(
                  Number(e.target.value)
                )
              }
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Max Staff
            </label>

            <input
              type="number"
              value={maxStaff}
              onChange={(e) =>
                setMaxStaff(
                  Number(e.target.value)
                )
              }
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

        </div>

        {/* COVER IMAGE */}
        <div>

          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Cover Image
          </label>

          <label className="flex items-center justify-center w-full h-56 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition overflow-hidden">

            <input
              type="file"
              accept="image/*"
              onChange={handleCoverUpload}
              className="hidden"
            />

            {coverPreview ||
              coverImage?.url ? (
                <div className="relative w-full h-full">

                  <Image
                    src={
                      coverPreview ||
                      coverImage?.url ||
                      "/placeholder.png"
                    }
                    alt="Cover"
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                    Uploaded
                  </div>

                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-500">

                  <span>
                    Click to upload cover image
                  </span>

                  <span className="text-xs text-gray-400">
                    PNG / JPG
                  </span>

                </div>
              )}

          </label>

        </div>

        {/* GALLERY */}
        <div>

          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Gallery Images
          </label>

          <label className="flex items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition mb-4">

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryUpload}
              className="hidden"
            />

            <span className="text-gray-500">
              Click to upload gallery images
            </span>

          </label>

          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-28"
              >
                <Image
                  src={img.url}
                  alt="gallery"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

        </div>

        {/* DESCRIPTION */}
        <div>

          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            rows={5}
            className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-4 py-3 outline-none resize-none"
          />

        </div>

        {/* HIGHLIGHTS */}
        <div>

          <div className="flex items-center justify-between mb-4">

            <label className="text-sm font-semibold text-gray-700">
              Highlights
            </label>

            <button
              type="button"
              onClick={addHighlight}
              className="text-sm font-medium text-black"
            >
              + Add Highlight
            </button>

          </div>

          <div className="space-y-5">

            {highlights.map(
              (
                highlight,
                highlightIndex
              ) => (
                <div
                  key={highlightIndex}
                  className="border border-gray-200 rounded-2xl p-4 bg-gray-50"
                >

                  <input
                    type="text"
                    placeholder="Highlight Header"
                    value={highlight.header}
                    onChange={(e) =>
                      handleHighlightHeaderChange(
                        highlightIndex,
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 outline-none"
                  />

                  <div className="space-y-3">

                    {highlight.bullets.map(
                      (
                        bullet,
                        bulletIndex
                      ) => (
                        <input
                          key={bulletIndex}
                          type="text"
                          placeholder="Bullet point"
                          value={bullet}
                          onChange={(e) =>
                            handleBulletChange(
                              highlightIndex,
                              bulletIndex,
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none"
                        />
                      )
                    )}

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addBullet(
                        highlightIndex
                      )
                    }
                    className="mt-4 text-sm font-medium text-black"
                  >
                    + Add Bullet
                  </button>

                </div>
              )
            )}

          </div>

        </div>

        {/* BENEFITS */}
        <div>

          <div className="flex items-center justify-between mb-3">

            <label className="text-sm font-semibold text-gray-700">
              Benefits
            </label>

            <button
              type="button"
              onClick={addBenefit}
              className="text-sm font-medium text-black"
            >
              + Add
            </button>

          </div>

          <div className="space-y-4">

            {benefits.map(
              (benefit, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-2xl bg-gray-50 p-4"
                >

                  <input
                    type="text"
                    placeholder="Benefit title"
                    onChange={(e) =>
                      handleBenefitChange(
                        index,
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-3 outline-none"
                  />


                </div>
              )
            )}

          </div>

        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={
            isSaving || isUploading
          }
          className="
            w-full
            bg-black
            hover:bg-gray-800
            disabled:bg-gray-400
            disabled:cursor-not-allowed
            text-white
            py-4
            rounded-2xl
            font-semibold
            transition
          "
        >
          {isSaving
            ? "Saving..."
            : isUploading
            ? "Uploading..."
            : "Save Package"}
        </button>

      </form>
    </div>
  );
}

