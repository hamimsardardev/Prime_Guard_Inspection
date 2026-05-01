import React from "react";

const Privacypolicy = () => {
  return (
    <div className=" text-white py-20 px-6 md:px-16 lg:px-32">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Privacy Policy
        </h1>

        {/* 1. Terms */}
        <Section title="1. Terms">
          <p className="mb-3">
            This website is owned and managed by PGI. By accessing this website,
            you agree to comply with all terms and conditions stated here. If
            you do not agree, please do not use this website.
          </p>
          <p>
            PGI may update these terms at any time. Continued use of the website
            means you accept any changes. Please review this page regularly.
          </p>
        </Section>

        {/* 2. Intellectual Property */}
        <Section title="2. Intellectual Property Statement">
          <p>
            All content on this website including images, text, and media is
            protected by intellectual property laws and owned by PGI unless
            stated otherwise. You may not copy, distribute, or use any content
            for commercial purposes without permission.
          </p>
        </Section>

        {/* 3. Customer Info */}
        <Section title="3. Protection of Customer Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              PGI respects your privacy and does not collect personal
              information without your consent.
            </li>
            <li>
              Information such as name, email, phone, and company details may be
              collected when voluntarily provided.
            </li>
            <li>
              PGI will not share your personal data except where required by law
              or necessary to provide services.
            </li>
            <li>While we use security measures, no system is 100% secure.</li>
            <li>
              You may request deletion of your data by contacting us via email.
            </li>
          </ul>
        </Section>

        {/* 4. Third Party Links */}
        <Section title="4. Links to Third-Party Websites">
          <p>
            PGI is not responsible for the content or practices of third-party
            websites linked from this site. Use them at your own risk.
          </p>
        </Section>

        {/* 5. Trademark */}
        <Section title="5. Trademark">
          <p>
            All trademarks displayed on this website belong to PGI or respective
            owners. You may not use them without written permission.
          </p>
        </Section>

        {/* 6. Cookies */}
        <Section title="6. Cookies">
          <p>
            This website uses cookies to enhance user experience. You may
            disable cookies through your browser settings, but some features may
            not work properly.
          </p>
        </Section>

        {/* 7. Disclaimer */}
        <Section title="7. Disclaimer">
          <ul className="list-disc pl-6 space-y-2">
            <li>Use of this website is at your own risk.</li>
            <li>
              PGI does not guarantee accuracy or completeness of information.
            </li>
            <li>
              PGI is not responsible for losses due to technical issues,
              cyber-attacks, or external factors.
            </li>
          </ul>
        </Section>

        {/* 8. Law */}
        <Section title="8. Applicable Law and Interpretation">
          <p>
            These terms are governed by applicable laws. Any disputes will be
            resolved through proper legal procedures.
          </p>
        </Section>
      </div>
    </div>
  );
};

/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg md:text-xl font-semibold mb-3 text-primary">{title}</h2>
      <div className="text-sm leading-relaxed text-gray-300 lg:text-[18px]">{children}</div>
    </div>
  );
}

export default Privacypolicy;
