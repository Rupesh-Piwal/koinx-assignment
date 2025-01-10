"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Crypto Taxes", href: "#" },
    { label: "Free Tools", href: "#" },
    { label: "Resource Center", href: "#" },
  ];

  return (
    <div className="flex items-center justify-between px-4 md:px-[60px] py-[12px] bg-white shadow-md">
      <div>
        <Image src={logo} alt="koinx-logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.label} className="hover:text-blue-600 cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>
        <Button className="px-[22px] bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-8">
              <ul className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className="text-lg hover:text-blue-600 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
