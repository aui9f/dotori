"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "style/layout.module.scss";

export default function Navigation() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <ul className={styles.navigation}>
      <li
        className={`${
          pathname === "/" ? `${styles.home_active}` : `${styles.home}`
        }`}
      >
        <Link href="/"></Link>
      </li>

      <li
        className={`${
          pathname === "/search"
            ? `${styles.search_active}`
            : `${styles.search}`
        }`}
      >
        <Link href="/search"></Link>
      </li>

      <li
        className={`${
          pathname === "/schedule"
            ? `${styles.schedule_active}`
            : `${styles.schedule}`
        }`}
      >
        <Link href="/schedule"></Link>
      </li>

      <li
        className={`${
          pathname === "/mypage"
            ? `${styles.mypage_active}`
            : `${styles.mypage}`
        }`}
      >
        <Link href="/mypage"></Link>
      </li>
    </ul>
  );
}
