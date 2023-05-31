import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { skillInformation } from "../content/skills";

export default function Home() {
  return <div>
            <SideBarLayout name="skill">
                {skillInformation.map((job) => (
                        <Card 
                            cardTitle={job.title}
                            cardSubTitle={job.name} 
                            cardData={job.data} 
                            skill={job.skill}
                            href={job.href} />
                ))}
            </SideBarLayout>     
        </div>
}