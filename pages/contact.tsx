import React from "react";
import type { NextPage } from "next";
import { ContactHero, FormContainer, PageContainer } from "../components";

const ContactPage: NextPage = () => {
  return (
    <PageContainer>
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <ContactHero />
            <FormContainer />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
