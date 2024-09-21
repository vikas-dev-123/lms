'use client'
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Hero from './Hero';  
import Benefits from "./Benifits";
import Link from "next/link";

const Intro = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-[#fff] min-h-screen flex">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-col w-48 bg-[#9BB3B1] p-3 h-screen fixed">
        <div className="mb-6 flex justify-center">
          <Image 
            src="logo.svg"  
            alt="Logo"
            width={120}  
            height={120}  
            className="object-contain w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          />
        </div>
        <div className="flex flex-col gap-3 px-2">
          <SignInButton mode="modal">
            <Button className="w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md">
              Sign Up
            </Button>
          </SignUpButton>
          <Link
            href={'https://docs.google.com/forms/d/e/1FAIpQLScuNQyM1n6u9f4CgBeGavfkdJHmm5VjiKeoZq6bfue9D8DsbQ/viewform?usp=sf_link'}
          >
            <Button className='w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md'>
              Inquiry
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden fixed top-4 right-4 z-20">
        <Menu size={28} className="cursor-pointer text-[#9BB3B1]" onClick={toggleNav} />
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="bg-[#9BB3B1] h-full w-48 p-3 flex flex-col">
            <div className="mb-6 flex justify-center">
              <Image 
                src="logo.svg"  
                alt="Logo"
                width={80}  
                height={80}  
                className="object-contain w-20 h-20 sm:w-24 sm:h-24"
              />
            </div>
            <div className="flex flex-col gap-3 px-2">
              <SignInButton mode="modal">
                <Button className="w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md">
                  Sign Up
                </Button>
              </SignUpButton>
              <Link
                href={'https://docs.google.com/forms/d/e/1FAIpQLScuNQyM1n6u9f4CgBeGavfkdJHmm5VjiKeoZq6bfue9D8DsbQ/viewform?usp=sf_link'}
              >
                <Button className='w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md'>
                  Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-48 overflow-y-auto">
        {/* Hero Section */}
        <div className="py-16 lg:py-32 w-full h-auto bg-[#D1D1D1] relative z-[1] flex flex-col items-center">
          <Hero />
        </div>

        {/* Benefits Section */}
        <div className="w-full h-auto bg-[#dbd7d7] py-16 flex flex-col items-center">
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default Intro;
