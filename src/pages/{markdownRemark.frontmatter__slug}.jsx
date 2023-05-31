import * as React from "react"
import { graphql } from "gatsby"
import SideBarLayout from "../components/SideBarLayout"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <div>
        <SideBarLayout name="">
            <div className="items-center hidden md:block mt-24">
                <h1 className="items-center mr-40">{frontmatter.title}</h1>
                <h2 className="items-center text-center pb-10 pt-3 mr-40">{frontmatter.date}</h2>
                <div className="mr-24"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <div className="m-10 mt-20 md:hidden">
                <h1 className="items-center">{frontmatter.title}</h1>
                <h2 className="items-center text-center pb-10 pt-3">{frontmatter.date}</h2>
                <div className=""
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </SideBarLayout>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`