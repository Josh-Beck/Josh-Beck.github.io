import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head() {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Joshua Beck</title>
            <meta name="description" content="Joshua Beck's personal portfolio and blog." />
            <meta name="keywords" content="blog, cyber security, application security, app sec" />
            <link rel="canonical" href="https://josh-beck.github.io" />
            <style>
                @import url('/RobotoMono-VariableFont_wght.ttf');
            </style>
        </Helmet>
    )
}