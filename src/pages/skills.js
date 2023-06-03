import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { skillInformation } from "../content/skills";

export default function Skills() {
  return <div>
            <SideBarLayout name="skill">
                {skillInformation.map((skill) => (
                        <Card 
                            cardTitle={skill.title}
                            cardSubTitle={skill.name}
                            cardDate={skill.date} 
                            cardData={skill.data} 
                            skill={skill.skill}
                            href={skill.href} />
                ))}
            </SideBarLayout>     
        </div>
}