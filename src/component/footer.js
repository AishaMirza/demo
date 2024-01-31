import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: contact@example.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <p>Facebook | Twitter | Instagram</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Company</h5>
                            <p>About Us</p>
                            <p>Careers</p>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary text-center py-2">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>


        </>
    )
}