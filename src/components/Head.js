import * as React from "react"
import { Helmet } from "react-helmet"
import { 
    SITE_TITLE, SITE_DESC, 
    SITE_KEYWORDS, SITE_URL } from "../content/site/siteMetadata"

export default function Head() {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{SITE_TITLE}</title>
            <meta name="description" content={SITE_DESC} />
            <meta name="keywords" content={SITE_KEYWORDS} />
            <link rel="canonical" href={SITE_URL} />
        </Helmet>
    )
}