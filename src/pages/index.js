import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <video autoPlay playsInline muted>
      <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4'/>
      <source src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm'/>
        Your browser does not support the video tag.
    </video>
  </Layout>
)

export default IndexPage
