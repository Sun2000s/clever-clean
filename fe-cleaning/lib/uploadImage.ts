export async function uploadImage(
  file: File
) {
  try {
    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      process.env
        .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const cloudName =
      process.env
        .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data =
      await response.json();

    console.log(
      "CLOUDINARY RESPONSE:",
      data
    );

    if (!response.ok) {
      throw new Error(
        data?.error?.message ||
          "Upload failed"
      );
    }

    return {
      url: data.secure_url,
      publicId: data.public_id,
    };
  } catch (error) {
    console.error(
      "UPLOAD IMAGE ERROR:",
      error
    );

    return null;
  }
}