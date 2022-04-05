import type { NextPage } from "next";
import MetaContainer from "../meta/MetaContainer";

import AOS from "../components/AOS";
import ContactHeading from "../components/contact/ContactHeading";
import Form from "../components/contact/Form";

const Contact: NextPage = () => {
  return (
    <MetaContainer title="Eric Quelch - Contact">
      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
              <div className="relative flex flex-col items-center justify-center w-full px-10 my-20 h-3/5 lg:px-16 lg:my-0">
                <ContactHeading />
              </div>
            </div>

            <div className="w-full rounded-none dark:lg:bg-gray-900 dark:bg-gray-800 lg:rounded-3xl lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <AOS animation="fade-down" delay="200" duration="500">
                  <p className="w-full py-4 text-3xl font-bold dark:text-gray-100">
                    This form is deployed using Netlify.
                  </p>
                  <p className="text-lg dark:text-gray-300">
                    This form is safe, no information is collected and no
                    spam emails will be sent!
                  </p>
                  <p className="py-2 text-sm">
                    If you would rather email me{" "}
                    <a
                      className="text-cyan-800 dark:text-cyan-500 hover:border-b-2 hover:border-cyan-700"
                      href="mailto:quelchx@gmail.com"
                    >
                      click here
                    </a>
                  </p>
                </AOS>
                <div className="relative w-full mt-6 space-y-4">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MetaContainer>
  );
};

export default Contact;
