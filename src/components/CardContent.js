import * as React from "react"

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
            </div>
    )
}