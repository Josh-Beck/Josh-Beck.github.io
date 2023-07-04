import * as React from "react"
import ProfileContent from "../content/ProfileContent";
import SideBarLayout from "../components/SideBarLayout";
import RegularTextBar from "../components/RegularTextBar";

let title = "Who is Joshua Beck?";

let subTitle = ""

export default function Profile() {
  return <div>
        <SideBarLayout name="profile">
            <RegularTextBar 
                name="profile"
                title={title}
                subTitle={subTitle}
                content={<ProfileContent />}
            />
        </SideBarLayout>
        </div>
}
