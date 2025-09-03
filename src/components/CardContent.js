import * as React from "react"

export default function CardContent(props) {
    return (<div>
                <div className="hidden lg:block">
                    
                    <div class="flex justify-between items-center">
                        <div className="text-left">
                            <div id={props.cardTitle} className="text-2xl primary-text">
                                {props.cardTitle}
                            </div>
                            <div className="text-lg font-bold pt-1 secondary-color-text">
                                {props.cardSubTitle}
                            </div>
                        </div>
                        <div className="text-base font-bold pt-1 tertiary-color-text text-right">
                            {props.cardDate}
                        </div>
                    </div>
                    <div className="text-lg pt-3 paragraph-text">
                        {props.cardData}
                    </div>    
                </div> 
                {/* MOBILE */}
                <div className="lg:hidden">
                    <div id={props.cardTitle} className="text-lg primary-text">
                        {props.cardTitle}
                    </div>
                    <div className="text-base font-bold pt-1 secondary-color-text">
                        {props.cardSubTitle}
                    </div>
                    <div className="text-sm font-bold pt-1 paragraph-color-text">
                        {props.cardDate}
                    </div>
                    <div className="text-sm pt-3 paragraph-text">
                        {props.cardData}
                    </div>    
                </div> 
            </div>
    )
}