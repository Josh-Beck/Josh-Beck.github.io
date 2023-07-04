import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Background from "../components/Background";
import Head from "../components/Head";
import CoolButton from "../components/CoolButton";
import Icons from "../components/Icons";
import { linkInformation } from "../content/links"
import { icons } from "../icons/icons";

let name = "Joshua Beck";

let job = "Application Security Engineer";

let email = "JoshuaThomasBeck@gmail.com";


export default function Home() {
  return (
    <div className="">
        <Head />
        

        <div className="min-h-screen w-screen hidden md:block overflow-hidden screen-background-style">
            <Background />
            <StaticImage src="../content/images/jb.jpg" className="w-[15%] rounded-3xl mx-auto mt-[8%] flex justify-center items-center z-50" alt="Profile Picture" />
            
            <div className="w-full text-7xl flex justify-center primary-text p-5 pb-0">
                {name}
            </div>

            <div className="w-full text-3xl flex justify-center paragraph-text ">
                {job}
            </div>

            {/* <div className="w-full text-2xl flex justify-center paragraph-text pt-2">
                {email}
            </div> */}

            <div className="flex justify-center -pl-7 pt-2">
                {linkInformation.filter((item) => "home" !== item.icon).map((item) => (
                            <CoolButton 
                            href={item.href}
                            icon={item.icon}
                            buttonTitle={item.title}
                            />
                        ))}
            </div>

            <div id="icons" className="z-50 left-0 absolute top-1/2 -mt-24 paragraph-color-bg bg-opacity-100 rounded-lg">
                {icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
            </div>  


        </div>

        {/* MOBILE */}
        <div className="min-h-screen w-screen md:hidden overflow-hidden screen-background-style">

        <StaticImage src="../content/images/jb.jpg" className="w-[50%] rounded-3xl mx-auto mt-[5%] flex justify-center items-center z-50" alt="Profile Picture" />
        <div className="w-full text-4xl text-center z-50 flex justify-center primary-text p-5">
                {name}
            </div>

            <div className="w-full text-2xl text-center z-50 flex justify-center paragraph-text ">
                {job}
            </div>

            <div className="w-full text-xl flex text-center z-50 justify-center paragraph-text pt-2">
                {email}
            </div>

            <div className="flex flex-wrap justify-center">
                {linkInformation.map((item) => (
                    <CoolButton 
                    href={item.href}
                    icon={item.icon}
                    buttonTitle={item.title}
                    />
                ))}
            </div>

            <div id="icons" className="z-50 flex p-5 justify-center">
                {icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
            </div>
        </div>




        </div>
)}
