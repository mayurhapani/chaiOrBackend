import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFIlePath) => {
  try {
    if (!localFIlePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFIlePath, {
      resource_type: "auto",
    });

    //file has been uploaded successful
    console.log("file has been uploaded on cloudinary: ", response.url);

    return response;
  } catch (error) {
    fs.unlink(localFIlePath); // remove file from local server if error
    return null;
  }
};

export { uploadOnCloudinary };
