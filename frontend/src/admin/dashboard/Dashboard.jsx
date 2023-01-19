import React from 'react'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import style from './Dashboard.module.css'

const stats=[
  {
    stat:"1,503",
    title:"Daily Signups",
  },
  {
    stat:"79,503",
    title:"Daily Visitors",
  },
  {
    stat:"15,503",
    title:"Daily Order",
  },
  {
    stat:"$98,503",
    title:"Daily Order",
  },
]

const recentOrders=[
  {
    id:24541,
    Pname:"Coach Swagger",
    units: 1,
    date:"Oct 20, 2018",
    cost:	230,
    status:"COMPLETED"
  },
  {
    id:24541,
    Pname:"Coach Swagger",
    units: 1,
    date:"Oct 20, 2018",
    cost:	230,
    status:"COMPLETED"
  },
  {
    id:24541,
    Pname:"Coach Swagger",
    units: 1,
    date:"Oct 20, 2018",
    cost:	230,
    status:"COMPLETED"
  },
  {
    id:24541,
    Pname:"Coach Swagger",
    units: 1,
    date:"Oct 20, 2018",
    cost:	230,
    status:"COMPLETED"
  }
]

const newCust=[
  {
    name:"Selena Wagner",
    username:"selena.io",
    img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
    order:2,
    total:"$150"
  },
  {
    name:"Selena Wagner",
    username:"selena.io",
    img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
    order:2,
    total:"$150"
  },
  {
    name:"Selena Wagner",
    username:"selena.io",
    img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
    order:2,
    total:"$150"
  },
  {
    name:"Selena Wagner",
    username:"selena.io",
    img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
    order:2,
    total:"$150"
  },
  {
    name:"Selena Wagner",
    username:"selena.io",
    img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
    order:2,
    total:"$150"
  }
]

const topProd=[
  {
    img:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
    name:"Baby cotton shoes",
    desc:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
    price:"$520"
  },
  {
    img:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p2.jpg",
    name:"Baby cotton shoes",
    desc:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
    price:"$520"
  },
  {
    img:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p3.jpg",
    name:"Baby cotton shoes",
    desc:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
    price:"$520"
  },
]

const Dashboard = () => {
  return (
    <>
    <AdminNavbar/>
    <div className={style.dashboard}>
      
      <div className={style.left}>
        <AdminSidebar/>
      </div>
      <div className={style.right}>

{/* Section-1 Statistics */}

        <div className={style.section1}>
         {
            stats.map((item)=>{
              return(
                <div className={style.stats}>
                  <h2>{item.stat}</h2>
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </div>

{/* Section-2 Recent Orders */}

        <div className={style.section2}>
         <h2>Recent Orders</h2>
         <table>
          <thead>
            <tr>
              <td>Order ID</td>
              <td>Product Name</td>
              <td>Units</td>
              <td>Order Date</td>
              <td>Order Cost</td>
              <td>Status</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              recentOrders.map((item)=>{
                return(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.Pname}</td>
                    <td>{item.units}</td>
                    <td>{item.date}</td>
                    <td>{item.cost}</td>
                    <td>click</td>
                  </tr>
                )
              })
            }
          </tbody>
         </table>
        </div>

        {/* Section-3 New Customers */}

        <div className={style.section3}>
          <div className={style.left}>
            <h2>New Customer</h2>
            {
                newCust.map((item)=>{
                  return(
                    <div className={style.cust}>
                      <img src={item.img} />
                      <div>{item.name}{item.username}</div>
                      <div>{item.order}</div>
                      <div>{item.total}</div>
                    </div>
                  )
                })
              }
          </div>

          <div className={style.right}>

          </div>
          
        </div>
          
      </div>

    </div>
    </>
  )
}

export default Dashboard
