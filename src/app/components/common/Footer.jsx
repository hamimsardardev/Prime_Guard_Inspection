import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  const serviceLinks = [
    {
      title: "Audit & Survey Services",
      link: "/service/auditservey",
    },
    {
      title: "Product Quality Control Inspection",
      link: "/service/productinspection",
    },
    {
      title: "Supplier Management & Development",
      link: "/service/supliermanagement",
    },
  ];

  const productLinks = [
    {
      title: "Electronics Products Inspection",
      link: "/product/electronisproduct",
    },
    {
      title: "Soft Goods",
      link: "/product/softgoods",
    },
    {
      title: "Hard Goods",
      link: "/product/hardgoods",
    },
    {
      title: "Mechanical Products",
      link: "/product/mechanicalproduct",
    },
    {
      title: "Craft & Paper Goods",
      link: "/product/craftpaper",
    },
    {
      title: "Footwear",
      link: "/product/footwear",
    },
    {
      title: "Food & Fruits",
      link: "/product/foodfruits",
    },
  ];

  const corporateLinks = [
    {
      title: "Our Company",
      link: "/ourcompany/about",
    },
    {
      title: "Faqs",
      link: "/resourses/faqs",
    },
    {
      title: "Terms and Conditions",
      link: "/terms-Condition",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
  ];

  const contactInfo = [
    "E-Mail: service@pgi-intl.com",
    "Tel: +880 1642-401262 （Mr. Hossain）",
    "WhatsApp: +880 1642-401262",
    "Complaint Mailbox: compliance@pgi-intl.com",
  ];

  return (
    <>
      <footer>
        <Container>
          {/* Newsletter */}
          <div className="border-b border-gray-700">
            <div className="px-6 py-12 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <h3 className="text-xl font-semibold text-primary whitespace-nowrap">
                  Subscribe to our Newsletter
                </h3>

                <form className="flex flex-1 flex-col sm:flex-row gap-4 w-full max-w-3xl">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Country"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />

                  <input
                    type="email"
                    placeholder="E-Mail"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />

                  <button
                    type="submit"
                    className="px-8 py-3 border border-primary bg-transparent hover:bg-primary text-primary hover:text-third cursor-pointer font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Main Footer */}
          <div className="px-6 py-16 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {/* Service */}
              <div>
                <h4 className="text-primary font-semibold mb-5">
                  Service
                </h4>

                <ul className="space-y-3 text-white text-sm">
                  {serviceLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-primary font-semibold mb-5">
                  Products
                </h4>

                <ul className="space-y-3 text-white text-sm">
                  {productLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corporate */}
              <div>
                <h4 className="text-primary font-semibold mb-5">
                  Corporate
                </h4>

                <ul className="space-y-3 text-white text-sm">
                  {corporateLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-primary font-semibold mb-5">
                  Contact
                </h4>

                <ul className="space-y-3 text-white text-sm">
                  {contactInfo.map((item, index) => (
                    <li
                      key={index}
                      className="hover:underline"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-10 border-t text-primary border-gray-800 text-center text-sm">
              <p>
                © {new Date().getFullYear()} Prime Guard Inspection.
              </p>

              <div className="flex justify-center gap-6 mt-6">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hossain.ali.680713"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hossain-ali-pgi-intl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-6 w-6 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-6 w-6 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l7 4-7 4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;