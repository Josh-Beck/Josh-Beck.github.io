import * as React from "react"
import SideBarLayout from "../components/SideBarLayout"
import { graphql } from "gatsby"
import Card from "../components/Card";

export default function Blog({ data }) {

    let nodes = data.allMarkdownRemark.nodes;
    console.log(nodes)

    return (<div>
                <SideBarLayout name="blog">
                    {nodes.sort(compareFn).map((node) => ( 
                        <Card 
                            cardTitle={node.frontmatter.title} 
                            href={node.frontmatter.slug}
                            cardDate={node.frontmatter.date}
                            // cardSubTitle={node.frontmatter.date}
                            cardData={node.frontmatter.desc}
                        />

                    ))}   
                </SideBarLayout>
        </div>
)}

function compareFn(a,b) {
   return a.frontmatter.priority > b.frontmatter.priority;
}



export const pageQuery = graphql`
query {
    allMarkdownRemark {
        nodes {
                frontmatter {
                    slug
                    title
                    date
                    desc
                    priority
            }
        }
    }
}`
