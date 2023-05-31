import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { jobInformation } from "../content/jobs";

export default function Home() {
  return <div>
            <SideBarLayout name="home">
                <img src="./jb.jpg" className=" rounded-3xl w-1/2 "></img>
                <div className="paragraph-color-text">Explaination of how I am and Why I am</div>
            </SideBarLayout>     
        </div>
}
