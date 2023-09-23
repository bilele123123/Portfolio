import React from "react";

function Contact() {
    return (
        <div className="main-body" id="contact">
            <div className="contact-container">
                <div className="contact mb-5 mb-18">
                    <h1 className="text-center text-4xl m-5 mb-8 font-bold">Contact</h1>
                    <div className="contact-content">

                        <div className="contact-information">
                            <div className="contact-info w-1/2 mr-16 ml-10">
                                <p className="contact-title text-4xl font-bold">Reach Out To Me!</p>
                                <div className="contact-information-container">
                                    <div className="text-2xl font-bold mt-6">
                                        <p>Please feel free to contact me via Email, LinkedIn or GitHub.</p>
                                        <p className="mt-4">My prefer method of contact is via Email.</p>
                                        <p className="mt-4">I'm eager to hear from you!</p>
                                    </div>
                                    <div className="about-href-container text-6xl mt-8">
                                        <a className="about-href" target='blank' href='https://www.linkedin.com/in/2770341b7/'><i class='bx bxl-linkedin-square'></i></a>
                                        <a className="about-href" target='blank' href='https://github.com/bilele123123/'><i class='bx bxl-github'></i></a>
                                        <a className="about-href" target='blank' href='mailto:tple06203@gmail.com'><i class='bx bx-envelope'></i></a>
                                    </div>
                                    <a className="link-background-content mt-5" href="https://drive.google.com/file/d/1v4V-Az_GJMNHIlS_DBS0XalYkdATOf-L/view?usp=sharing" rel="noreferrer noopener" target="_blank">Resume</a>
                                </div>
                            </div>

                            <div className="contact-request mr-10">
                                <p className="contact-title font-bold text-4xl pb-5">Get In Touch!</p>
                                <form target="_blank" action="https://formsubmit.co/tple06203@gmail.com" method="POST">
                                    <div class="form-group mb-5">
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
                                    <button type="submit" class="submit-button mt-5">Send Message</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;