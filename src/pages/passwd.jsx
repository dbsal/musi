import React, { useState } from "react";
import './passwd.css';

function Passwd() {
    const [userNumber, setUserNumber] = useState("");
    const [selectedOption, setSelectedOption] = useState("phone"); 

    return (
        <section>
            <div className="passwd-Home">
                <h2>비밀번호 찾기</h2>
            </div>
            <div className="text-nav">
                <div className="radio-container">
                    <label>
                        <input
                            type="radio"
                            value="phone"
                            checked={selectedOption === "phone"}
                            onChange={() => setSelectedOption("phone")}
                        />
                        등록된 휴대폰 번호로 찾기
                    </label>
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
                <button>확인</button>
            </div>
        </section>
    );
}

export default Passwd;
