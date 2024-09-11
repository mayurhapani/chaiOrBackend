import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details
  const { username, email, fullName, password } = req.body;

  //validation error
  if (
    [username, email, fullName, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Username validation: must be at least 3 characters long
  if (username.length < 3) {
    throw new ApiError(400, "Username must be at least 3 characters long");
  }

  // Email validation: must match the email pattern
  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid email format");
  }

  // Password validation: must include at least one capital letter, one lowercase letter, one digit, one special character, and be at least 8 characters long
  if (!passwordRegex.test(password)) {
    throw new ApiError(
      400,
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
    );
  }

  //check if user already exist //email/username
  //files //avatar and cover image
  //upload files to cloudinary server
  //hash password
  //create user object and create db entry
  //remove password and refresh token from response
  //check user created or not
  //return response
});

export { registerUser };
