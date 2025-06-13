import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import "./Header.css"

function header() {
    return (
        <header className="py-4">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1 className="m-0">ذهن <span>القانون</span></h1>
                    </div>
                    <Navbar />
                    <div className="contactNow">
                        <a href="" className="btn">للتواصل</a>
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default header;