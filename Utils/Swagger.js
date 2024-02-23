import { configDotenv } from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";

const dotenv = configDotenv();

export const options = {
  explorer: true,
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Santa",
      version: "1.0.0",
      description: "Student Project:Secret Santa App APIs",
    },
    servers: [
      { url: "http://santa.trigger.ltd" },
      { url: "http://195.181.242.194" },
      { url: `http://localhost:${process.env.PORT}` },
    ],
    components: {
      request: {
        Seed: {
          type: "object",
          properties: {
            itemsId: { type: "string", description: "Item ID" },
            size: { type: ["string"], description: "Teacher ID" },
          },
          example: {
            itemId: "65b358b558bb92966f212454",
            size: [3],
          },
        },
        Items: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Item _id" },
            title: { type: "string", description: "Item Name" },
            description: { type: "string", description: "Item description" },
            img: { type: "Item Icon" },
          },
          example: {
            _id: "65b358b558bb92966f212454",
            title: "Family Gift",
            img: "giftIcon1",
          },
        },
        subCategories: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Sub Categories ID" },
            title: { type: "string", description: "Categories Title" },
            subCategories: {
              type: "array",
              size: [6],
              properties: {
                _id: { type: "string", description: "Boxes ID" },
                name: { type: "string", description: "Box name" },
                img: { type: "string", description: "Box image" },
                price: { type: "number", description: "Box price" },
                CategoriesId: {
                  type: "string",
                  description: "Parent categories ID",
                },
              },
              example: {
                _id: "65bf6475f15d791a1a30a783",
                title: "mother",
                subCategories: {
                  _id: "65bf6475f15d791a1a30a78c",
                  name: "Christmas gift",
                  img: "product_rangeImg",
                  price: 50,
                  CategoriesId: "65bf6475f15d791a1a30a783",
                },
              },
            },
            giftItemsId: { type: "string", description: "Parent Item ID" },
          },
          // example: {
          //   _id: "65b358b558bb92966f212454",
          //   title: "father",
          //   subCategories: [
          //     {
          //       _id: "65bf6475f15d791a1a30a783",
          //       name: "CHristmas gift",
          //       img: "product_rangeImg",
          //       price: 50,
          //     },
          //   ],
          //   giftItemsId: "65bf6475f15d791a1a30a77f",
          // },
        },
        Box: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Box Id" },
            name: { type: "string", description: "Box Name" },
            img: { type: "string", description: "Box Image" },
            price: { type: "number", description: "Box Price" },
          },
          example: {
            _id: "65c33c668ed86306d1de98f2",
            name: "Christmas gift",
            img: "product_rangeImg",
            price: 50,
          },
        },
      },
     
      securitySchemes: {
        bearerAuth: {
          type: "http",
          name: "Authorization",
          scheme: "bearer",
          in: "header",
          // bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./Router/*.js"],
};

export const specs = swaggerJSDoc(options);