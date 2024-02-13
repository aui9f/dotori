import Search from '../components/userSearch'
import List from '../components/repairList'
import Filter from '../components/statusFilter'
export default function SearchPage(){
    return <>
        <Search/>
        <Filter/>
        <List/>
        <button type="button">더보기</button>
    </>
}