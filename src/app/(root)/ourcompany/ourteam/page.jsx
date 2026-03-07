import Container from "@/app/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurTeam = () => {
  return (
    <div>
      <section>
        {/* ================= HERO BANNER ================= */}
        <div className="bg-[url('/aboutbanner.png')] bg-cover bg-center ">
          <div className="bg-black/60 py-[240px]">
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

        {/* ================= COMPANY OVERVIEW ================= */}
        <div className="py-16 md:py-24">
          <Container>
            <section>
              <div>
                {/* Heading */}
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-white">Our Team</h2>
                  <p className="text-primary uppercase text-sm mt-2 tracking-wider">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Member 1 */}
                  <div className="bg-third p-6 rounded-xl shadow">
                    <Image
                      src="/ceo_hossain.jpg"
                      alt="ceo_hossain.jpg"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-primary font-semibold text-[24px]">
                      Md Hossain Ali
                    </h3>

                    <p className="text-white text-[20px]">Founder & CEO</p>

                    <p className="text-blue-600 text-[18px] mb-3">
                      hossain@pgi-intl.com
                    </p>

                    <p className="text-white text-[18px] leading-relaxed">
                      Hossain Ali is a distinguished Third-Party Inspection professional and industry leader with 06 years of experience in quality control, supplier auditing, and product inspection, helping global clients ensure compliance with international standards and product quality.
                    </p>
                  </div>

                  {/* Member 2 */}
                  {/* <div className="bg-white p-6 rounded-xl shadow">
                    <Image
                      src="/team/sonika.jpg"
                      alt="Sonika"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-orange-600 font-semibold text-lg">
                      Mrs Sonika Prashar
                    </h3>

                    <p className="text-gray-600 text-sm">Managing Director</p>

                    <p className="text-blue-600 text-sm mb-3">
                      Sonika@vrmaritime.net
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      Founder member of VRM. An educator who now leads market
                      research, analyzing competitor activity and identifying
                      new markets.
                    </p>
                  </div> */}

                  {/* Member 3 */}
                  {/* <div className="bg-white p-6 rounded-xl shadow">
                    <Image
                      src="/team/kavita.jpg"
                      alt="Kavita"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-orange-600 font-semibold text-lg">
                      Kavita Bane
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Joint Managing Director
                    </p>

                    <p className="text-blue-600 text-sm mb-3">
                      KSB@vrmaritime.net
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      Kavita brings 22+ years of experience in crew manning and
                      recruitment in the shipping industry.
                    </p>
                  </div> */}

                  {/* Member 4 */}
                  {/* <div className="bg-white p-6 rounded-xl shadow">
                    <Image
                      src="/team/abhimanyu.jpg"
                      alt="Abhimanyu"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-orange-600 font-semibold text-lg">
                      Abhimanyu Soni
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Head of Department - Operations
                    </p>

                    <p className="text-blue-600 text-sm mb-3">
                      ASO@vrmaritime.net
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      A seasoned maritime-sector professional with expertise in
                      Legal Compliance and Operations.
                    </p>
                  </div> */}

                  {/* Member 5 */}
                  {/* <div className="bg-white p-6 rounded-xl shadow">
                    <Image
                      src="/team/kishor.jpg"
                      alt="Kishor"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-orange-600 font-semibold text-lg">
                      Kishor Pati
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Head of Department - Recruitment
                    </p>

                    <p className="text-blue-600 text-sm mb-3">
                      resume@vrmaritime.net
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mr. Kishor Pati brings 23+ years of shipping industry
                      experience with sea service and shore-based roles.
                    </p>
                  </div> */}

                  {/* Member 6 */}
                  {/* <div className="bg-white p-6 rounded-xl shadow">
                    <Image
                      src="/team/rajesh.jpg"
                      alt="Rajesh"
                      width={400}
                      height={400}
                      className="rounded-md mb-4"
                    />

                    <h3 className="text-orange-600 font-semibold text-lg">
                      Rajesh Arora
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Head of Department - QMS
                    </p>

                    <p className="text-blue-600 text-sm mb-3">
                      QMS@vrmaritime.net
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      Head of QMS, Compliance and Data Analytics Department with
                      34 years of experience in the maritime industry.
                    </p>
                  </div> */}
                </div>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
