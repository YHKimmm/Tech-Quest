import Image from "next/image";
import React from "react";
import Spinner from "./Spinner";

interface TechInterviewQuestionGeneratorProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  quoteLoading: boolean;
  quoteLoadingError: boolean;
}

export default function TechInterviewQuestionGenerator({
  handleSubmit,
  quote,
  setQuote,
  quoteLoading,
  quoteLoadingError,
}: TechInterviewQuestionGeneratorProps) {
  return (
    <>
      <main className="mt-10 flex flex-col justify-center items-center mx-auto relative min-h-[600px]">
        <div className="container px-4 mx-auto justify-center text-center">
          <h1 className="text-3xl md:text-3xl font-medium mb-12">
            Enter the Job Title
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-center">
              <input
                className="p-3 w-full border rounded-3xl bg-transparent max-w-sm text-center placeholder:text-neutral-400 hover:bg-transparent active:bg-transparent"
                id="prompt"
                name="prompt"
                type="text"
                placeholder="e.g. Frontend Developer..."
                maxLength={100}
              />
            </div>
            <div className="mb-4 flex justify-center">
              <textarea
                className="p-5 h-64 w-full border rounded-3xl bg-transparent sm:min-w-[320px] placeholder:text-neutral-400 hover:bg-transparent active:bg-transparent"
                id="prompt"
                name="prompt"
                placeholder="response generated here..."
                maxLength={100}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>
            <div className="text-center mt-6 tracking-widest font-bold text-base">
              {quoteLoading ? "Loading..." : ""}
            </div>
            <button
              type="submit"
              // className="hidden"
              // className="bg-white hover:bg-white-500font-semibold px-6 border border-white-500 hover:bg-slate-300 rounded-3xl mt-6 inline w-40 h-10 text-black"
              className="bg-white hover:bg-white-500 font-semibold px-6 border border-white-500 hover:bg-slate-300 rounded-3xl mt-6 inline w-40 h-10 text-black"
              disabled={quoteLoading}
            >
              Enter
            </button>
          </form>
          {quoteLoading && <Spinner />}
          {quoteLoadingError && (
            <div className="mt-12 border-white">
              There was an error loading the interview questions
            </div>
          )}
        </div>
      </main>
    </>
  );
}
