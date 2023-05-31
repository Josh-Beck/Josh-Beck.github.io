import * as React from "react"
import Head from "./Head"
import { BIO } from "../text/bio"
import { icons } from "../icons/icons"
import CoolButton from "./CoolButton"
import Background from "./Background"
import Icons from "./Icons"
import { linkInformation } from "../content/links"

export default function SideBarLayout(props) {
    return (<div className="bg-white flex flex-col h-screen justify-between antialiased">
            <Head />
            {/* Gradient */}
            <div className="min-h-screen w-screen overflow-x-auto hidden md:flex screen-background-style">
            <Background />
                {/* Left bar*/}
                <div className="w-1/3 absolute" > 
                    <div className="w-full text-6xl p-6 flex mt-16  primary-text">Joshua Beck</div>
                    <div className="w-full text-2xl pl-7 flex secondary-color-text"> Application Security Engineer</div>
                    <p className="w-full text-lg pl-7 pt-1 flex paragraph-text">{BIO}</p>

                    <div className="flex flex-wrap md:w-[90%] w-full">
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
                    <div className="ml-[45%]">
                        <div className="">{props.children}</div>
                    </div>
                    
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden screen-background-style">
                <div className="" > 
                    <div className="w-full text-6xl p-6 flex mt-12  primary-text">Joshua Beck</div>
                    <div className="w-full text-3xl pl-7 flex paragraph-text"> Application Security </div>
                    <p className="w-full text-lg pl-7 pt-3 mb-10 flex paragraph-text">{BIO}</p>
                </div>
                <div className="">
                    {linkInformation.map((item) => (

                        <CoolButton 
                        href={item.href}
                        icon={item.icon}
                        buttonTitle={item.title}
                        />
                    ))}
                </div>
                {props.children}
                <div id="icons" className="md:hidden flex p-5 bottom-0 justify-left">
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