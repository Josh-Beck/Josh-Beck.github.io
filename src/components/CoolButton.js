import * as React from "react"
import { ArrowRightIcon, CodeBracketIcon, 
        BookOpenIcon, VideoCameraIcon, 
        UserCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CoolButton(props) {

    return (
        <div className="pl-7 pt-3 text-lg">
            <a href={props.href} className="z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group">
            <span className="absolute bottom-0 left-0 w-0 h-full transition-all duration-150 ease-in-out primary-color-bg group-hover:w-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                {iconSelector(props.icon)}
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 tertiary-color-text group-hover:translate-x-0 ease-out duration-200">
                <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:tertiary-color-text">{props.buttonTitle}</span>
            </a>
        </div>
    )
}

function iconSelector(str) {
    if (str === "blog") {
        return <BookOpenIcon className="h-6 w-6" aria-hidden="true" />;
    } else if (str === "skill") {
        return <CodeBracketIcon className="h-6 w-6" aria-hidden="true" />;
    } else if (str === "video") {
        return <VideoCameraIcon className="h-6 w-6" aria-hidden="true" />;
    } else if (str === "home") {
        return <UserCircleIcon className="h-6 w-6" aria-hidden="true" />;
    } else if (str === "career") {
        return <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />;
    }
}
