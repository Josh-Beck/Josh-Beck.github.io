import * as React from "react"

export default function RegularTextBar(props) {
  return <div>
            <div className="items-center hidden lg:block mt-24">
                <h1 className="items-center ">{props.title}</h1>
                <h2 className="items-center text-center pb-10 pt-3 ">{props.subTitle}</h2>
                <div className="paragraph-text">{props.content}</div>
            </div>
            <div className="mt-20 lg:hidden">
                <h1 className="items-center px-1">{props.title}</h1>
                <h2 className="items-center text-center pb-10 pt-3 px-3">{props.subTitle}</h2>
                <div className="text-center paragraph-color-text px-3">{props.content}</div>
            </div>
        </div>
}
