import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import style from "./ProductList.module.css"

const ProductList = () => {
    const arr=[]
    const recentOrders={
       "data" :[
        {
        id:"1",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"2",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"3",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"4",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"5",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"6",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"7",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"8",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"9",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    },
    {
        id:"10",
        Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
        Name:"Baby shoes",
        Price:"$20",
        Offer:"25% OFF",
        Purchased:"	61",
        Stock:"	5421E",
        Status:"ACTIVE",
        Date:"2021-10-30",
        Action:""
    }
]
}
    arr.push(recentOrders)
    console.log(arr[0])
  return (
    <div class={style.section2}>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{display:"grid"}}>
        <Heading mr="300px" mt="40px" >Product List</Heading>
        <a herf=""><Heading  mr="300px" mt="40px" size={"md"} >  Home   <span> Product </span> </Heading></a>
        </div>

        <div>
        <Button colorScheme='blue' ml="300%" mt="20px">Add Product</Button>
        </div>
    </div>
         {/* <h2>Recent Orders</h2> */}

         <table className={style.prodTable}>
          <thead>
            <tr>
            <td>Product</td>
            <td>Name</td>
            <td>Price</td>
            <td>Offer</td>
            <td>Purchased</td>
            <td>Stock</td>
            <td>Status</td>
            
            <td>Date</td>
            <td>Action</td>
            {/* <td>S</td>
              <td></td> */}
            </tr>
          </thead>
          <tbody>
            {
                arr[0].data && arr[0].data.map((el)=>{
                    return(
                        <tr key={el.id} >
                        <td><img style={{width:"50px"}} src={el.Product} alt="PIC"/></td>

                        
                        <td>{el.Name}</td>
                        <td>{el.Price}</td>
                        <td>{el.Offer}</td>
                        <td>{el.Purchased}</td>
                        <td>{el.Stock}</td>
                        <td>{el.Status}</td>
                        <td>{el.Date}</td>
                        <td> <Button colorScheme='blue' borderRadius='20px' h='25px'>info</Button></td>

                        </tr>

                    )
                })                
            }
                
                               
            
          </tbody>
         </table>
        </div>
  )
}

export default ProductList