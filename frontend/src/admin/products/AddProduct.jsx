import React from 'react'
import style from './AddProduct.module.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'

const AddProduct = () => {
  return (
    <>
    <AdminNavbar/>
    <div className={style.addProduct}>
        <div className={style.left}>
            <AdminSidebar/>
        </div>
        <div className={style.right}>
            <div className={style.section1}>
                <h1>Add Product</h1>
                <button>View All</button>
            </div>
            <div className={style.section2}>
                <h2>Add Product</h2>
                <form>
                    <div className={style.row1}>
                        <input type="text" placeholder='Product Name' />
                        <select name="categories" id="categories">
                            <option value="shirt">Shirt</option>
                            <option value="top">Top</option>
                        </select>
                        <input type="text" placeholder='Brand' />
                        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                        <select name="color" id="color">
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                        </select>
                        <select name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="text" placeholder='Tags' />
                        <label>Size</label>
                        <input type="checkbox" name="XS" id="extra-small" />
                        <input type="checkbox" name="S" id="small" />
                        <input type="checkbox" name="M" id="medium" />
                        <input type="checkbox" name="L" id="large" />
                        <input type="checkbox" name="XL" id="extra-large" />
                        <input type="checkbox" name="XXL" id="supper-large" />
                        <input type="number" placeholder='Stock' />
                        <input type="number" placeholder='Price' />
                    </div>
                </form>
            </div>

        </div>
      

    </div>
    </>
  )
}

export default AddProduct
