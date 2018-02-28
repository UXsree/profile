import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#bfb8aa'
    }}
  >
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Footer
        </Link>
      </h1>
    </div>
  </div>
)

export default Footer
