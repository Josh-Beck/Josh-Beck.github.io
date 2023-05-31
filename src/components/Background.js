import * as React from "react"
import { CodeBracketIcon, ChevronDoubleRightIcon, PowerIcon } from '@heroicons/react/24/outline'

export default function Background() {
    return (
        <div>
            <div className="absolute top-1/3 right-[10%] blur z-10 ">
                <ChevronDoubleRightIcon className="h-32 w-32 z-50 tertiary-color-text" aria-hidden="true" />
            </div>
            <div className="absolute top-[10%] left-[30%]  blur z-10">
                <CodeBracketIcon className="h-32 w-32 z-50 tertiary-color-text" aria-hidden="true" />
            </div>
            <div className="absolute top-2/3 left-[15%] blur z-10">
                <PowerIcon className="h-32 w-32 z-50 tertiary-color-text" aria-hidden="true" />
            </div>
        </div>
    )
}