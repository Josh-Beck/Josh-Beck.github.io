import React from 'react'
import { SITE_URL } from "../content/site/siteMetadata"

export default function NotFoundPage() {
    return (<meta http-equiv="Refresh" content={"0; url=" + SITE_URL} />);
}
