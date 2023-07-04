import * as React from "react"
import { Link } from "gatsby"

export default function CardContent(props) {
    return (<div>
                    <div id={props.cardTitle} className="text-2xl primary-text">
                        {props.cardTitle}
                    </div>

                    <div className="text-2xl font-bold pt-1 paragraph-color-text">
                        {props.cardSubTitle}
                    </div>

                    <div className="text-lg font-bold pt-1 paragraph-color-text">
                        {props.cardDate}
                    </div>

                    <div className="text-xl pt-3 paragraph-text">
                        {props.cardData}
                    </div>
                    
                    
                    <div class="px-6 pt-4">
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
    )
}