import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import InputForm from "../components/InputForm";

const Contact = () => {
  return (
    <PageLayout
      title="Contact"
      ariaLabel="contact-section"
      containerClassName="section-padding"
      titleClassName="page-title-responsive"
      svgProps={{ fillColor: "gray", strokeColor: "gray", opacity: 0.2 }}
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-body-responsive mb-6">
            Ready to solve your plumbing problems? Get in touch with our trusted
            plumbing professionals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 items-center">
            <a
              href="tel:0712345678"
              className="border-2 border-secondary rounded-lg p-2 hover:bg-secondary/30 transition-colors"
            >
              <div className="text-secondary font-bold text-lg font-carter-one ">
                Call Now
              </div>
              <div className="text-creme-fraiche">(07) 1234-5678</div>
            </a>

            <a
              href="mailto:info@muirplumbing.com.au"
              className="bg-winter-sky border-2 border-winter-sky rounded-lg p-2 hover:bg-winter-sky/30 transition-colors"
            >
              <div className="text-primary font-bold text-lg font-carter-one">
                Email Us
              </div>
              <div className="text-primary text-sm">
                info@muirplumbing.com.au
              </div>
            </a>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-creme-fraiche text-center mb-6 font-carter-one">
          Get Your Free Quote
        </h3>
        <InputForm />
      </div>
    </PageLayout>
  );
};
export default Contact;
