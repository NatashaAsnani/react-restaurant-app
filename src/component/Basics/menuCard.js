import React from 'react';


const menuCard = ( {menuData} ) => {                    {/*RECEIVING/ACCEPTING PROPS*/}
    console.log( menuData );
    return (
        <>
            <section className='container'>
                <div className="row">
                    {
                        menuData.map((curElem) => {
                            const {id, name, category, image, description, price} = curElem;
                            return (
                                <>
                                    <div className="col-12 col-md-4 card-container my-4" key={id}> 
                                        <div className="card">
                                            <div className="card-body">
                                                <span className='card-number card-circle subtle'>{id}</span>
                                                <span className='card-category'>{category}</span>
                                                <div className='d-flex justify-content-between'>
                                                    <h2 className='card-title'>{name}</h2>
                                                    <h6 className='card-price mt-3'>{price}</h6>
                                                </div>
                                                <span className='card-description'>{description}</span>
                                                <div className='card-read read'>READ</div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <img src= {image} alt="" className='images' />
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <span className='card-tag order'> Order Now!</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                </div>
            </section>
        </>
  )
}

export default menuCard