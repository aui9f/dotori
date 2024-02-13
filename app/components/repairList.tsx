export default function RepairList(){
    return  <ul>
        <li>
            <div>
                <div><p>상태: 접수중</p></div>
                <div className="info">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>(+1일) 접수일</p>
                </div>
                <button type="button">상세보기</button>
            </div>
        </li>

        <li>
            <div>
                <div><p>상태: 처리중</p></div>
                <div className="info">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>접수일</p>
                    <p>(+1일) 처리일</p>
                </div>
                <button type="button">상세보기</button>
            </div>
        </li>

        <li>
            <div>
                <div><p>상태: 완료</p></div>
                <div className="info">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>완료일</p>
                </div>
                <button type="button">상세보기</button>
            </div>
        </li>

        <li>
            <div>
                <div><p>상태: 취소</p></div>
                <div className="info">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>취소일</p>
                </div>
                <button type="button">상세보기</button>
            </div>
        </li>


    </ul>
    
}