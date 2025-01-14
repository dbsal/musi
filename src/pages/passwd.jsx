import React from "react";

function Passwd() {
    return (
        <section>
            <div className="passwd-Home">
                <h2>비밀번호 찾기</h2>
            </div>
            <div className="text-nav">
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