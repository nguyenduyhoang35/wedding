
"use client";
import AnchorLink from "react-anchor-link-smooth-scroll"

const NavBar = () => {

  return <nav className="oliven-main-menu">
  <ul>
    <li>
      <AnchorLink offset={() => 100} href="#home">Home</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#couple">Couple</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#story">Our Story</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#friends">Friends</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#organization">Organization</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#gallery">Gallery</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#whenwhere">When & Where</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#rsvp">R.S.V.P</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="#gift">Gift Registry</AnchorLink>
    </li>
    <li>
    <AnchorLink offset={() => 100} href="blog.html">Blog</AnchorLink>
    </li>
  </ul>
</nav>
}

export default NavBar