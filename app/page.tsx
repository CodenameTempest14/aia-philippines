import Image from "next/image";
import header from "../../aia-app/public/SDA-Logo.png";
import pic_1 from "../../aia-app/public/family-christmas.jpg";
import {rubik} from "./layout";
import HeaderItem from "@/components/header-item";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import Carousel from "@/components/carousel";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import building from "../../aia-app/public/AIA-Bldg.png";
import { BsCardChecklist } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const DATA = [
  {
    image: 'https://picsum.photos/seed/random101/500/500',
    title: 'Always Innovating',
    description: 'From marketing to product development, we’re relentlessly pursuing innovation.',
    buttonText: 'Explore Innovations',
    buttonLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/random102/500/500',
    title: 'Leading the Way',
    description: 'We set the standard in the industry with our cutting-edge solutions and unparalleled service.',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/random103/500/500',
    title: 'Driven by Excellence',
    description: 'Our commitment to excellence is reflected in every aspect of our business.',
    buttonText: 'See Our Work',
    buttonLink: '#',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <title>Sto Domingo Associates</title>
      <header className="fixed shadow-lg flex flex-row items-center justify-between padding w-full h-[90px] bg-red-300 bg-opacity-80 z-10">
          <div className={"uppercase flex flex-wrap flex-cols items-center " + rubik.className}> 
            <Image src = {header} alt="Sto. Domingo Associates Agency Logo" className="bg-contain bg-no-repeat w-20 h-20"/>
            <span className={"text-2xl font-semibold pl-3 text-red-900 "}>
              sto domingo associates  
              <br/><span className="text-black text-xl font-medium">AIA Philippines</span> 
            </span>
          </div>

          <div className={"transition duration-300 uppercase flex flex-row items-center space-x-8 text-md " + rubik.className}>
            <HeaderItem className="hover:scale-105 duration-150 hover:text-red-700">News and Media</HeaderItem>
            <HeaderItem className="hover:scale-105 duration-150 hover:text-red-700">Organization</HeaderItem>
            <HeaderItem className="hover:scale-105 duration-150 hover:text-red-700">Contact</HeaderItem>
            <HeaderItem className="hover:scale-105 duration-150 hover:text-red-700">About</HeaderItem>
            <button className={"uppercase font-semibold text-white bg-red-400 w-24 h-10 hover:scale-110 duration-150 " + rubik.className}>Join Now</button>
          </div>
      </header>

      <div className="mt-[150px] my-[100px]">
        {/* <Image src={pic_1} alt="sample-logo-1" className="object-cover h-[750px] w-[1250px] rounded-2xl"/> */}
        <Carousel data={DATA} />
      </div>

      <div className={"duration-200 uppercase text-red-900 font-semibold flex flex-col items-center " + rubik.className}>
        <span className="font-bold text-5xl">Field Force</span> 
        <div className="flex flex-row items-center space-x-28 ">
          <div className="text-3xl p-7 hover:scale-105 cursor-pointer hover:shadow-2xl duration-200 shadow-lg flex flex-col items-center justify-start space-y-5 bg-red-300 h-[250px] w-[250px] my-20 rounded-2xl">
            <HiOutlineComputerDesktop size="50px"/>
            <span className="text-center">  
              Unit Manager
            </span>
            <span className="text-5xl">
              8
            </span>
          </div>
          <div className="text-2xl p-7 hover:scale-105 cursor-pointer hover:shadow-2xl duration-200 shadow-lg flex flex-col items-center justify-start space-y-5 bg-red-300 h-[250px] w-[250px] my-20 rounded-2xl">
            <BsPeopleFill size="50px" />
            <span className="text-center">
              Financial Advisors
            </span>
            <span className="text-5xl">
              150
            </span>
          </div>
          <div className="text-3xl p-7 hover:scale-105 cursor-pointer hover:shadow-2xl duration-200 shadow-lg flex flex-col items-center justify-start space-y-9 bg-red-300 h-[250px] w-[250px] my-20 rounded-2xl">
            <BsGlobe size="50px"/>
            <span>
              Branches
            </span>
            <span className="text-5xl">
              7
            </span>
          </div>
        </div>
      </div>

      <div className={"my-16  w-full h-[750px] flex flex-row padding " + rubik.className}>
        <Image src={building} alt="building" className="object-cover h-[700px] w-[500px] rounded-2xl sticky left-[470px]"/>
        <div className="h-[700px] w-[500px] bg-red-300 relative left-[200px] top-[30px] flex rounded-2xl p-7 flex-col items-start space-y-4 shadow-xl">
          <span className="font-bold text-3xl">
            <span className="text-red-800">STO. DOMINGO ASSOCIATES </span>
            <br/>IS ONE OF THE LARGEST 
            <br/>AGENCIES IN AIA PHILIPPINES
          </span>

          <span className="text-lg">
            Sto. Domingo Associates stands as one of the largest and most prominent agencies within AIA Philippines.
            Renowned for its extensive network and exceptional service, the agency has established a strong reputation 
            in the industry, reflecting its commitment to excellence and client satisfaction. 
            <br/><br/>This success is built on a foundation of experienced professionals who bring a wealth of knowledge and dedication 
            to their work. Through continuous innovation and a client-centric approach, Sto. Domingo Associates not only meets 
            but often exceeds the expectations of those they serve. Their proactive strategies and personalized solutions ensure 
            that clients  receive the best possible outcomes, cementing the agency's position as a leader in the Philippine insurance market.
          </span>
        </div>
      </div>

      <div className={"uppercase w-full h-[400px] mt-16 mb-10 padding flex flex-col items-center space-y-10 " + rubik.className}>
        <div>
          <span className="font-bold text-5xl text-red-900">Vision</span> 
        </div>
        <div className="flex flex-row items-center space-x-16 text-red-800">
          <div className="border-red-800 border-solid border-[3px] h-[250px] w-[250px] rounded-xl shadow-lg p-5 pt-9 hover:scale-105 duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center space-y-6 relative overflow-hidden group">
              <BsCardChecklist size="60px"/>
              <span className="font-semibold text-2xl sticky text-center cursor-pointer">
                <span className="transition-opacity duration-500 group-hover:opacity-0">
                  Highly Productive Team
                </span>
                <span className="absolute top-0 left-0 duration-500 opacity-0 group-hover:opacity-100 font-normal text-sm hover:scale-105">
                  Achieve goals efficiently through
                  effective collaboration 
                  and resource utilzation
                </span>
              </span>
            </div>
          </div>
          <div className="border-red-800 border-solid border-[3px] h-[250px] w-[250px] rounded-xl shadow-lg pt-9 p-5 hover:scale-105 duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center space-y-6 relative overflow-hidden group">
              <RiLightbulbFlashLine size="60px"/>
              <span className="font-semibold text-2xl text-center sticky cursor-pointer">
                <span className="transition-opacity duration-500 group-hover:opacity-0">
                  Energized and Inspired 
                </span>
                <span className="absolute top-0 left-0 duration-500 opacity-0 group-hover:opacity-100 font-normal text-sm hover:scale-100">
                  Motivated individuals who approach tasks
                  with enthusiasm and creativity
                </span>
              </span>
            </div>
          </div>
          <div className="border-red-800 border-solid border-[3px] h-[250px] w-[250px] rounded-xl shadow-lg pt-9 p-4 hover:scale-105 duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center space-y-6 relative overflow-hidden group">
              <RiTeamFill size="55px"/>
              <span className="font-semibold text-2xl text-center sticky cursor-pointer">
                <span className="transition-opacity duration-500 group-hover:opacity-0">
                  Professionally Competent
                </span>
                <span className="absolute top-0 left-0 duration-500 opacity-0 group-hover:opacity-100 font-normal text-sm hover:scale-100">
                  Skilled experts who deliver high-quality
                  work through continous learning and development
                </span>
              </span>
            </div>
          </div>
          <div className="border-red-800 border-solid border-[3px] h-[250px] w-[250px] rounded-xl shadow-lg pt-9 p-5 hover:scale-105 duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center space-y-6 relative overflow-hidden group">
              <FaCircleDollarToSlot size="50px"/>
              <span className="font-semibold text-2xl text-center sticky cursor-pointer">
                <span className="transition-opacity duration-500 group-hover:opacity-0">
                  Fulltime Advisors
                </span>
                <span className="absolute top-0 left-0 duration-500 opacity-0 group-hover:opacity-100 font-normal text-sm hover:scale-100">
                Dedicated professionals offering 
                consistent and reliable guidance to 
                clients on a full-time basis
                </span>
              </span>
            </div>  
          </div>
        </div>
      </div>

      <footer className={"p-8 w-full bg-red-950 text-white padding " + rubik.className}>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-start space-y-5 font-normal">
            <span className="font-semibold text-lg">Quick Links</span>
            <span >Blog</span>
            <span>News</span>
            <span>About us</span>
          </div>

          <div className="flex flex-col items-start space-y-5 font-normal">
            <span className="font-semibold text-lg">Privacy Policy</span>
            <span >Terms and Condition</span>
            <span>Branch locator</span>
            <span>Organization</span>
          </div>

          <div className="flex flex-col items-start space-y-5 font-normal">
            <span className="font-semibold text-lg">Contact Information</span>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineEmail color="white" size="30px"/>
              <span>stodomingoassociates@gmail.com</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlinePhoneInTalk color="white" size="30px"/>
              <span>(+63) 17 800 9303</span>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <span className="font-semibold text-lg">Community</span>
            <div className="flex flex-row items-center space-x-3">
              <IoLogoFacebook size="50px"/>
              <FaLinkedin size="45px"/>
            </div>
          </div>
        </div>

        <div className="bg-white h-[1px] w-full my-7"/>
        <div className="flex flex-col items-center font-thin text-xs">
          <span>
            Leviste Street, 9F Philam Salcedo Building Makati City, NCR 1200, Philippines
          </span>
          <span>
            @2024 stodomingoassociates.vercel.app. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
