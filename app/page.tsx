import Image from "next/image";
import header from "../../aia-app/public/SDA-Logo.png";
import {rubik} from "./layout";
import HeaderItem from "@/components/header-item";
import MainButton from "@/components/main-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <header className="shadow-md flex flex-row items-center justify-between padding w-full h-[90px] bg-red-500 bg-opacity-30">
          <div className={"uppercase flex flex-wrap flex-cols items-center " + rubik.className}> 
            <Image src = {header} alt="Sto. Domingo Associates Agency Logo" className="bg-contain bg-no-repeat w-20 h-20"/>
            <span className={"text-2xl font-semibold pl-3 text-red-900 "}>
              sto domingo associates  
              <br/><span className="text-black text-xl font-normal">AIA Philippines</span> 
            </span>
          </div>

          <div className={"uppercase flex-row items-center space-x-8 text-md " + rubik.className}>
            <HeaderItem>News and Media</HeaderItem>
            <HeaderItem>Contact</HeaderItem>
            <HeaderItem>Organization</HeaderItem>
            <HeaderItem>About</HeaderItem>
            <MainButton className="py-2 px-6" onClick={() => {}}>Join Now</MainButton>
          </div>
      </header>
    </main>
  );
}
