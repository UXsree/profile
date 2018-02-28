import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#262220',
      marginBottom: '1.45rem',
    }}
  >
    <div className="container"
      style={{
        padding: '1.45rem 0rem',
      }}
    >
      <h1 style={{ margin: 0, color: '#bfb8aa' }}>
        <Link
          to="/"
          style={{
            color: '#BFB8AA',
            textDecoration: 'none',
          }}
        >
          Portrait Studio
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
