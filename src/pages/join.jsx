import React, { useState } from "react";
import './join.css';

function Join() {
    const [userId, setUserId] = useState("");

    return (
        <section>
            <div className="join-Home">
                <h2>정보 입력</h2>
            </div>
            <div className="text-nav">
                <input 
                    placeholder="아이디" 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <small>4~12자/영문 소문자(숫자 조합 가능)</small>
                <button 
                    className="join-button" 
                    onClick={() => alert('중복 확인 클릭')} 
                    disabled={!userId} // 아이디가 비어 있으면 비활성화
                >
                    중복확인
                </button>
                <input placeholder="비밀번호" />
                <input placeholder="비밀번호 확인" />
                <small>8~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합</small>
            </div>
            <button>가입하기</button>
        </section>
    );
}

export default Join;
