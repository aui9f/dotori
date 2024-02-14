import styles from './list.module.scss'

export default function RepairList(){
    return  <ul className={styles.repaire}>
        <li>
            <div className={styles.ready}>
                <div className={styles.status}>
                    <div className={styles.icon}></div>
                    <p>접수</p>
                </div>
                <div className={styles.text}>
                    <p>이름</p>
                    <p>연락처</p>
                    <p>(+1일) 접수일</p>
                </div>
                
            </div>
        </li>

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
        </li>


    </ul>
    
}