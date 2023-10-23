"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdArrowBack,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

export const MetaButton = (props: PropsWithChildren) => {
  return (
    <div
      className="w-8 h-8 flex items-center justify-center rounded-md 
      hover:text-dark-primary hover:dark:text-primary 
      hover:shadow-primary/30 hover:dark:shadow-dark-primary/50 
      dark:shadow-dark-text/50 shadow-md bg-secondary dark:bg-dark-secondary m-2"
    >
      {props.children}
    </div>
  );
};

export function BackButton() {
  const path = usePathname();
  const isMainPage = path === "/";

  let cn = "opacity-100";
  if (isMainPage) {
    cn = "opacity-0";
  }

  return (
    <div className={cn}>
      <MetaButton>
        <Link href={"/"}>
          <MdArrowBack size={18} />
        </Link>
      </MetaButton>
    </div>
  );
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const path = usePathname();
  const isMainPage = path === "/";

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  let cn = "opacity-100";
  if (isMainPage) {
    cn = "opacity-0";
  }

  return (
    <div className={cn}>
      <MetaButton>
        <button
          type="button"
          className="rounded-full flex items-center justify-center"
          onClick={handleToggle}
        >
          {isDark ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </MetaButton>
    </div>
  );
}
