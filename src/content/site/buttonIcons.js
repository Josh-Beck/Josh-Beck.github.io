import * as React from "react"
import { 
    CgProfile, CgNotes,
    CgBriefcase, CgPlayButtonO,
    CgArrowRight, CgPhone
 } from "react-icons/cg"

let iconSize = 20;

export function iconSelector(str) {
    switch(str) {
        case "blog": return <CgNotes size={iconSize} />;
        case "video": return <CgPlayButtonO size={iconSize} />;
        case "career": return <CgBriefcase size={iconSize} />;
        case "bio": return <CgProfile size={iconSize} />;
        case "contact": return <CgPhone size={iconSize} />;

        // Arrow displayed on hover for all buttons
        case "arrow": return <CgArrowRight size={iconSize} />;
    }
}