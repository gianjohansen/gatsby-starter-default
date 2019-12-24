import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts";
export default ({ data }) => {
    console.log(data);
  return (
    <Layout>
      <div>
          devices
      </div>
    </Layout>
  )
}