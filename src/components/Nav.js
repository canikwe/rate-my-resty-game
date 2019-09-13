import React from 'react'

const Nav = () => {
  return(
    <div id="offcanvas-slide" data-uk-offcanvas>
      <div className="uk-offcanvas-bar">

        <ul className="uk-nav uk-nav-default">
          <li className="uk-active"><a href='www.google.com'>Active</a></li>
          <li><a href='www.google.com'>Item</a></li>
          <li className="uk-nav-header">Header</li>
          <li><a href='www.google.com'>Item</a></li>
          <li><a href='www.google.com'>Item</a></li>
          <li className="uk-nav-divider"></li>
          <li><a href='www.google.com'>Item</a></li>
        </ul>

      </div>
    </div>
  )
}

export default Nav