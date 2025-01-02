"use client";

import Link from "next/link";
import Image from "next/image";

import enamad from "@/assets/logo/enamad.svg";
import certificate from "@/assets/logo/certificate.svg";
import flow from "@/assets/logo/idk.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

import styles from "./footer.module.css";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>خرید کتاب</div>
        <p className={styles.description}>خرید پرفروش ترین کتاب ها </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={enamad} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificate} alt="certificate" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={flow} alt="enamad" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="youtube">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="linkedin">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="telegram">
              <MingcuteTelegramFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت، خدمات و محتوای آن متعلق به من
        میباشد!
      </p>
    </footer>
  );
}
