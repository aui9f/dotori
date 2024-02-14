import styles from './form.module.scss'

export default function userSearch(){
    return <div className={styles.searchForm}>
        <input type="number" placeholder="Phone"/>
        <input type="text" placeholder="Name"/>
        <button type="button">SEARCH</button>
    </div>
    
}