import React from "react";
import type { NextPage } from "next";
import { PageLayout } from "../components";
import meta from "../constants/meta";

const AboutPage: NextPage = () => {
  const { title, description } = meta.about;
  return (
    <PageLayout title={title} description={description}>
      hello world
    </PageLayout>
  );
};

export default AboutPage;
