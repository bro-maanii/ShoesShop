import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <section className="text-gray-600 bg-gray-800  body-font relative">
      <h1 className="flex justify-center align-middle pt-5 text-4xl underline font-bold text-slate-100">
        Contact Us
      </h1>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.32042365512!2d67.35055163561589!3d24.86965151327073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3333cee24fc11%3A0xa351c205b697b799!2sGulshan-e-Hadeed%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700688667555!5m2!1sen!2s"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Karachi, Sindh ,Pakistan</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                alie15425@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-4 md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <form
            action="https://formspree.io/f/xwkddeqe"
            method="POST"
            className="pb-8"
          >
            <div className="grid grid-flow-col gap-10 py-4">
              <div className="">
                <label htmlFor="name" className=" text-lg font-mono">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your Name"
                  id="name"
                  name="name"
                  className="border-2  border-opacity-100  "
                  required
                />
              </div>
              <div className="">
                <label htmlFor="email" className=" text-lg font-mono">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  id="email"
                  name="email"
                  className="border-2  border-opacity-100  "
                  required
                />
              </div>
            </div>
            <div className="py-4">
              <label htmlFor="subject" className=" text-lg font-mono">
                Subject
              </label>
              <Input
                type="text"
                placeholder="Enter your Name"
                id="subject"
                name="subject"
                className="border-2  border-opacity-100  "
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="message" className=" text-lg font-mono">
                Message
              </label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                className="border-2  border-opacity-100  "
                required
              />
            </div>
            <div className="py-2 flex justify-center">
              <Button
                variant="ghost"
                type="submit"
                className="text-lg text-white font-bold duration-700 delay-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 bg-gradient-to-tl from-purple-500 to-pink-300"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
