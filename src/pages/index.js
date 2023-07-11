import * as React from "react"
import ProfileContent from "../content/data/ProfileContent";
import { PROFILE_TITLE } from "../content/data/ProfileContent";
import SideBarLayout from "../components/SideBarLayout";
import RegularTextBar from "../components/RegularTextBar";

export default function Profile() {
  return <div>
        <SideBarLayout name="profile">
            <RegularTextBar 
                name="profile"
                title={PROFILE_TITLE}
                subTitle=""
                content={<ProfileContent />}
            />
        </SideBarLayout>
        </div>
}
