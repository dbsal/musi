import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="Home-nav">
                <h5>genie</h5>
            </div>
            <div className="find-nav">
                <h5>
                    <Link to="/join">회원가입</Link></h5>
                <h5>
                    <Link to="/find">아이디 찾기</Link></h5>
                <h5>
                    <Link to="/passwd">비밀번호 찾기</Link></h5>
                <h5 style={{color:'skyblue'}}>로그인</h5>
            </div>
        </header>        
    );
}

export default Header;