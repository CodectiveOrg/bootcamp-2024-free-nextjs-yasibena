"use client";

import {useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";
import clsx from "clsx";
import MingcuteDarkModeFill from "@/icons/MingcuteDarkMode";
import MingcuteLightModeFill from "@/icons/MingcuteLightMode";

export default function HeaderComponent() {
  const pathname = usePathname();
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightMode") === "true";
  });

  const toggleMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (lightMode) {
      root.style.setProperty("--color-default-background", "hsl(0deg 0% 98%)");
      root.style.setProperty("--color-default-foreground", "hsl(0deg 0% 10%)");
      root.style.setProperty("--color-gray-12", "#62b2e4");
      root.style.setProperty("--color-gray-20", "#62b2e4");
      root.style.setProperty("--color-gray-16", "#62b2e4");
      root.style.setProperty("color-scheme", "light");
    } else {
      root.style.setProperty("--color-default-background", "hsl(0deg 0% 10%)");
      root.style.setProperty("--color-default-foreground", "hsl(0deg 0% 98%)");
      root.style.setProperty("color-scheme", "dark");
      root.style.setProperty("--color-gray-12", "hsl(0deg 0% 12%)");
    }
    // Save the user's preference in localStorage
    localStorage.setItem("lightMode", lightMode.toString());
  }, [lightMode]);

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <div className={clsx(styles.toggleMode)} onClick={toggleMode}>
            {lightMode ? <MingcuteDarkModeFill /> : <MingcuteLightModeFill />}
          </div>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/search" && styles.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
