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

// Connecting backend to frontend
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

app.post("/", async (req, res) => {
  try {
    // Pass prompt from frontend
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.state(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {}
});
