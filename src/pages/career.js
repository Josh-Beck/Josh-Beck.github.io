import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { jobInformation } from "../content/data/jobs";

export default function Home() {
  return <div>
            <SideBarLayout name="career">
                {jobInformation.map((job) => (
                        <Card 
                            cardTitle={job.title}
                            cardSubTitle={job.name} 
                            cardDate={job.date}
                            cardData={job.data}
                            href={job.href} />
                ))}
            </SideBarLayout>     
        </div>
}
