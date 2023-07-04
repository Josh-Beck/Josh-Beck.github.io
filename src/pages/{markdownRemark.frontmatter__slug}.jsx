import * as React from "react"
import { graphql } from "gatsby"
import SideBarLayout from "../components/SideBarLayout"
import RegularTextBar from "../components/RegularTextBar"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <div>
        <SideBarLayout name="">
            <RegularTextBar 
                name=""
                title={frontmatter.title}
                subTitle={frontmatter.date}
                content={
                    <div className=""
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                }
            />
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