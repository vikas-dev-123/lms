'use client';
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Hero from './Hero';  
import Benefits from "./Benifits";
import Contact from "./Contact";

const Intro = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          <Button
            className='w-full py-2 text-sm text-white bg-seagreen hover:bg-[#4CAF50] rounded-md shadow-md'
            onClick={toggleModal}  // Open the modal on click
          >
            Inquiry
          </Button>
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
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-48 overflow-y-auto">
        <div className="py-16 lg:py-32 w-full h-auto bg-[#D1D1D1] relative z-[1] flex flex-col items-center">
          <Hero />
        </div>

        <div className="w-full h-auto bg-[#dbd7d7] py-16 flex flex-col items-center">
          <Benefits />
        </div>

       

        {/* Modal for Inquiry */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center p-4 sm:p-6">
            <div className="bg-white rounded-2xl p- w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2  text-gray-500 hover:text-gray-700 font-bold"
                onClick={toggleModal}  // Close the modal
              >
                &#x2715;  {/* This is a simple "X" icon */}
              </button>
              
              <Contact />   
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
