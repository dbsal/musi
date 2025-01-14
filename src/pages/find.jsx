import React, { useState } from "react";

function Find({ type }) {
    const [userNumber, setUserNumber] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <section>
            <div className="id-Home">
                <h2>{type === "id" ? "아이디 찾기" : "비밀번호 찾기"}</h2>
            </div>
            <div className="text-nav">
                <input
                    placeholder={type === "id" ? "생년월일 예)20010601" : "아이디를 입력하세요"}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        placeholder="휴대폰 번호"
                        onChange={(e) => setUserNumber(e.target.value)}
                        style={{ marginRight: "8px" }}
                    />
                    <button
                        className="find-button"
                        onClick={() => alert('인증번호 받기 클릭')}
                        disabled={!userNumber}
                    >
                        인증번호 받기
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Find;
