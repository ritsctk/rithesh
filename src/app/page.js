
"use client"; 
import Image from "next/image";
import Button from "./components/Button";
import VideoBanner from "./components/VideoBanner";
import Heading from "./components/Heading";
import ExperienceCard from "./components/ExperienceCard";
import SkillCard from "./components/SkillCard";
import ServiceCard from "./components/ServiceCard";
import PortfolioCard from "./components/PortfolioCard";
import { useState } from "react";



const headBkgImgLink = [
  {
    experience: "/images/head-bg/experience.png",
    skills: "/images/head-bg/experience.png",
    services: "/images/head-bg/experience.png",
    portfolio: "/images/head-bg/experience.png",
    workflow: "/images/head-bg/experience.png",
    contact: "/images/head-bg/experience.png",
  },
];

// const portfolioLogo = [
//   {
//     plt: "/images/portfolio/plt.png",
//     customWidth: "360px",
//   },
//   {
//     miss: "/images/portfolio/miss.png",
//     customWidth: "360px",
//   },
//   {
//     gorvex: "/images/portfolio/gorvex.png",
//     customWidth: "360px",
//   },
//   { joi: "/images/portfolio/joi.png", customWidth: "360px" },
//   {
//     soybu: "/images/portfolio/soybu.png",
//     customWidth: "360px",
//   },
//   {
//     fourth: "/images/portfolio/4th.png",
//     customWidth: "360px",
//   },
// ];
const portfolioLogos = [
  {
    port_logo: "/images/portfolio/plt.png",
    customWidth: "360px",
  },
  {
    port_logo: "/images/portfolio/miss.png",
    customWidth: "100px",
  },
  {
    port_logo: "/images/portfolio/gorvex.png",
    customWidth: "360px",
  },
  {
    port_logo: "/images/portfolio/joi.png",
    customWidth: "360px",
  },
  {
    port_logo: "/images/portfolio/soybu.png",
    customWidth: "360px",
  },
  {
    port_logo: "/images/portfolio/4th.png",
    customWidth: "360px",
  },
];

const experienceCard = [
  {
    designation: "Senior UI / UX Designer & Developer",
    company: "ANJ America",
    startDate: "01 / 02 / 2020",
    endDate: "31 / 11 / 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
  },
  {
    designation: "Lead UI / UX Designer & Developer",
    company: "Eglobeits",
    startDate: "10 / 02 / 2016",
    endDate: "01 / 01 / 2020",
    description: "Creating modern, responsive UI for enterprise applications.",
  },
  {
    designation: "Senior UI Designer",
    company: "DD Infoways",
    startDate: "10 / 02 / 2016",
    endDate: "01 / 01 / 2020",
    description: "Designed interactive websites for multiple clients.",
  },
  {
    designation: "Senior UI Designer & Developer",
    company: "Design Direct UK",
    startDate: "01 / 02 / 2020",
    endDate: "31 / 11 / 2024",
    description: "Designed interactive websites for multiple clients.",
  },
  {
    designation: "Web Designer & Developer",
    company: "JCube International",
    startDate: "10 / 02 / 2016",
    endDate: "01 / 01 / 2020",
    description: "Designed interactive websites for multiple clients.",
  },
  {
    designation: "Web Designer & Developer",
    company: "OPturasoft",
    startDate: "10 / 02 / 2016",
    endDate: "01 / 01 / 2020",
    description: "Designed interactive websites for multiple clients.",
  },
];
const skillCard = [
  {
    language: "HTML 5",
    percentage: "60%",
  },
  {
    language: "CSS 3",
    percentage: "60%",
  },
  {
    language: "UI / UX Design",
    percentage: "60%",
  },
  {
    language: "Branding",
    percentage: "60%",
  },
  {
    language: "BOOTSTRAP",
    percentage: "60%",
  },
  {
    language: "Photoshop",
    percentage: "60%",
  },
  {
    language: "LESS",
    percentage: "60%",
  },
  {
    language: "Figma",
    percentage: "60%",
  },
  {
    language: "SASS",
    percentage: "60%",
  },
  {
    language: "XD",
    percentage: "60%",
  },
  {
    language: "Tailwind",
    percentage: "60%",
  },
  {
    language: "Illustrator",
    percentage: "60%",
  },
  {
    language: "React Js",
    percentage: "60%",
  },
  {
    language: "Github",
    percentage: "60%",
  },
];

const serviceCard = [
  {
    backgroundImg: "/images/services-logo/web.png",
    caption: "Web Development",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundImg: "/images/services-logo/graphic.png",
    caption: "Graphic Designs",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundImg: "/images/services-logo/ui.png",
    caption: "UI/UX Design",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundImg: "/images/services-logo/logo-design.png",
    caption: "Logo Design",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundImg: "/images/services-logo/brand.png",
    caption: "Branding",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundImg: "/images/services-logo/ecommerce.png",
    caption: "Ecommerce",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

function handleToggle() {
  setIsVisible(!isVisible);
}
// function handleToggle() {
//   setIsVisible(!isVisible);
// }
  return (
    <div className="w-full relative">
      {/* Landing */}
      {/* Header */}
      <header className="w-full flex justify-center absolute z-50 text-white">
        <div className="container flex flex-wrap justify-between pt-4">
          <div className="w-[57px] py-4">
            <img className="w-full" src="/images/logo.png" />
          </div>
          <div className="w-[calc(100% - 57px)] pl-4 hidden lg:block">
            <nav className="w-full flex">
              <ul className="w-full flex flex-wrap uppercase cursor-pointer">
                <li>
                  <span className="p-4 hover:text-[#009E66] block">Home</span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    Experiences
                  </span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    Skillsets
                  </span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    Portfolio
                  </span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    Tools & Languages
                  </span>
                </li>
                <li>
                  <span className="p-4 hover:text-[#009E66] block">
                    Contact Us
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          {/* Mobile Menu */}
          <div className="w-full block lg:hidden ">
            <span onClick={handleToggle} className="w-6 h-6 block absolute right-4 top-8 cursor-pointer z-[9999]">
            {isVisible ? <img className="" src="/images/close.png"/> : <img className="" src="/images/menu.png"/>}
              
              
            </span>
            {isVisible && 
            <nav className="w-full flex bg-[#009e66] fixed h-screen z-[999] top-0">
              <ul className="w-full flex flex-wrap uppercase cursor-pointer">
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">Home</span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    About Us
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    Experiences
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    Skillsets
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    Portfolio
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    Tools & Languages
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="p-4 hover:text-[#009E66] block">
                    Contact Us
                  </span>
                </li>
              </ul>
            </nav>
            }
          </div>
        </div>
      </header>
      <div className="w-full h-screen overflow-hidden">
        <VideoBanner />
      </div>
      {/* Banner */}
      <div className="w-full h-screen flex items-center absolute top-0 z-30 text-white">
        <div className="flex flex-col md:flex-row items-center caption">
          {/* Profile pic */}
          <div className="w-[250px] lg:w-[310px] h-[250px] lg:h-[310px] relative">
            <span className="leaf"></span>
            <span className="block w-[250px] lg:w-[310px] h-[250px] lg:h-[310px] rounded-full p-picture ml-12">
              <img src="/images/rithesh.png" className="w-full" />
            </span>
          </div>
          {/* Captions */}
          <div className="w-[calc(100% - 310px)] pl-0 md:pl-16 xl:pl-24 md:pt-4">
            <span className="text-2xl pb-2">Hi There!</span>
            <h1 className="text-3xl font-[600] pb-2">
              I am <span className="text-[#FFF717]">Designer</span> &{" "}
              <span className="text-[#009E66]">Developer</span>
            </h1>
            <span className="text-2xl">I make the complex simple.</span>
            <span className="w-full block pt-4">
              <Button className="bg-[#009e66]" children="Contact Me" />
            </span>
          </div>
        </div>
        {/* Media links */}
        <div className="w-32 absolute left-8 media-header">
          <ul className="media">
            <li>
              <span className="w-2 block">
                <img className="w-full" src="/images/f.png" />
              </span>
            </li>
            <li>
              <span className="w-4 block">
                <img className="w-full" src="/images/i.png" />
              </span>
            </li>
            <li>
              <span className="w-4 block">
                <img className="w-full" src="/images/in.png" />
              </span>
            </li>
            <li>
              <span className="w-5 block">
                <img className="w-full" src="/images/be.png" />
              </span>
            </li>
          </ul>
        </div>
        {/* Contact Details */}
        <div className="w-full absolute bottom-8">
          <ul className="flex flex-wrap">
            <li className="w-full md:w-auto px-8">
              <span className="w-full flex flex-col">
                <h2 className="text-xl font-[600]">Email</h2>
                <p className="text-[#8F8F8F]">ritsctk@gmail.com</p>
              </span>
            </li>
            <li className="w-full md:w-auto px-8">
              <span className="w-full flex flex-col brdl">
                <h2 className="text-xl font-[600]">Phone</h2>
                <p className="text-[#8F8F8F]">9946579590</p>
              </span>
            </li>
            <li className="w-full md:w-auto px-8">
              <span className="w-full flex flex-col brdl">
                <h2 className="text-xl font-[600]">Location</h2>
                <p className="text-[#8F8F8F]">Allappuzha, Kerala, India</p>
              </span>
            </li>
          </ul>
        </div>
        {/* Frameworks */}
        <div className="w-auto absolute right-list">
          <ul className="w-full text-xl">
            <li className="w-full flex brdb py-2 items-center max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/magento.png" className="w-full" />
              </span>
              <span className="pl-5">Magento</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-16 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/shopify.png" className="w-full" />
              </span>
              <span className="pl-5">Shopify</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-32 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/big.png" className="w-full" />
              </span>
              <span className="pl-5">Bigcommerce</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-48 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/woo.png" className="w-full" />
              </span>
              <span className="pl-5">Woocommerce</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-64 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/html.png" className="w-full" />
              </span>
              <span className="pl-5">HTML5</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-64 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/css.png" className="w-full" />
              </span>
              <span className="pl-5">CSS3</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-64 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/boots.png" className="w-full" />
              </span>
              <span className="pl-5">Bootstrap</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-48 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-2 flex justify-center items-center">
                <img src="/images/frameworks/less.png" className="w-full" />
              </span>
              <span className="pl-5">LESS</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-32 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-2 flex justify-center items-center">
                <img src="/images/frameworks/sass.png" className="w-full" />
              </span>
              <span className="pl-5">SASS</span>
            </li>
            <li className="w-full flex brdb py-2 items-center ml-16 max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/js.png" className="w-full" />
              </span>
              <span className="pl-5">Javascript</span>
            </li>
            <li className="w-full flex brdb py-2 items-center max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/react.png" className="w-full" />
              </span>
              <span className="pl-5">React Js</span>
            </li>
            <li className="w-full flex brdb py-2 items-center max-width">
              <span className="w-[50px] h-[50px] border-2 border-solid border-[#009E66] rounded-full p-3 flex justify-center items-center">
                <img src="/images/frameworks/vue.png" className="w-full" />
              </span>
              <span className="pl-5">Vue Js</span>
            </li>
          </ul>
        </div>
      </div>
      {/* About Us */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-[1400px] flex flex-wrap items-center">
          <div className="w-full max-w-[500px] bg-[#F8F8F8]">
            <img src="/images/profile.png" className="w-full" />
          </div>
          <div className="w-full lg:w-[calc(100%-500px)] pl-0 lg:pl-16">
            <h1 className="font-[600] text-4xl pb-4">
              <span className="text-2xl font-[400]">Who am i?</span>
              <br />
              I'm Rit's, a visual UI/UX Designer and
              <br /> Frontend Developer
            </h1>
            <p className="text-lg text-[#8F8F8F] leading-8 pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <ul className="text-lg flex flex-wrap leading-8">
              <li className="w-1/2 text-[#8f8f8f]">
                <span className="text-[#000000]">Name: </span>Rithesh Somarajan
              </li>
              <li className="w-1/2 text-[#8f8f8f]">
                <span className="text-[#000000]">From: </span>Allappuzha,
                Kerala, India
              </li>
              <li className="w-1/2 text-[#8f8f8f]">
                <span className="text-[#000000]">Email: </span>ritsctk@gmail.com
              </li>
              <li className="w-1/2 text-[#8f8f8f]">
                <span className="text-[#000000]">Phone: </span>+91 99465 79590,
                +91 97782 05176
              </li>
              <li className="pt-4">
                <Button children="Download CV" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-[1400px] flex flex-wrap">
          <Heading
          cwidth="w-full max-w-[804px]"
            content="Experience"
            backgroundImg="/images/head-bg/experience.png"
          />
          <ul className="w-full flex flex-wrap justify-between">
            {experienceCard.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                designation={exp.designation}
                description={exp.description}
                startDate={exp.startDate}
                endDate={exp.endDate}
              />
            ))}
          </ul>
        </div>
      </div>
      {/* Skills */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full lg:min-h-screen max-w-[1400px]">
          <Heading
            content="Skills"
            backgroundImg="/images/head-bg/skills.png"
          />
          <div className="w-full flex flex-wrap text-lg">
            {skillCard.map((item, index) => (
              <SkillCard
                key={index}
                percentage={item.percentage}
                language={item.language}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full lg:min-h-screen max-w-[1400px]">
          <Heading
            content="Services"
            backgroundImg="/images/head-bg/services.png"
          />
          <div className="w-full">
            <ul className="w-full flex flex-wrap">
              {serviceCard.map((item, index) => (
                <ServiceCard
                  key={index}
                  backgroundImg={item.backgroundImg}
                  caption={item.caption}
                  content={item.content}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full lg:min-h-screen max-w-[1400px]">
          <Heading
            content="My portfolio"
            backgroundImg="/images/head-bg/portfolio.png"
          />
          <div className="w-full">
            <ul className="w-full flex flex-wrap">
              {portfolioLogos.map((item, index) => (
                <PortfolioCard
                  key={index}
                  port_logo={item.port_logo}
                  style={{ width: item.customWidth }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Workflow */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full lg:min-h-screen max-w-[1400px]">
          <Heading
            content="Workflow"
            backgroundImg="/images/head-bg/workflow.png"
          />
          <div className="w-full relative">
            <div className="w-full">
              <img className="w-full hidden md:block" src="/images/workflow/line.png" />
              <img className="w-full block md:hidden" src="/images/workflow/line-mobile.png" />
            </div>
            <span className="map-icon-left">
              <img className="w-full" src="/images/workflow/map.png" />
            </span>
            <ul>
              <li>
                <span className="strategy">
                  <img className="w-full" src="/images/workflow/strategy.png" />
                  <span className="w-full block flex justify-center items-center text-[24px] pt-4">Strategy</span>
                </span>
              </li>
              <li>
                <span className="planning">
                  <img className="w-full" src="/images/workflow/planning.png" />
                  <span className="w-full block flex justify-center items-center text-[24px] pt-4">Planning</span>
                </span>
              </li>
              <li>
                <span className="build">
                  <img className="w-full" src="/images/workflow/build.png" />
                  <span className="w-full block flex justify-center items-center text-[24px] pt-4">Build</span>
                </span>
              </li>
              <li>
                <span className="our_work">
                  <img className="w-full" src="/images/workflow/our_work.png" />
                  <span className="w-full block flex justify-center items-center text-[24px] pt-4">Our Work</span>
                </span>
              </li>
            </ul>
            <span className="map-icon-right">
              <img className="w-full" src="/images/workflow/map.png" />
            </span>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="w-full lg:min-h-screen flex justify-center items-center p-4">
        <div className="w-full lg:min-h-screen max-w-[1400px] flex flex-col">
          <Heading
            content="Get in touch"
            backgroundImg="/images/head-bg/contact.png"
          />
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-2/3 pr-0 md:pr-6">
              <h3 className="font-[600]">Message Me</h3>
              <div className="w-full">
                <ul className="flex flex-wrap">
                  <li className="p-2 pb-8 w-full md:w-1/3">
                    <span className="w-full block">
                      <input
                        placeholder="Name"
                        className="w-full bg-[#efefef] p-3 border-b-2 border-solid border-[#009E66]"
                      />
                    </span>
                  </li>
                  <li className="p-2 pb-8 w-full md:w-1/3">
                    <span className="w-full block">
                      <input
                        placeholder="Name"
                        className="w-full bg-[#efefef] p-3 border-b-2 border-solid border-[#009E66]"
                      />
                    </span>
                  </li>
                  <li className="p-2 pb-8 w-full md:w-1/3">
                    <span className="w-full block">
                      <input
                        placeholder="Name"
                        className="w-full bg-[#efefef] p-3 border-b-2 border-solid border-[#009E66]"
                      />
                    </span>
                  </li>
                  <li className="p-2 pb-8 w-full">
                    <span className="w-full block">
                      <input
                        placeholder="Name"
                        className="w-full bg-[#efefef] p-3 border-b-2 border-solid border-[#009E66]"
                      />
                    </span>
                  </li>
                  <li className="p-2 pb-8 w-full">
                    <span className="w-full block">
                      <textarea
                        placeholder="Name"
                        className="w-full h-[100px] bg-[#efefef] p-3 border-b-2 border-solid border-[#009E66]"
                      />
                    </span>
                  </li>
                  <li className="p-2">
                    <Button className="bg-[#009e66]" children="Contact Me" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 pl-6">
              <h3 className="font-[600]">Contact Info</h3>
              <p>
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>
              <ul>
                <li className="flex items-center">
                  <span>
                    <img className="w-full" src="/images/contact/name.png" />
                  </span>
                  <span className="pl-8 flex flex-col">
                    <label className="font-[600] pb-2">Name</label>
                    <span>Rithesh Somarajan</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <span>
                    <img
                      className="w-full"
                      src="/images/contact/location.png"
                    />
                  </span>
                  <span className="pl-8 flex flex-col">
                    <label className="font-[600] pb-2">Location</label>
                    <span>Allappuzha, Kerala, India</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <span>
                    <img className="w-full" src="/images/contact/call_me.png" />
                  </span>
                  <span className="pl-8 flex flex-col">
                    <label className="font-[600] pb-2">Call me</label>
                    <span>+91 9946 579 590</span>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <img className="w-full" src="/images/contact/email.png" />
                  </span>
                  <span className="pl-8 flex flex-col">
                    <label className="font-[600] pb-2">Email me</label>
                    <span>ritsctk@gmail.com</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
