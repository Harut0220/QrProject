import jwt from "jsonwebtoken";

const generateAccessToken = () => {
  try {
    //        inch data es shifrovka anum tokeni mej???
    const token = jwt.sign({}, process.env.ACCESS_TOKEN, {
      expiresIn: "15m",
    });

    return token;
  } catch (error) {
    throw new Error("Token generate error", error.message);
  }
};

export default generateAccessToken;
