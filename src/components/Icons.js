import * as React from "react"

export default function Icons(props) {
    return (
        <div className="z-50">
            <a
            key={props.name}
            href={props.href}
            className="z-50 m-1 block px-3 py-2 paragraph-text hover:primary-text dynamic-hover"
            >
            {props.name}
            </a>
        </div>
    )
}