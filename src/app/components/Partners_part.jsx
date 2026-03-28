import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Container from "./common/Container";

const reviews = [
  { img: "/partnersone.jpeg" },
  { img: "/partnerstwo.jpeg" },
  { img: "/partnersthree.jpeg" },
  { img: "/partnersfour.jpeg" },
  { img: "/partnersfive.jpeg" },
  { img: "/partnerssix.jpeg" },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 1);

const PartnersPart = ({ img }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center h-24 w-40 rounded-xl border bg-white dark:bg-black",
          "border-gray-200 dark:border-gray-700",
        )}
      >
        <img
          src={img}
          alt="partner logo"
          className="h-16 w-auto object-contain"
        />
      </div>
    </>
  );
};

export default function PartnersMarquee() {
  return (
    <Container>
      <div className="relative py-12 w-full overflow-hidden border-t-2 border-gray-300">
        <div className="text-center">
          <h2 className="relative mb-12 text-[32px] text-primary font-bold leading-4 text-center after:content-[''] after:absolute after:bottom-[-20px] after:left-[633px] after:rounded-[10px] after:bg-primary after:w-0 hover:after:w-12 after:h-1 after:transition-all after:duration-300">
            Partners
          </h2>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((item, index) => (
            <PartnersPart key={index} img={item.img} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
          {secondRow.map((item, index) => (
            <PartnersPart key={index} img={item.img} />
          ))}
        </Marquee>
      </div>
    </Container>
  );
}
