import * as React from "react"
import ContactContent  from "../content/data/ContactContent";
import { CONTACT_TITLE } from "../content/data/ContactContent"
import SideBarLayout from "../components/SideBarLayout";
import RegularTextBar from "../components/RegularTextBar";

export default function Contact() {
  return <div>
        <SideBarLayout name="contact">
            <RegularTextBar 
                name="contact"
                title={CONTACT_TITLE}
                subTitle=""
                content={<ContactContent />}
            />
        </SideBarLayout>
        </div>
}
