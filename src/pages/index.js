import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>I am a third-year Computer Science student.</p>
    <p>And I am about to build something great...</p>
    <p>You can visit my <a href="https://alifarooqi.github.io/" target="_blank">portfolio</a> to get to know more about me.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
