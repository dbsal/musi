import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style.css';

function LoginBox() {
    const [state, setState] = useState(false); // 로그인 상태 유지 여부
    return (
        <div>
            <div className="login-nav">
                <h2>로그인</h2>
            </div>
            <div className="login-text-nav">
                <input placeholder="아이디" />
                <input placeholder="비밀번호" />
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={state} 
                        onClick={() => setState((prev) => !prev)} 
                        />
                    <span>로그인 상태 유지</span>
            </div>
            </div>
            <button className="login-button">로그인</button>
            <div className="icon">
                <button className="icon-button naver">N</button>
                <button className="icon-button naver">K</button>
                <button className="icon-button naver">f</button>
                <button className="icon-button naver">t</button>
                <button className="icon-button naver">a</button>
            </div>
            <div className="img-nav"></div>
            </div>
    );
}

export default LoginBox;

