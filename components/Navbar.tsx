/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/home",
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Generator",
    page: "/generator",
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navColor, setNavColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/home" ||
      router.asPath === "/about" ||
      router.asPath === "/generator"
    ) {
      setNavBg("transparent");
      setNavColor("#ecf0f3");
    } else {
      setNavBg("transparent");
      setNavColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full top-0 h-20 shadow-xl z-[100]"
          : "fixed top-0 w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" scroll={false}>
          <div className="container flex items-center space-x-2 mx-5">
            <BsPersonWorkspace />
            <span className="text-2xl font-bold text-white-500">
              Tech<span className="font-light text-gray-400">Quest</span>
            </span>
          </div>
        </Link>
        <div>
          <ul style={{ color: `${navColor}` }} className="hidden md:flex">
            <Link href="/" scroll={false}>
              <li className="mx-5 text-sm uppercase hover:border-b text-gray-400">
                Home
              </li>
            </Link>
            <Link href="/about" scroll={false}>
              <li className="mx-5 text-sm uppercase hover:border-b text-gray-400">
                About
              </li>
            </Link>
            <Link href="/generator" scroll={false}>
              <li className="mx-5 text-sm uppercase hover:border-b text-gray-400">
                Generator
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden mr-2">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          onClick={() => {
            setNav(false);
          }}
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-black/80 z-20 opacity-100"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/" scroll={false}>
              <div className="container flex items-center space-x-2">
                <BsPersonWorkspace />
                <span className="text-2xl font-bold text-white-500">
                  Tech<span className="font-light text-gray-400">Quest</span>
                </span>
              </div>
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full bg-slate-700 shadow-sm shadow-gray-500 p-3 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Get your technical interview questions here!
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/generator" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Generator
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
