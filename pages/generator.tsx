import React, { useState, FormEvent } from "react";
import QuestionTypes from "@/components/QuestionTypes";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TechInterviewQuestionGenerator from "@/components/TechInterviewQuestionGenerator";

export default function generator() {
  const [selectedQuestionType, setSelectedQuestionType] = useState("");

  const [quote, setQuote] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteLoadingError, setQuoteLoadingError] = useState(false);

  const handleQuestionTypeSelect = (questionType: string) => {
    setSelectedQuestionType((prevQuestionType) =>
      prevQuestionType === questionType ? "" : questionType
    );
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formaData = new FormData(e.target as HTMLFormElement);
    const prompt = formaData.get("prompt")?.toString();

    console.log("prompt", prompt);

    if (prompt) {
      try {
        setQuote("");
        setQuoteLoading(true);
        setQuoteLoadingError(false);
        const response = await fetch(
          `/api/quest?prompt=${encodeURIComponent(
            prompt
          )}&questionType=${encodeURIComponent(selectedQuestionType)}`
        );
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
        setQuote(data.quote);
      } catch (error) {
        console.error(error);
        setQuoteLoadingError(true);
      } finally {
        setQuoteLoading(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title>TechQuest</title>
        <meta
          name="description"
          content="A website using AI Prompts to help those in the tech industry prepare for interviews"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="md:flex md:justify-center md:items-center min-h-screen">
          <TechInterviewQuestionGenerator
            handleSubmit={handleSubmit}
            quote={quote}
            setQuote={setQuote}
            quoteLoading={quoteLoading}
            quoteLoadingError={quoteLoadingError}
          />
          <QuestionTypes
            selectedQuestionType={selectedQuestionType}
            handleQuestionTypeSelect={handleQuestionTypeSelect}
          />
        </div>
      </main>
    </>
  );
}
