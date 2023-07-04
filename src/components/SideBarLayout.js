import * as React from "react"
import Head from "./Head"
import { BIO } from "../content/bio"
import { icons } from "../icons/icons"
import CoolButton from "./CoolButton"
import Background from "./Background"
import Icons from "./Icons"
import { linkInformation } from "../content/links"
import { StaticImage } from "gatsby-plugin-image"

export default function SideBarLayout(props) {
    return (<div className="bg-white flex flex-col h-screen justify-between antialiased">
            <Head />
            {/* Gradient */}
            <div className="min-h-screen w-screen overflow-x-auto hidden md:flex screen-background-style">
            <Background />
                {/* Left bar*/}
                <div className="w-1/3 absolute" >
                    <StaticImage src="../content/images/jb.jpg" className="w-[50%] m-7 ml-7 mt-16 rounded-3xl flex justify-center items-center z-50" alt="Profile Picture" />
                    <div className="w-full text-6xl p-6 pt-0 flex primary-text">Joshua Beck</div>
                    <div className="w-full text-xl pl-7 flex font-bold paragraph-color-text"> Application Security Engineer</div>
                    <p className="w-[90%] text-lg pl-7 pt-1 flex paragraph-text">{BIO}</p>

                    <div className="flex flex-wrap w-full">
                    {/* {linkInformation.filter((item) => props.name !== item.icon).map((item) => ( */}
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
                    <div className="ml-[45%] mr-[10%]">
                        {props.children}
                    </div>
                    
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden screen-background-style">
                <div className="" > 
                    <div className="w-full text-5xl p-6 flex mt-12 text-center justify-center primary-text">Joshua Beck</div>
                    <div className="w-full text-3xl flex justify-center paragraph-text"> Application Security </div>
                    <p className="w-full text-lg p-2 pt-3 mb-8 pr-3 text-center flex paragraph-text">{BIO}</p>
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
                {props.children}
                <div id="icons" className="md:hidden flex p-5 bottom-0 justify-center">
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