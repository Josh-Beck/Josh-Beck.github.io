import * as React from "react"
import Head from "../components/Head";
import CoolButton from "../components/CoolButton";
import Icons from "../components/Icons";
import { linkInformation } from "../content/site/links"
import { icons } from "../content/site/socialIcons";
import { NAME, JOB_TITLE } from "../content/data/titleDetails";
import headShot from "../content/images/headShot.jpg"

export default function Home() {
  return (
    <div className="">
        <Head />
        <div className="min-h-screen w-screen hidden lg:block overflow-hidden screen-background-style main-color-bg">
            <img src={headShot} className="w-[20%] rounded-3xl mx-auto mt-[8%] z-50 flex justify-center items-center"></img>

            <div className="w-full text-7xl flex justify-center primary-text p-5 pb-0">
                {NAME}
            </div>

            <div className="w-full text-3xl flex justify-center paragraph-text ">
                {JOB_TITLE}
            </div>

            <div className="flex justify-center -pl-7 pt-2">
                {linkInformation.filter((item) => "home" !== item.icon).map((item) => (
                            <CoolButton 
                            href={item.href}
                            icon={item.icon}
                            buttonTitle={item.title}
                            />
                        ))}
            </div>

            <div id="icons" className="z-50 left-0 absolute top-1/2 -mt-24 bg-opacity-0 rounded-lg">
                {icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
            </div>  


        </div>

        {/* MOBILE */}
        <div className="min-h-screen w-screen lg:hidden overflow-hidden screen-background-style main-color-bg">

        <img src={headShot} className="w-[50%] rounded-3xl mx-auto mt-[20%] z-50 flex justify-center items-center"></img>
        <div className="w-full text-4xl text-center z-50 flex justify-center primary-text p-5">
            {NAME}
        </div>

        <div className="w-full text-2xl text-center z-50 flex justify-center paragraph-text ">
            {JOB_TITLE}
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

        <div id="icons" className="z-50 flex p-5 justify-center bg-opacity-0">
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