import React from 'react'

const Navbar = ({filterItem, menuList, activeCategory}) => {
  return (
    <>
        <div className="container mt-5 d-flex justify-content-center">
            <div  className="bg-white rounded shadow-sm py-1">
                {
                    menuList.map((curElem) => {
                        return(
                            <>
                                <button className= {activeCategory === curElem ? 'btn fw-bold mx-3 activebtn' : 'btn fw-bold mx-3'} onClick= {() => filterItem(curElem)} >
                                    {curElem}
                                </button>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Navbar