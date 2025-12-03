"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsTop(currentScrollY === 0);

      // Show on scroll up, hide on scroll down
      if (currentScrollY < lastScrollY) setShow(true);
      else setShow(false);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`h-20 flex items-center
        fixed top-0 w-full z-50 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${isTop ? "bg-transparent" : "backdrop-blur-md bg-white/70"}
      `}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-[#0d9488]">GT</div>
          </Link>
          <ul className="flex-1 flex items-center justify-center gap-12 text-sm">
            <li className="text-gray-800 hover:text-green-text">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-800 hover:text-green-text">
              <Link href="/a">About</Link>
            </li>
            <li className="text-gray-800 hover:text-green-text">
              <Link href="/#">Help</Link>
            </li>
            <li className="text-gray-800 hover:text-green-text">
              <Link href="/">Community</Link>
            </li>
          </ul>
          <ul className="text-sm flex items-center gap-6 divide-x divide-green-text">
            <li className="pr-6">
              <Link href="#">Browse Items</Link>
            </li>
            <li>
              <Button variant="primary" className="py-5">Join Now</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
