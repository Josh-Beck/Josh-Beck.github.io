import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { jobInformation } from "../content/jobs";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (<div className="">
            <SideBarLayout name="home">
                    <div className=" flex justify-center mt-20">
                    {/* <img src="./jb.jpg" className="rounded-3xl scale-[10%] object-scale-down"></img> */}
                        <StaticImage src="../content/images/jb.jpg" className=" w-[60%]" alt="Profile Picture" />
                    </div>
                    <div className=" flex justify-center mt-2">
                        <div className="paragraph-color-text">JoshuaThomasBeck@gmail.com</div>
                    </div>
            </SideBarLayout>     
        </div>
)}
