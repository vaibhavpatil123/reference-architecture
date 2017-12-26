import React from 'react'

const NotFound = () => (
  <div className="container">

    <h1 className="mt-4 mb-3">404
      <small>Page Not Found</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">404</li>
    </ol>

    <div className="jumbotron">
      <h1 className="display-1">404</h1>
      <p>The page youre looking for could not be found. Here are some helpful links to get you back on track:</p>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          Portfolio
          <ul>
            <li>
              <a href="portfolio-1-col.html">1 Column Portfolio</a>
            </li>
            <li>
              <a href="portfolio-2-col.html">2 Column Portfolio</a>
            </li>
            <li>
              <a href="portfolio-3-col.html">3 Column Portfolio</a>
            </li>
            <li>
              <a href="portfolio-4-col.html">4 Column Portfolio</a>
            </li>
          </ul>
        </li>
        <li>
          Blog
          <ul>
            <li>
              <a href="blog-home-1.html">Blog Home 1</a>
            </li>
            <li>
              <a href="blog-home-2.html">Blog Home 2</a>
            </li>
            <li>
              <a href="blog-post.html">Blog Post</a>
            </li>
          </ul>
        </li>
        <li>
          Other Pages
          <ul>
            <li>
              <a href="full-width-page.html">Full Width Page</a>
            </li>
            <li>
              <a href="sidebar.html">Sidebar Page</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="404.html">404 Page</a>
            </li>
            <li>
              <a href="pricing-table.html">Pricing Table</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
)

export default NotFound
