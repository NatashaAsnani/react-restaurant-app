import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
        <div className="container mt-5 d-flex justify-content-center">
            <div  className="bg-white rounded shadow-sm py-1">
                {
                    menuList.map((curElem) => {
                        return(
                            <>
                                <button className='btn fw-bold mx-3'onClick= {() => filterItem(curElem)}>
                                    {curElem}
                                </button>
                            </>
                        )
                    })
                }
                {/* <button className='btn fw-bold mx-3'onClick= {() => filterItem("Lunch")}>Lunch
                </button>
                <button className='btn fw-bold mx-3'onClick= {() => filterItem("Snacks")}>Snacks
                </button>
                <button className='btn fw-bold mx-3'onClick= {() => filterItem("Dinner")}>Dinner
                </button>
                <button className='btn fw-bold mx-3'onClick= {() => setMenuData(Menu)}>All
                </button> */}
            </div>
        </div>
    </>
  )
}

export default Navbar