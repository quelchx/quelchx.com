import type { NextPage } from "next";
import Meta from "../components/Meta";
import ContactHero from "../components/Hero/ContactHero";
import Form from "../components/Form";

const Contact: NextPage = () => {
  return (
    <Meta title="Contact - Eric Quelch" description="Contact Eric Quelch">
      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <ContactHero />
            <Form />
          </div>
        </div>
      </section>
    </Meta>
  );
};

export default Contact;
