import React from "react";
import AOS from "@/components/AOS";

export default function NetlifyForm() {
  return (
    <section className="w-full bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <AOS animation="fade-up" delay="500">
                  <div className="relative">
                    <p className="mb-2 font-medium dark:text-cyan-500 text-gray-700 uppercase">
                      Want to get in touch?
                    </p>
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-50 xl:text-6xl">
                      Feel free to email me or contact me here
                    </h2>
                  </div>
                  <p className="text-2xl text-gray-700 dark:text-cyan-300">
                    Use this simple form that is deployed using Netlify Forms.
                  </p>
                </AOS>
              </div>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-gray-700 lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <AOS animation="fade-down" delay="200" duration="500">
                <h4
                  id="form"
                  className="w-full text-3xl text-gray-700 dark:text-cyan-400 font-bold"
                >
                  Contact?
                </h4>
                <p className="text-lg text-gray-500 dark:text-cyan-50">
                  You can use this form to contact me or send me an{" "}
                  <a className="text-green-600" href="mailto:quelchx@gmail.com">
                    email{" "}
                  </a>
                  here.
                </p>
              </AOS>
              <div className="relative w-full mt-6 space-y-4">
                <form
                  method="POST"
                  name="contact"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <AOS>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="relative">
                      <label className="font-medium dark:text-cyan-50 text-gray-900">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="relative my-4">
                      <label className="font-medium dark:text-cyan-50 text-gray-900">Email</label>
                      <input
                        name="email"
                        type="text"
                        className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    <div className="relative">
                      <label className="font-medium dark:text-cyan-50 text-gray-900">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="10"
                        className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                        placeholder="Message"
                      />
                    </div>
                    <div className="relative">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                    <div className="relative mt-4">
                      <button
                        type="submit"
                        className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700 ease"
                      >
                        Send
                      </button>
                    </div>
                  </AOS>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
