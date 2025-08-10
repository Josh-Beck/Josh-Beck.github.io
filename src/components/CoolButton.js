import * as React from "react"
import CoolButtonAnimation from "./CoolButtonAnimation"

export default function CoolButton(props) {
    return (

        <>
        {/*DESKTOP*/}
        <div className="hidden lg:block overflow-hidden">
            <div className="pl-7 pt-3 text-md xl:text-lg 2xl-text-xl">
                <CoolButtonAnimation 
                href={props.href}
                icon={props.icon}
                buttonTitle={props.buttonTitle}
                />
            </div>
        </div>

        {/*MOBILE*/}
        <div className="lg:hidden overflow-hidden">
            <div className="pt-3 text-md xl:text-lg 2xl-text-xl">
                <CoolButtonAnimation 
                href={props.href}
                icon={props.icon}
                buttonTitle={props.buttonTitle}
                />
            </div>
        </div>
        </>
    )
}
