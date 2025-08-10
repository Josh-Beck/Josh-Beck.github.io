import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
//import { jobInformation } from "../content/data/jobs";
import { graphql } from "gatsby"


export default function Home({ data }) {
        let nodes = data.allMarkdownRemark.nodes;

    return <div>
            <SideBarLayout name="career">
                {nodes.sort(compareFn).filter(filterOnJobTag).map((job) => (
                        <Card 
                            cardTitle={job.frontmatter.title}
                            cardSubTitle={job.frontmatter.subtitle} 
                            cardDate={job.frontmatter.date}
                            cardData={job.frontmatter.desc} 
                            href={job.frontmatter.slug}
                            video={job.frontmatter.video ? job.frontmatter.video : null} />
                ))}
            </SideBarLayout>     
        </div>
}



function filterOnJobTag(a) {
    return a.frontmatter.tag === "job";
}

function compareFn(a,b) {
   return b.frontmatter.priority - a.frontmatter.priority;
}

function sortDate(a,b) {
    let dateA = a.frontmatter ? a.frontmatter.date : a.date;
    let dateB = b.frontmatter ? b.frontmatter.date : b.date;

    return monthYearToDate(dateB) - monthYearToDate(dateA)
}

function monthYearToDate(monthYearString) {
    const parts = monthYearString.split(" ");
    const monthName = parts[0];
    const year = parseInt(parts[1], 10);
    const dateString = `1 ${monthName} ${year}`;
    const dateObject = new Date(dateString);
    return dateObject;
  }

export const pageQuery = graphql`
query {
    allMarkdownRemark {
        nodes {
                frontmatter {
                    slug
                    title
                    subtitle
                    date
                    desc
                    priority
                    tag
            }
        }
    }
}`