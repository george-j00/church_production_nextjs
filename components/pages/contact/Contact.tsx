import React from "react"
import ContactDialog from "../../shared/contact/ContactDialog"

const Contact = () => {
  return (
    <>
      <section
        id="contactUs"
        className="container bg-tiles-pattern bg-primary-50 bg-cover  py-12"
      >
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="md:flex md:justify-between ">
              {/* Left Side (Contact Button) */}
              <div className="md:w-1/2 md:pr-8 order-1">
                <div className="lg:text-center">
                  <h2 className="text-3xl font-bold mb-5 text-center">
                    St.Antony&apos;s Jacobite Syrian Orthodox Cathedral
                    ,Manglore
                  </h2>
                  <ContactDialog />
                </div>
              </div>

              {/* Right Side (Contact Details) */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <dl className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8">
                  {/* Address */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Address
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        St.Antony&apos;s Jacobite Syrian Orthodox Cathedral{" "}
                        <br />
                        Under the Holy Apostolic See of Antioch and All the East
                        & St Anthony&apos;s Educational Society Honnavar <br />
                        (Public Trust F-17 Karwar Registered under Charitable
                        Societies Act) <br />
                        <br />
                        Near Second Bridge , Jeppu , Manglore 575 002
                        <br />
                      </dd>
                    </div>
                  </div>
                  <br />
                  {/* Phone Number */}
                  <div className="flex items-center">
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Phone number
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        +91 8762375263
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Made with love text */}
      <div className="text-center text-sm py-4 text-gray-400">
        Made with{" "}
        <span className="inline-block mx-1 text-red-800 animate-pulse">❤️</span>{" "}
        by{" "}
        <a
          href="mailto:dev.georgejose@gmail.com"
          className="text-primary-600 hover:text-primary-700"
        >
          George
        </a>
      </div>
    </>
  )
}

export default Contact
