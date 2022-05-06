import React from "react";
import type { NextPage } from "next";
import {
  Animate,
  ContactHero,
  FormContainer,
  PageContainer,
} from "../components";

const ContactPage: NextPage = () => {
  return (
    <PageContainer title="Contact Me" description="Contact Eric Quelch">
      <Animate animation="fade-left" delay={400} duration={500}>
        <div className="w-full">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row">
              <ContactHero />
              <FormContainer />
            </div>
          </div>
        </div>
      </Animate>
    </PageContainer>
  );
};

export default ContactPage;
