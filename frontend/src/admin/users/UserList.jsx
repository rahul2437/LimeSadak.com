import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import style from "./UserList.module.css"

const UserList = () => {
    const arr=[]
    const recentOrders={
       "data" :[
        {
        id:"1",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg",
        Name:"Marlee Rena",
        Email:"marleerena@gmail.com",
        Product:"28",
        TotalSell:"	2161",
        Status:"	ACTIVE",
        Action:"",
        Join_on:"2021-10-30"
    },
    {
        id:"2",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u2.jpg",
        Name:"Johnee Bolbit",
        Email:"johneebolbi@gmail.com",
        Product:"68",
        TotalSell:"5161",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-25"
    },
    {
        id:"3",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u3.jpg",
        Name:"Johnee Bolbi",
        Email:"Johnee Bolbi",
        Product:"	68",
        TotalSell:"	5161",
        Status:"	ACTIVE",
        Action:"",
        Join_on:"2021-10-25"
    },
    {
        id:"4",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u4.jpg",
        Name:"Mohini Marlo",
        Email:"mohinimarlo@gmail.com",
        Product:"	38",
        TotalSell:"1561",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-21"
    },
    {
        id:"5",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u5.jpg",
        Name:"Nitilo Kathilo",
        Email:"nitilokathilo@gmail.com",
        Product:"18",
        TotalSell:"1061",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-18"
    },
    {
        id:"6",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u6.jpg",
        Name:"Hardi Sandhut",
        Email:"hardisandhu@gmail.com",
        Product:"82",
        TotalSell:"10061",
        Status:"	ACTIVE",
        Action:"",
        Join_on:"2021-10-14"
    },
    {
        id:"7",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u7.jpg",
        Name:"Bhavlo Malvia",
        Email:"bhavlomalvia@gmail.com",
        Product:"18",
        TotalSell:"3061",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-05"
    },
    {
        id:"8",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u8.jpg",
        Name:"Jeni Dusuja",
        Email:"jenidusuja@gmail.com",
        Product:"60",
        TotalSell:"6061",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-01"
    },
    {
        id:"9",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u2.jpg",
        Name:"Marlee Renat",
        Email:"marleerena@gmail.com",
        Product:"28",
        TotalSell:"2161",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-30"
    },
    {
        id:"10",
        Profile:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg",
        Name:"Johnee Bolbi",
        Email:"johneebolbi@gmail.com",
        Product:"68",
        TotalSell:"5161",
        Status:"ACTIVE",
        Action:"",
        Join_on:"2021-10-25"
    }
]
}
    arr.push(recentOrders)
    console.log(arr[0])
  return(
    <div class={style.section2}>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{display:"grid"}}>
        <Heading mr="300px" mt="40px" >User List</Heading>
        <a herf="/"><Heading  mr="300px" mt="40px" size={"md"} >  Home   <span> User </span> </Heading></a>
        </div>

        <div>
        <Button colorScheme='blue'  ml="300%" mt="20px">Add Product</Button>
        </div>
    </div>
         {/* <h2>Recent Orders</h2> */}

         <table className={style.userTable}>
          <thead>
            <tr>
            <td>Profile</td>
            <td>Name</td>
            <td>Email</td>
            <td>Product</td>
            <td>TotalSell</td>
            <td>Status</td>
            
            <td>Join_on</td>
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
                        <td><img style={{width:"50px"}} src={el.Profile} alt="profile"/></td>

                        <td>{el.Name}</td>
                        <td>{el.Email}</td>
                        <td>{el.Product}</td>
                        <td>{el.TotalSell}</td>
                        <td>{el.Status}</td>
                        <td>{el.Join_on}</td>
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

export default UserList