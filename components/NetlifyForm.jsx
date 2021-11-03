import React from "react";

export default function NetlifyForm() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">
                    Want to get in touch?
                  </p>
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                    Feel free to email me or contact me here
                  </h2>
                </div>
                <p className="text-2xl text-gray-700">
                  Use this simple form that is deployed using Netlify Forms.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 id="form" className="w-full text-3xl text-gray-700 font-bold">
                Contact?
              </h4>
              <p className="text-lg text-gray-500">
                You can use this form to contact me or send me an{" "}
                <a className="text-green-600" href="mailto:quelchx@gmail.com">
                  email{" "}
                </a>
                here.
              </p>
              <div className="relative w-full mt-6 space-y-4">
                <div className="relative">
                  <label className="font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <textarea
                    rows="10"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                    placeholder="Message"
                  />
                </div>
                <div className="relative">
                  <a
                    href="#_"
                    className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700 ease"
                  >
                    Send
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
