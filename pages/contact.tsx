import React from "react";
import type { NextPage } from "next";

import { Animate, Form, FormWrapper, PageLayout } from "../components";
import meta from "../constants/meta";

const ContactPage: NextPage = () => {
  const { title, description } = meta.contact;
  return (
    <PageLayout title={title} description={description}>
        <FormWrapper>
          <Form />
        </FormWrapper>
    </PageLayout>
  );
};

export default ContactPage;
