import Container from "@/app/components/common/Container";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      image: "/ceo_hossain.jpg",
      name: "Md Hossain Ali",
      designation: "Founder & CEO",
      email: "hossain@pgi-intl.com",
      description:
        "Hossain Ali is a distinguished Third-Party Inspection professional and industry leader with 10 years of experience in quality control, supplier auditing, and product inspection, helping global clients ensure compliance with international standards and product quality.",
    },

    // Future Team Members
    // {
    //   image: "/team2.jpg",
    //   name: "John Doe",
    //   designation: "Quality Manager",
    //   email: "john@pgi-intl.com",
    //   description: "Description here",
    // },
  ];

  return (
    <div>
      <section>
        {/* ================= HERO BANNER ================= */}
        <div className="bg-[url('/ourteam.png')] bg-cover bg-center">
          <div className="bg-black/60 py-75">
            <Container>
              <div className="flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-6">
                  Our Team
                </h1>

                <p className="text-white">
                  Delivering trusted inspection, testing, and quality control
                  solutions to global importers and exporters.
                </p>
              </div>
            </Container>
          </div>
        </div>

        {/* ================= TEAM SECTION ================= */}
        <div className="py-16 md:py-24">
          <Container>
            <section>
              {/* Heading */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white">
                  Our Team
                </h2>

                <p className="text-primary uppercase text-[18px] mt-2 tracking-wider">
                  With over 1 years of combined experience, we've got a
                  well-seasoned team at the helm.
                </p>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-third p-6 rounded-xl shadow"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-primary font-semibold text-[24px]">
                      {member.name}
                    </h3>

                    <p className="text-white text-[20px]">
                      {member.designation}
                    </p>

                    <p className="text-blue-600 text-[18px] mb-3 hover:underline">
                      {member.email}
                    </p>

                    <p className="text-white text-[18px] leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;