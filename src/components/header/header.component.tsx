"use client";

import { useEffect, useState } from "react";

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
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    } else {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    }
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
