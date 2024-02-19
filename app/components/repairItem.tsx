import styles from "./list.module.scss";
import { items } from "schedule/page";
export default function RepairList({ name, phone, createAt, status }: items) {
  return (
    <li className={styles.itemsList}>
      <div className={`${styles[status]}`}>
        <div className={styles.status}>
          <div className={styles.icon}></div>
          <p>접수: {status}</p>
        </div>
        <div className={styles.text}>
          <p>{name}</p>
          <p>{phone}</p>
          <p>(+1일) 접수일 {createAt}</p>
        </div>
      </div>
    </li>
  );
  {
    /* 
        <li>
            <div className={styles.progress}>
                <div className={styles.status}>
                    <div className={styles.icon}></div>
                    <p>처리중</p>
                </div>
                <div className={styles.text}>
                    <p>이름</p>
                    <p>연락처</p>
                    <p>접수일</p>
                    <p>(+1일) 처리일</p>
                </div>
                
            </div>
        </li>

        <li>
            <div className={styles.complate}>
                <div className={styles.status}>
                    <div className={styles.icon}></div>
                    <p>완료</p>
                </div>
                <div className={styles.text}>
                    <p>이름</p>
                    <p>연락처</p>
                    <p>완료일</p>
                </div>
                
            </div>
        </li>

        <li>
            <div className={styles.cancel}>
                <div className={styles.status}>
                    <div className={styles.icon}></div>
                    <p>취소</p>
                </div>
                <div className={styles.text}>
                    <p>이름</p>
                    <p>연락처</p>
                    <p>취소일</p>
                </div>
                
            </div>
        </li> */
  }

  // <ul className={styles.repaire}> </ul>
}
