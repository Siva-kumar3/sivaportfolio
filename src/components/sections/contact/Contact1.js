"use client";
import FormSelect from "@/components/shared/Inputs/FormSelect";

import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

const Contact1 = () => {
	const form = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

		emailjs
			.sendForm(
				"service_ix935p5", 
				"template_i5pxlgh", // replace with your EmailJS Template ID
				form.current,
				"5hAL94W4DQvdsYFqD" // replace with your EmailJS Public Key
			)
			.then(
				(result) => {
					alert("Message sent successfully!");
					console.log("SUCCESS!", result.text);
				},
				(error) => {
					alert("Failed to send. Try again.");
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<section id="contact">
			<div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
				<div className="container">
					<div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10 overflow-hidden">
						{/* <!-- section heading --> */}
						<div className="md:col-start-1 md:col-span-7 lg:col-span-6">
							<div className=" wow fadeInLeft" data-wow-delay=".3s">
								<form  ref={form} onSubmit={sendEmail}
									className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px">
									<div className="mb-25px text-center">
										<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
											Let’s work together!
										</h2>
										<p
											className="text-primary-color-light dark:text-body-color wow fadeInLeft"
											data-wow-delay=".4s"
										>
											I design and code beautifully simple things and i love
											what i do. Just simple like that!
										</p>
									</div>
									{/* <!-- inputs --> */}
									<div
										className="grid grid-cols-1 sm:grid-cols-2 gap-15px wow fadeInUp"
										data-wow-delay=".5s"
									>
										{/* <!-- first name --> */}
										<div>
											<input
												type="text"
												name="firstName"
												value={formData.firstName}
												onChange={handleInputChange}
												placeholder="First name"
												className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
											/>
										</div>
										{/* <!-- Last name --> */}
										<div>
											<input
												type="text"
												name="lastName"
												value={formData.lastName}
												onChange={handleInputChange}
												placeholder="Last name"
												className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
											/>
										</div>
										{/* <!-- Email address --> */}
										<div>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												placeholder="Email address"
												className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
											/>
										</div>
										{/* <!-- Phone number --> */}
										<div>
											<input
												type="text"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												placeholder="Phone number"
												className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
											/>
										</div>
										<div className="form_group sm:col-start-1 sm:col-span-2">
											<FormSelect />
										</div>
										<div className="sm:col-start-1 sm:col-span-2">
											<textarea
												cols="1"
												rows="10"
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												placeholder="Message"
												className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
											/>
										</div>
										<div className="sm:col-start-1 sm:col-span-2">
											<button
												type="submit"
												className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
											>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						{/* <!-- experience single area --> */}
						<div className="md:col-start-8 md:col-span-5">
							<div className="contact-info-list">
								<ul className="flex flex-col gap-y-10">
									<li
										className="flex  items-center gap-25px position-relative wow fadeInRight"
										data-wow-delay=".4s"
									>
										<div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-phone-call leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-primary-color-light dark:text-white-color mb-1">
												Phone
											</p>
											<a
												href="tel:0123456789"
												className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
											>
												+91 956 6585 747
											</a>
										</div>
									</li>
									<li
										className="flex  items-center gap-25px position-relative wow fadeInRight"
										data-wow-delay=".5s"
									>
										<div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-primary-color-light dark:text-white-color mb-1">
												Email
											</p>
											<a
												href="mailto:sivakumar2001ss@mail.com"
												className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
											>
												sivakumar2001ss@mail.com
											</a>
										</div>
									</li>
									<li
										className="flex  items-center gap-25px position-relative wow fadeInRight"
										data-wow-delay=".6s"
									>
										<div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-location leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-primary-color-light dark:text-white-color mb-1">
												Address
											</p>
											<a
												href="#"
												className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
											>
												2/124 West Street,E.T.Reddiapatti, <br />
												sivakasi,pincode 626131.
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact1;
