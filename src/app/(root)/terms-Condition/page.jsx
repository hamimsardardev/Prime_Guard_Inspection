import React from "react";

const TermsCondition = () => {
  return (
    <div className=" text-white py-20 px-6 md:px-16 lg:px-32">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-center text-sm text-gray-300 mb-10">
          TERMS AND CONDITIONS OF SERVICES
        </p>

        {/* Section */}
        <Section title="1. General">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Unless otherwise specifically agreed in writing by PGI, all offers
              or services shall be governed by these terms and conditions.
            </li>
            <li>
              No other party is entitled to give instructions related to
              Services unless authorized by the Client and agreed by PGI.
            </li>
          </ul>
        </Section>

        <Section title="2. Provision of Services">
          <p className="mb-3">
            PGI standard services include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>Factory Audit</li>
            <li>Social Compliance Audit</li>
            <li>Pre-production Inspection</li>
            <li>During Production Inspection</li>
            <li>Pre-shipment Inspection</li>
            <li>Sorting Inspection (100%)</li>
            <li>Production Monitoring</li>
            <li>Loading Supervision</li>
            <li>Sample Picking</li>
            <li>Laboratory Testing</li>
          </ul>

          <p className="mt-4 text-gray-300">
            PGI will provide services using reasonable care and expertise based
            on client instructions and industry standards.
          </p>
        </Section>

        <Section title="3. Obligations of Client">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Provide all necessary instructions, specifications, and documents.
            </li>
            <li>Ensure access for PGI representatives to perform services.</li>
            <li>Provide any special equipment or support if required.</li>
          </ul>
        </Section>

        <Section title="4. Fees and Payment">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Fees are based on PGI standard rates unless agreed otherwise.
            </li>
            <li>
              Cancellation on inspection day may result in an abortive fee.
            </li>
            <li>
              Payments must be completed within agreed timelines; delays may
              incur interest.
            </li>
          </ul>
        </Section>

        <Section title="5. Liability and Indemnification">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              PGI is not an insurer or guarantor and disclaims such liability.
            </li>
            <li>
              Reports are based on available information at the time of service.
            </li>
            <li>
              Liability shall not exceed the total service fee or USD 3,000,
              whichever is lower.
            </li>
            <li>
              PGI is not liable for indirect losses such as loss of profit or
              business.
            </li>
          </ul>
        </Section>

        <Section title="6. Suspension or Termination">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              PGI may suspend services if the client fails to meet obligations.
            </li>
            <li>Non-payment may result in termination of services.</li>
          </ul>
        </Section>

        <Section title="7. Miscellaneous">
          <p>
            These terms cannot be modified unless agreed in writing by both PGI
            and the Client.
          </p>
        </Section>

        <Section title="8. Entire Agreement">
          <p>
            This document represents the complete agreement between PGI and the
            Client.
          </p>
        </Section>

        <Section title="9. Severability">
          <p className="text-gray-300">
            If any part of these terms is invalid, the remaining sections remain
            enforceable.
          </p>
        </Section>

        <Section title="10. Force Majeure">
          <p className="text-gray-300">
            PGI is not responsible for delays caused by events beyond control
            such as natural disasters, war, or government actions.
          </p>
        </Section>

        <Section title="Intellectual Property Rights">
          <p className="text-gray-300">
            PGI retains all intellectual property rights related to reports,
            data, processes, and documentation generated during services.
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
      <div className="text-sm lg:text-[18px] leading-relaxed text-gray-300">
        {children}
      </div>
    </div>
  );
}
export default TermsCondition;
