import React from 'react'
import { Link } from 'react-router-dom'

const BlogNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
  <Link class="navbar-brand text-white" to="#">Blog App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to="/">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/buildresume">create Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/viewresume">View Blog</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default BlogNav