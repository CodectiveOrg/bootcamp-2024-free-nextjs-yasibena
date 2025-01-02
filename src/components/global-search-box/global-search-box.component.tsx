import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearch3Line from "@/icons/MingcuteSearch3Line";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent() {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearch3Line />
      </div>
      <input type="text" placeholder="نام کتاب، موضوع، نویسنده، ناشر و ..." />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
