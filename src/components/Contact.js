import React from "react";

function Contact() {
    return (
        <div className="contact mb-10">
            <h1 className="text-center text-4xl m-5 mb-8 font-bold">Contact</h1>
            <div className="contact-content">

                <div className="contact-request mr-5">
                    <p className="contact-title font-bold text-3xl pb-5">Get In Touch!</p>
                    <form target="_blank" action="tple06203@gmail.com" method="POST">
                        <div class="form-group mb-3">
                            <div class="form-row">
                                <div class="col mr-3">
                                    <input type="text" name="name" class="form-control" placeholder="Name:" required />
                                </div>
                                <div class="col">
                                    <input type="email" name="email" class="form-control" placeholder="Email:" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message:" class="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" class="submit-button mt-1">Send Message</button>
                    </form>
                </div>

                <div className="contact-information">
                    <p className="contact-title text-3xl font-bold">Reach Out At.</p>
                    <div className="contact-information-container">
                        <p className="info-email text-2xl font-bold mt-5">Email: tple06203@gmail.com</p>
                        <div className="information-container text-6xl">
                            <a rel="noreferrer noopener" href="https://www.linkedin.com/in/2770341b7/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
                            <a rel="noreferrer noopener" href="https://github.com/bilele123123" target="_blank"><i class='bx bxl-github' ></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;