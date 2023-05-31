import * as React from "react"
import { Link } from "gatsby"

export default function Card(props) {
    return (
        <a href={props.href}>
            <div className="group items-center max-w-xl m-6 mt-20 p-6 dynamic-card">
                
                <div id={props.cardTitle} className="text-xl primary-text">
                    {props.cardTitle}
                </div>

                <div className="text-md pt-1 secondary-color-text">
                    {props.cardSubTitle}
                </div>

                <div className="text-sm pt-3 paragraph-text">
                    {props.cardData}
                </div>
                
                
                <div class="px-6 pt-4 pb-2">
                    { props.skill &&
                        props.skill.map((item) => (
                            <Link href={"/skills#"+item}>
                                <span class="inline-block rounded-full px-3 py-1 dynamic-button font-bold text-sm mr-2 mb-2">
                                {item}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </a>
    )
}