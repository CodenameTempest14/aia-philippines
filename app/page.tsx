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
