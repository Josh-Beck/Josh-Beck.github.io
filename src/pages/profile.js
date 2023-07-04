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
            {/* <SideBarLayout name="profile">
            <div className="items-center hidden md:block mt-24">
                <h1 className="items-center mr-40">{title}</h1>
                <h2 className="items-center text-center pb-10 pt-3 mr-40">{subTitle}</h2>
                <div className="mr-24 paragraph-text"><Profile /></div>
            </div>
            <div className="m-10 mt-20 md:hidden">
                <h1 className="items-center">{title}</h1>
                <h2 className="items-center text-center pb-10 pt-3">{subTitle}</h2>
                <div className="paragraph-color-text"><Profile /></div>
            </div>
            </SideBarLayout>      */}
        </div>
}
