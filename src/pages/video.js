import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { videoInformation } from "../content/data/videos";

export default function Video() {
  return <div>
            <SideBarLayout name="video">
                {videoInformation.map((video) => (
                        <Card 
                            cardTitle={video.title}
                            cardSubTitle={video.name} 
                            cardDate={video.date}
                            cardData={video.data} 
                            href={video.href}
                            video={video.video} />
                ))}
            </SideBarLayout>     
        </div>
}