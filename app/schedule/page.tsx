import Search from "../components/userSearch";
import Item from "../components/repairItem";
import Filter from "../components/statusFilter";

import { db, doc, collection, getDocs, query } from "fbase";

export interface items {
  name: string;
  phone: string;
  createAt: string;
  status: string;
}
async function getList() {
  const querySnapshot = await getDocs(query(collection(db, "receive")));
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export default async function SearchPage() {
  const receiveList = await getList();

  return (
    <div>
      <Search />
      {/* <Filter /> */}
      <ul>
        {receiveList.map((item: items) => (
          <Item key={item.createAt} {...item} />
        ))}
      </ul>
      {/* {movies.map(movie=><li  key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)}
       */}
      {/* <button type="button">더보기</button> */}
    </div>
  );
}
