import React, { useState } from "react";

function Passwd() {
    const [userNumber, setUserNumber] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <section>
            <div className="passwd-Home">
                <h2>비밀번호 찾기</h2>
            </div>
            <div className="text-nav">
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={checked} 
                        onClick={() => setChecked((prev) => !prev)} 
                    />
                    <span>등록된 휴대폰 번호로 찾기</span>
                </div>
                <input placeholder="아이디" />
                <input placeholder="생년월일 예)20010601" />
                <button
                    className="find-button"
                    onClick={() => alert('인증번호 받기 클릭')}
                    disabled={!userNumber}
                >
                    인증번호 받기
                </button>
            </div>
        </section>
    );
}

export default Passwd;
