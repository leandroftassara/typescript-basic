import express from "express";

export const PORT = 3030;
export const app = express();

app.use(express.json());
