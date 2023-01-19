import React from 'react'
import style from './AdminSidebar.module.css'
import {Link} from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className={style.sidebar}>
      <div>
        <Link to="/dashboard"><p>DASHBOARD</p></Link>
      </div>
      <div>
        <p>VENDORS</p>
        <ul>
          <li><Link to="/vendor-list">Vendor List</Link></li>
        </ul>
        <p>USERS</p>
        <ul>
          <li> <Link to="/USER-list">User List</Link></li>
        </ul>
      </div>
      <div>
        <p>CATEGORIES</p>
        <ul>
          <li><Link to="/main-categories">Main Categories</Link></li>
          <li><Link to="/sub-categories">Sub Categories</Link></li>
        </ul>
        <p>PRODUCTS</p>
        <ul>
          <li><Link to="/add-product">Add Product</Link></li>
          <li> <Link to="/list-product">List Product</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar;
