import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>کتاب من</h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>عاشقانه</li>
          <li>فلسفه و عرفان</li>
        </ul>
      </div>
    </div>
  );
}
