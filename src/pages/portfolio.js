import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { portfolio } from "../content/data/portfolio";
import { graphql } from "gatsby"

export default function Portfolio({ data }) {

    let nodes = data.allMarkdownRemark.nodes;

    return <div>
            <SideBarLayout name="portfolio">
                {nodes.concat(portfolio).sort(sortDate).map((portfolio) => (
                        <Card 
                            cardTitle={portfolio.frontmatter ? portfolio.frontmatter.title : portfolio.title}
                            cardSubTitle={portfolio.frontmatter ? portfolio.frontmatter.subtitle : portfolio.name} 
                            cardDate={portfolio.frontmatter ? portfolio.frontmatter.date :portfolio.date}
                            cardData={portfolio.frontmatter ? portfolio.frontmatter.desc : portfolio.data} 
                            href={portfolio.frontmatter ? portfolio.frontmatter.slug :portfolio.href}
                            video={portfolio.frontmatter ? null :portfolio.video} />
                ))}
                {/* {nodes.sort(compareFn).map((node) => ( 
                        <Card 
                            cardTitle={node.frontmatter.title} 
                            href={node.frontmatter.slug}
                            cardDate={node.frontmatter.date}
                            cardData={node.frontmatter.desc}
                        />

                    ))} */}
            </SideBarLayout>     
        </div>
}

function compareFn(a,b) {
   return a.frontmatter.priority > b.frontmatter.priority;
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
            }
        }
    }
}`