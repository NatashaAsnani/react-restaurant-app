import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuAPI";
import MenuCard from './menuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((curElem)=>{
        return curElem.category;
    })
),
"All",
];

console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState (Menu);
    const menuList = uniqueList;
    // console.log(Menu);

    const filterItem = (category) => {

        if(category === "All") {
            setMenuData (Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }
  return (
    <>
          {/* menuData is an attribute same as in img tag there are certain attributes, so here this is also an attribute of MenuCard and you can name it anything  */}


        {/*SENDING PROPS*/}
        <Navbar filterItem = {filterItem} menuList={menuList}/>
        <MenuCard menuData= {menuData} />          
    </>
  )
}

export default Restaurant