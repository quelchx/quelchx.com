import ContainerBlock from "@/components/Layout/ContainerBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Heading from "../components/Heading";
export default function ContactPage() {
  return (
    <ContainerBlock
      title="Eric Quelch - Developer, Writer, Creator"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
              <div className="relative flex flex-col items-center justify-center w-full h-3/5 px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <AnimateOnScroll animation="fade-up" delay="500">
                    <div className="relative">
                      <p className="mb-2 font-medium dark:text-white text-gray-700 uppercase">
                        Want to get in touch?
                      </p>
                      <Heading title="Contact Me?" />
                    </div>
                    <p className="text-2xl pt-4 text-gray-700 dark:text-gray-200">
                      If your interesting in leaving a message feel free to use
                      this simple form.
                    </p>
                    <a
                      target="_blank"
                      href=""
                      className="font-semibold group flex flex-row space-x-2 w-full items-center"
                    >
                      <p className="pt-2 hover:border-b-2 hover:border-cyan-900">
                        Download Resume
                      </p>
                      <div className="transform pt-2 group-hover:-translate-y-1 transition duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-up-right-square"
                          stroke="4"
                          strokeWidth="4"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                          />
                        </svg>
                      </div>
                    </a>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 lg:rounded-3xl rounded-none lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <AnimateOnScroll
                  animation="fade-down"
                  delay="200"
                  duration="500"
                >
                  <p
                    id="form"
                    className="py-4 w-full text-3xl dark:text-gray-100 font-bold"
                  >
                    This form is deployed using Netlify.
                  </p>
                  <p className="text-lg dark:text-gray-300">
                    This form is safe and no information is collected and no
                    spam emails will be sent! If you would rather email me
                  </p>
                  <a
                    className="text-lg text-cyan-600 dark:text-lime-500 hover:border-b-2 hover:border-cyan-700"
                    href="mailto:quelchx@gmail.com"
                  >
                    click here
                  </a>
                </AnimateOnScroll>
                <div className="relative w-full mt-6 space-y-4">
                  <form
                    method="POST"
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="relative">
                      <label className="font-medium dark:text-cyan-50 text-gray-900">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="block w-full text-gray-700 px-4 py-4 mt-2 text-xl placeholder-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="relative my-4">
                      <label className="font-medium dark:text-cyan-50 text-gray-900">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="block text-gray-700 w-full px-4 py-4 mt-2 text-xl placeholder-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
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
                        className="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
                        placeholder="Message"
                      />
                    </div>
                    <div className="relative">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                    <div className="relative mt-4">
                      <button
                        type="submit"
                        className="hvr-radial-out inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700 ease"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
