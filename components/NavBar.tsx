"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    mobileMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  return (
    <div>
      <button
        className="uppercase md:hidden"
        type="button"
        onClick={toggleMobileMenu}
      >
        Menu
      </button>
      <div
        className={`xs:absolute xs:z-10 xs:bg-bgMobile xs:backdrop:blur-[25px] ${
          mobileMenuOpen
            ? "xs:disable-scroll xs:fixed xs:left-0 xs:top-0 xs:w-screen xs:h-screen"
            : "xs:static xs:hidden"
        }`}
      >
        <div className="container relative flex flex-col items-center justify-center xs:w-full xs:h-screen">
          <button
            className="uppercase absolute top-0 right-0 mt-[43px] mr-[20px] md:hidden"
            type="button"
            onClick={closeMobileMenu}
          >
            Close
          </button>
          <Navigation onClick={closeMobileMenu} />
        </div>
      </div>
    </div>
  );
}
