import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="container">
    <div className="row">
    <div className="col-lg-4">
    <Link to="/medium-graphite/">
      <div className="card-circles circles-dimension">
          Graphite</div>
    </Link>
    </div>

    <div className="col-lg-4">
    <Link to="/medium-gel/">
      <div className="circles-dimension">
          Gel</div>
    </Link>
    </div>

    <div className="col-lg-4">
    <Link to="/medium-charcoal/">
       <div className="circles-dimension">
    Charcoal
    </div>
    </Link>
    </div>

    <Link to="/medium-watercolor/">WaterColor</Link>
  </div>
  </div>
)

export default IndexPage
