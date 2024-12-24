"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import {
  HeartIcon,
  Menu,
  SearchIcon,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import BrandFullLogo from "../../logo/brand-full-logo";
import { ThemeToggler } from "../../ThemeProvider/theme-toggler";
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
import { NavLinksWithName } from "@/constants/global-constants";
import { useTranslation } from "react-i18next";

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = () =>
    NavLinksWithName.map((item, index) => {
      if (item.children) {
        return (
          <div key={index} className="group text-[13px] font-semibold">
            <Link
              href={item.href}
              className="text-white hover:text-gray-200 transition-colors flex items-center gap-1"
            >
              {t(`navigation.${item.name}`)}
              <ChevronDown className="h-3 w-3 text-secondary" />
            </Link>
            <div
              className={`absolute hidden group-hover:block bg-transparent pt-6 ${
                item.href.includes("shop") ? "w-full left-0" : "w-[220px]"
              }`}
            >
              {item.children.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 bg-white"
                >
                  {t(`navigation.${child.name}`)}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <Link
          href={item.href}
          key={index}
          className="text-white hover:text-gray-200 transition-colors text-[13px] font-semibold"
        >
          {t(`navigation.${item.name}`)}
        </Link>
      );
    });

  return (
    <div
      className={`w-full fixed duration-500 top-0 z-50 left-0 transition-colors ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent "
      }`}
    >
      <div className="max-w-[100vw] overflow-x-hidden lg:max-w-[1370px] mx-auto ">
        <div className=" flex pt-[18px]  items-center gap-4 min-h-[4rem] pb-2 lg:pb-0">
          {/* Left Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6 w-full ">
            <div className="w-[170px]">
              <div
                className={`transition-all duration-500 ${
                  isScrolled ? "w-[125px] h-[60px]" : "w-[170px] h-[77px]"
                }`}
              >
                <BrandFullLogo height={77} />
              </div>
            </div>
            {renderNavLinks()}
          </nav>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden hover:bg-transparent w-fit p-0"
              >
                <Menu className="h-5 w-5 text-white" />
                <span className="text-[13px] gont-bold text-secondary">
                  MENU
                </span>
              </Button>
            </SheetTrigger>
            <div
              className={`
                absolute flex gap-4 lg:hidden 
                ${
                  currentLanguage === "ar"
                    ? "right-[calc(50%_-_65px)]"
                    : "right-[calc(50%_-_126px)]"
                }
              `}
            >
              <div className="w-[126px] ">
                <BrandFullLogo height={60} />
              </div>
              <div className="flex items-center gap-4 text-secondary">
                <div className="relative">
                  <ShoppingCart />
                  <p className="absolute -top-1 -right-2 text-xs bg-[#f89e6b] rounded-full h-4 grid place-content-center w-4 p-1">
                    0
                  </p>
                </div>
                <div className="hidden lg:block">
                  <HeartIcon />
                </div>
                <div className="hidden lg:block">
                  <SearchIcon />
                </div>
              </div>
              <LocaleToggler />
            </div>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                {NavLinksWithName.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {t(`navigation.${item.name}`)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Button
            asChild
            variant={"ghost"}
            className="hover:bg-transparent w-fit p-0"
          >
            <Link
              href="/signup"
              className="!text-[13px] font-semibold text-secondary hover:text-secondary-foreground uppercase"
            >
              Login / Register
            </Link>
          </Button>
          <div className="hidden lg:flex flex-row-reverse items-center gap-4 text-secondary">
            <div className="relative w-5 h-5">
              <ShoppingCart />
              <p className="absolute -top-1 -right-2 text-xs bg-[#f89e6b] rounded-full h-4 grid place-content-center w-4 p-1">
                0
              </p>
            </div>
            <div className="hidden lg:block w-5 h-5">
              <HeartIcon />
            </div>
            <div className="hidden lg:block w-5 h-5">
              <SearchIcon />
            </div>
          </div>
          {/* Right Actions */}
          <div className="ml-auto hidden lg:flex items-center gap-4">
            <LocaleToggler />
          </div>
        </div>
      </div>
    </div>
  );
}
