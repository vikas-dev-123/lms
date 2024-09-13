'use client'

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

const Intro: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <Toaster />
      <div className="flex gap-10 mb-10">
        {/* Sign In Button */}
        <div className="flex flex-col items-center">
          <SignInButton mode="modal">
            <Button className="p-6 bg-slate-950 text-white hover:bg-slate-950/30">
              Sign In
            </Button>
          </SignInButton>
        </div>

        {/* Sign Up Button */}
        <div className="flex flex-col items-center">
          <SignUpButton mode="modal">
            <Button className="p-6 bg-slate-950 text-white hover:bg-slate-950/30">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
