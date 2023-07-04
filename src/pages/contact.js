import * as React from "react"
import ContactContent from "../content/ContactContent";
import SideBarLayout from "../components/SideBarLayout";
import RegularTextBar from "../components/RegularTextBar";

let title = "Contact Information";

let subTitle = ""

export default function Contact() {
  return <div>
        <SideBarLayout name="contact">
            <RegularTextBar 
                name="contact"
                title={title}
                subTitle={subTitle}
                content={<ContactContent />}
            />
        </SideBarLayout>
        </div>
}
