import Link from "next/link";
import styles from "style/layout.module.scss";
export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li className={styles.home}>
        <Link href="/"></Link>
      </li>
      <li className={styles.search}>
        <Link href="/search"></Link>
      </li>
      <li className={styles.schedule}>
        <Link href="/schedule"></Link>
      </li>
      <li className={styles.mypage}>
        <Link href="/mypage"></Link>
      </li>
    </ul>
  );
}
