import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// OpenAi instance
const openai = new OpenAIApi(configuration);

// Express initialize
const app = express();

// Middlewares
app.use(cors());