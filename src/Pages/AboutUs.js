import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import logo from "../image/wol-logo.jpg";
import campus from "../image/campus.webp";

import Button from "../Component/Utils/Button";
import Alert from "../Component/Utils/Alert";
import { useRef, useState } from "react";

const AboutUs = () => {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const [formSucceed, setFormSucceed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const apiFetch = await fetch("https://formspree.io/f/xayzoyaw", {
      method: "POST",
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        subject: subject.current.value,
        message: message.current.value,
      }),
      headers: {
        Accept: "application/json",
      },
    });

    const response = await apiFetch.json();
    setIsLoading(false);

    if (response.ok) {
      setFormSucceed(true);
    }
  };

  return (
    <>
      <div className="bg-pic -z-10"></div>
      <div className="bg-purple-theme h-screen w-full fixed -z-20"></div>
      <div className="flex flex-col justify-between items-center h-screen w-screen max-w-full">
        <div className="fixed lg:static text-black flex justify-center h-fit bg-slate-50 shadow-md z-30 w-full">
          <Header className="w-full" />
        </div>

        <h1 className="text-center text-white text-3xl mt-28 lg:mt-16 font-bold">
          About Us
        </h1>
        <div className="h-full mt-10 z-10 flex flex-col items-center lg:flex-row lg:mb-10 lg:w-3/4 lg:max-w-[1300px] lg:py-20">
          <img
            src={logo}
            alt="logo"
            className="z-10 max-h-[250px] w-auto rounded-full"
          />

          <div className="bg-purple-theme bg-blur flex flex-col gap-5 mt-5 p-7">
            <p>
              {`Wings Of Liberty Kendama (W.O.L.Kendama) founded in Malaysia in 2019.
              We promote Kendama culture in Malaysia and dream of spreading the
              love for Kendama across SEA.`}
            </p>
            <p>
              Kendama has been in circulation in Malaysia for almost 20 years,
              but it has always been a niche hobby with limited promotion. With
              the establishment of W.O.L.Kendama, we aim to promote Kendama in
              schools in the Klang Valley region and beyond. Our ultimate goal
              is to cultivate more skilled players and host training camps and
              competitions.
            </p>
          </div>
        </div>

        <div className="bg-light-gray full-bleed-violet px-7 py-14 z-10 text-black lg:flex lg:flex-col lg:items-center lg:w-3/4 lg:max-w-[1300px]">
          <h1 className="text-center text-3xl font-bold">School Coaching</h1>
          <div className="xl:flex-row xl:mb-10 xl:flex xl:gap-20 xl:items-center xl:p-10">
            <div className="lg:w-3/5">
              <p className="my-5 ">
                We believe that by taking Kendama courses, students can improve
                their hand-eye coordination and reflexes, while also learning
                valuable lessons about perseverance and the rewards of practice.
                Besides, the courses also offer a fun and challenging
                experience.
              </p>
              <p>We are currently coaching the following campus:</p>
              <div className="my-5 px-5">
                <ul className="list-disc">
                  <li>Tzu Chi International School Kuala Lumpur</li>
                  <li>SKJ(C) Choong Wen</li>
                  <li>SKJ(C) Kuen Cheng 1</li>
                  <li>SKJ(C) Tai Thung</li>
                  <li>SKJ(C) Salak South</li>
                  <li>SKJ(C) On Pong 2</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={campus}
                alt="Teaching with student"
                className="z-10 max-h-[600px] w-auto my-10"
              />
            </div>
          </div>
        </div>

        <h1 className="text-center text-white text-3xl my-10">Contact Us</h1>
        <div className=" w-full mb-24 bg-[#cbc8df] z-20 py-10 px-5 rounded-lg text-black lg:flex lg:justify-around lg:px-10 lg:w-3/4 xl:w-3/5 lg:max-w-[1300px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:w-3/5 lg:pr-10"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="Name" ref={name} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="Email"
                ref={email}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="Subject"
                ref={subject}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Message:</label>
              <textarea id="message" name="Message" ref={message} />
            </div>

            {isLoading ? (
              <Button type="submit" variant="disabled">
                Submit
              </Button>
            ) : (
              <Button type="submit" variant="gradient">
                Submit
              </Button>
            )}
            {formSucceed && (
              <Alert variant="success">Form submitted successfully</Alert>
            )}
          </form>
          <div className="pt-10">
            <h1 className="text-black text-3xl font-bold text-center">
              Contact Info
            </h1>
            <div className="flex flex-col py-10 gap-5">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a href="mailto:conan@wolkendama.com">
                  Email: conan@wolkendama.com
                </a>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p>Phone: +60 16-288 3534</p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/wolkendama/"
                >
                  Click here to view our Instagram!
                </a>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/wolkendamaOfficial/"
                >
                  Click here to view our Facebook!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
