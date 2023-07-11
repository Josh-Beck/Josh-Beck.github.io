import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiHackthebox } from "react-icons/si"
import { PiYoutubeLogoFill } from "react-icons/pi"

export const icons = [
    { 
        name: <FaLinkedin size={30} />,
        href: 'https://www.linkedin.com/in/joshuatbeck/'
    },
    { 
        name: <FaGithub size={30} />,
        href: 'https://github.com/Josh-Beck'
    },
    {
        name: <SiHackthebox size={30} />,
        href: 'https://app.hackthebox.com/profile/147141'
    },
    {
        name: <PiYoutubeLogoFill size={30} />,
        href: 'https://www.youtube.com/channel/UC8X3SEfZYbLWKeO077g11cQ'
    }
]