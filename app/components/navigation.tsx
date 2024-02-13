import Link from "next/link";

export default function Navigation(){
    return <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/search">SEARCH</Link></li>
        <li><Link href="/schedule">SCHEDULE</Link></li>
        <li><Link href="/mypage">MY PAGE</Link></li>
    </ul>
}