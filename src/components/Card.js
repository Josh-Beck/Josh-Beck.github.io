import * as React from "react"
import { Link } from "gatsby"
import CardContent from "./CardContent"


let topLevelVars = "group items-center max-w-2xl m-6 mt-16 p-6 dynamic-card"

export default function Card(props) {
    return (
        <a href={props.href}>
            <div className={topLevelVars}>

                <div className={props.video ? "pl-1" : ""}>
                    <CardContent 
                        cardTitle={props.cardTitle}
                        cardSubTitle={props.cardSubTitle} 
                        cardDate={props.cardDate}
                        cardData={props.cardData} 
                        skill={props.skill}
                        href={props.href}
                        video={props.video}
                    />                    

                </div>

                <div className={props.video ? "" : ""}>
                    <div 
                        dangerouslySetInnerHTML={{ __html: props.video}}
                    />
                </div>
            </div>
        </a>
    )
}