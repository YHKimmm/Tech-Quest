/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function About() {
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

      <main className="max-w-screen-lg mx-auto px-4 md:px-8 py-16 md:py-20">
        <h1 className="text-2xl md:text-5xl font-medium text-center mb-10">
          About
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="md:w-1/2 mr-8">
            <p className="text-base md:text-xl">
              Tired of spending hours searching for technical interview
              questions? Do you want to be prepared for any technical interview
              on the go? Enter TechQuest!
            </p>
            <br />
            <p className="text-base md:text-xl">
              TechQuest is a tool for anyone looking to improve their interview
              skills, from full stack developers to UX/UI designers. You can
              generate custom interview questions based on your specific skill
              set and level of experience. Plus, our database is constantly
              updated with the latest and most relevant questions, so you can be
              sure you're being tested on up-to-date terms.
            </p>
            <br />
            <p className="text-base md:text-xl">
              TechQuest isn't just for prepping for interviews. It's also a
              great way to practice and improve your technical knowledge in your
              free time. With our easy-to-use interface, you can generate
              questions and get instant feedback on your answers, all from the
              convenience of your mobile device.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/homeimg.png"
              alt="Interviewees looking up questions"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </>
  );
}
