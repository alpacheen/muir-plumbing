import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import InputForm from "../components/InputForm";

const Contact = () => {
  return (
    <PageLayout
      title="Contact"
      ariaLabel="contact-section"
      svgProps={{ fillColor: "gray", strokeColor: "gray",
        opacity: 0.2,  }}
    >
      <div className="mt-10">
        <InputForm />
      </div>
    </PageLayout>
  );
};
export default Contact;
