"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import BrandLogoFull from "../../assets/images/fullLogo.png";
import BrandLogoFullDarkTheme from "images/logo/logo.png";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

interface BrandFullLogoProps {
  height?: number;
  className?: string;
}

const BrandFullLogo: React.FC<BrandFullLogoProps> = ({
  height = 24,
  className = "",
}) => {
  const { theme } = useTheme();
  const original_width = 1370;
  const original_height = 307;
  const width = (original_width / original_height) * height;

  const [logoSrc, setLogoSrc] = useState(BrandLogoFull);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc(BrandLogoFullDarkTheme);
    } else {
      setLogoSrc(BrandLogoFull);
    }
  }, [theme]);

  return (
    <Link href="/" className={className}>
      {isLoading && (
        <Skeleton
          className={`bg-muted-foreground/20 `}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      )}
      <Image
        className={isLoading ? "invisible w-0 h-0" : "visible"}
        src={logoSrc}
        height={height}
        alt="Brand Logo"
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
      />
    </Link>
  );
};

export default BrandFullLogo;
