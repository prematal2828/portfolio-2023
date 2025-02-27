import {
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";
import MakeHappenImg from "@/assets/makeHappen.png";
import Marquee from "@/components/sections/Marquee";
import { Heading1 } from "@/components/special/Typography";
const ContactPage = () => {
  const email = "ashfaqnaseem1@gmail.com";
  const social_links = [
    {
      name: "fb",
      fullName: "Facebook",
      icon: TbBrandFacebook,
      href: "",
    },
    {
      name: "ln",
      fullName: "LinkedIn",
      icon: TbBrandLinkedin,
      href: "",
    },
    {
      name: "git",
      fullName: "Github",
      icon: TbBrandGithub,
      href: "",
    },
  ];
  return (
    <div className="font-secondary">
      <section className="pb-40">
        <Heading1 className="text-accent text-xl xsm:text-3xl md:text-4xl  text-center font-primary uppercase tracking-tighter flex items-center justify-center pb-40 pt-20">
          <a
            href={`mailto:${email}`}
            className="p-5">
            {email}
          </a>
        </Heading1>

        <div className="flex flex-col md:flex-row gap-5 container">
          {/* left side */}
          <div className="flex-2">
            <p className="-mb-9 text-6xl font-extrabold font-cursive text-center">
              let's
            </p>
            <img
              src={MakeHappenImg}
              alt=""
            />
          </div>

          {/* right side */}
          <article className="flex-3 flex flex-col gap-10">
            <p className="text-3xl font-semibold uppercase">
              Please contact with me through my email or social media
            </p>

            <ul className="border-y-2 border-primary">
              {social_links.map((social, socialIdx) => {
                return (
                  <li
                    key={socialIdx}
                    className={` ${
                      social_links.length - 1 === socialIdx
                        ? ""
                        : "border-b-2 border-primary"
                    }`}>
                    <a
                      href={social.href ? social.href : "#"}
                      className="flex items-center justify-between py-5">
                      <p className="uppercase text-xl ">{social.fullName}</p>{" "}
                      <social.icon className="w-6 h-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      <Marquee text="Make things happen" />
    </div>
  );
};
export default ContactPage;
