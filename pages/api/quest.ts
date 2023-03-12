// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt as string;
  const questionType = req.query.questionType as string;

  try {
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    if (prompt.length > 100) {
      return res.status(400).json({ error: "Prompt too long" });
    }

    if (!questionType) {
      return res.status(400).json({ error: "Missing question type" });
    }

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Give me Technical Interview Question regarding ${questionType} technical problem solving interview question
       for anyone who are pursuing career as ${prompt} devloper. please be specific with ${questionType} and ${prompt}\n`,
      max_tokens: 500,
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    const quote = completion.data.choices[0].text;

    res.status(200).json({ quote });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
