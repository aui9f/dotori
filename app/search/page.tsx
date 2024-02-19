import Search from "../components/userSearch";
import List from "../components/repairList";
import Filter from "../components/statusFilter";
import styles from "./search.module.scss";

export default function SearchPage() {
  return (
    <div className={styles.searchpage}>
      <div className={styles.search}>
        <Search />
      </div>

      <div className={styles.list}>
        <List />
        <button type="button">더보기</button>
      </div>
    </div>
  );
}
