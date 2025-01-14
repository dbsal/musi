import React from "react";

function Find() {
    return (
        <section>
            <div className="id-Home">
                <h2>아이디 찾기</h2>
            </div>
            <div className="text-nav">
                <input placeholder="생년월일 예)20010601" />
                <input placeholder="휴대폰 번호" />
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

export default Find;