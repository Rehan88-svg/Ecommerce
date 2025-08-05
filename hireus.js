import React from "react";

export default function HireUs() {
    return (
        <div style={{ padding: "8rem", textAlign: "center" }}>
            <h1 style={{ color: "red" }}>Give Us Call</h1>
            <p>Contact Number: +91 889900000</p>
            <p>rehan@gmail.com</p>
            <p>121 King Street, Melbourne Victoria 3000 Australia</p>

            <div style={{ marginTop: "1rem" }}>
                <p>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "0px", color: "#3b5998", textDecoration: "none" }}
                    >
                        Facebook
                    </a>
                </p>
                <p>
                    <a
                        href="https://wa.me/91889900000"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "10px", color: "#25D366", textDecoration: "none" }}
                    >
                        WhatsApp
                    </a>
                </p>
                <p>
                    <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4285F4", textDecoration: "none" }}
                    >
                        Google
                    </a>
                </p>
            </div>
        </div>
    );
}
