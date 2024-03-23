import React from "react";
import ContactDialog from "./ContactDialog";

const Contact = () => {
  return (
    <>
      <section className="container bg-tiles-pattern bg-primary-50 bg-contain  py-12">
        <div className="  py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="md:flex md:justify-between ">
              {/* Left Side (Contact Button) */}
              <div className="md:w-1/2 md:pr-8 order-1">
                <div className="lg:text-center">
                  <h2 className="text-3xl font-bold mb-5 text-center">
                    St.Antony's Jacobite Syrian Cathedral ,<br />Manglore
                  </h2>
                 
                  <ContactDialog />
                </div>
              </div>

              {/* Right Side (Contact Details) */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <dl className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8">
                  {/* Address */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Address
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        123 Main St, Suite 100
                        <br />
                        Anytown, USA 12345
                      </dd>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Phone number
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        (555) 555-5555
                      </dd>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Email
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        info@ourstore.com
                      </dd>
                    </div>
                  </div>

                  {/* Store Hours */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Store Hours
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Monday - Friday: 9am to 8pm
                        <br />
                        Saturday: 10am to 6pm
                        <br />
                        Sunday: 12pm to 4pm
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
