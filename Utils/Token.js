import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  try {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: "45m",
    });

    return token;
  } catch (error) {
    throw new Error("Token generate error", error.message);
  }
};
