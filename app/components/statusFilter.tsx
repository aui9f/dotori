"use client";
import styles from "./form.module.scss";
export default function StatusFilter() {
  const checked = "ready";
  return (
    <ul className={styles.statusfrom}>
      <li>접수</li>
      <li>처리중</li>
      <li>완료</li>
      <li>취소</li>
    </ul>
  );
}
