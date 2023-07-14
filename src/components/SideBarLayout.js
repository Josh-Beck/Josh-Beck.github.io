import * as React from "react"
import Head from "./Head"
import { DESC, JOB_TITLE, NAME } from "../content/data/titleDetails"
import { icons } from "../content/site/socialIcons"
import CoolButton from "./CoolButton"
import Icons from "./Icons"
import { linkInformation } from "../content/site/links"
import headshotPhoto from "../content/images/headShot.jpg" 

export default function SideBarLayout(props) {
    return (<div className="bg-white flex flex-col h-screen justify-between antialiased">
            <Head />
            <div className="min-h-screen w-screen overflow-x-auto hidden lg:flex paragraph-color-bg">
                {/* Left bar*/}
                <div className="w-1/3 absolute" >
                    <img src={headshotPhoto} className="w-[50%] m-7 ml-7 mt-16 rounded-3xl flex justify-center items-center z-50" alt="Profile Picture" />
                    <div className="w-full text-6xl p-6 pt-0 flex primary-text overflow-visible whitespace-nowrap">{NAME}</div>
                    <div className="w-full text-xl pl-7 flex font-bold paragraph-color-text">{JOB_TITLE}</div>
                    <p className="w-[90%] text-lg pl-7 pt-1 paragraph-text md:flex lg:hidden xl:flex">{DESC}</p>

                    <div className="flex flex-wrap w-full">
                    {linkInformation.map((item) => (
                        <CoolButton 
                        href={item.href}
                        icon={item.icon}
                        buttonTitle={item.title}
                        />
                    ))}
                    </div>
                    <div id="icons" className="w-2/5 z-50 flex p-5 bottom-0 fixed justify-left">
                        {icons.map((item) => (
                            <Icons 
                                name={item.name} 
                                href={item.href} 
                            />
                        ))}
                    </div>
                </div>
                {/* Scroll content */}
                <div className="w-full z-10 min-w-0 overflow-auto ...">
                    <div className="ml-[43%] mr-[8%]">
                        {props.children}
                    </div>
                    
                </div>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden screen-background-style">
                <div className="w-full text-5xl p-6 flex mt-12 text-center justify-center primary-text">{NAME}</div>
                <div className="w-full text-3xl flex justify-center text-center paragraph-color-text font-bold"> {JOB_TITLE} </div>
                <p className="w-full text-lg p-2 pt-3 mb-8 pr-3 flex justify-center text-center paragraph-color-text">{DESC}</p>
                
                {/* Button Links */}
                <div className="flex flex-wrap justify-center">
                    {linkInformation.map((item) => (
                        <CoolButton 
                        href={item.href}
                        icon={item.icon}
                        buttonTitle={item.title}
                        />
                    ))}
                </div>
                <div className="px-4">
                    {props.children}
                </div>
                <div id="icons" className="lg:hidden flex p-5 bottom-0 justify-center">
                        {icons.map((item) => (
                            <Icons 
                                name={item.name} 
                                href={item.href} 
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}