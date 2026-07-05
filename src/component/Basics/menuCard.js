import React, {useState} from 'react';





// RECEIVING/ACCEPTING PROPS
const MenuCard = ( {menuData} ) => {        
    
    const [orderedItems, setOrderedItems] = React.useState([]);
const handleOrder = (id, name) => {

    if (orderedItems.includes(id)) {
        alert(`${name} is already ordered!`);
        return;
    }

    alert(`${name} ordered successfully! 🎉`);

    setOrderedItems([...orderedItems, id]);

}
    


    const [readMore, setReadMore] = useState([]);

    const toggleReadMore = (id) => {

        if (readMore.includes(id)) {
            setReadMore(readMore.filter((item) => item !== id));
        } else {
            setReadMore([...readMore, id]);
        }

    };
    return (
        <>
            <section className='container'>
                <div className="row">
                    {
                        menuData.map((curElem) => {
                            const {id, name, category, image, description, rating, price} = curElem;
                            return (
                                <>
                                    <div className="col-12 col-sm-6 col-lg-4 card-container my-4" key={id}> 
                                        <div className="card">
                                            <div className="card-body">
                                                <span className='card-number card-circle subtle'>{id}</span>
                                                <span className='card-category'>{category}</span>
                                                <div className='d-flex justify-content-between'>
                                                    <h2 className='card-title fw-bold'>{name}</h2>
                                                    <h6 className='card-price mt-3'>{price}</h6>
                                                </div>
                                                <h6 className='card-rating d-flex justify-content-end'>
                                                    {"⭐".repeat(rating)}
                                                </h6>
                                                <span className='card-description'>
                                                    {
                                                        readMore.includes(id)
                                                            ? description
                                                            : description.substring(0, 100) + "..."
                                                    }
                                                </span>
                                                <div className='card-read read'
                                                    onClick={() => toggleReadMore(id)}>
                                                    {
                                                        readMore.includes(id)
                                                            ? "SHOW LESS"
                                                            : "READ MORE"
                                                    }</div>
                                            </div>
                                            <div className='image-container'>
                                                <img src= {image} alt={name} className='images img-fluid' />
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <span className={orderedItems.includes(id) ? "card-tag order ordered" : "card-tag order"}
                                                     onClick={() => handleOrder(id, name)}>
                                                    {
                                                        orderedItems.includes(id)
                                                            ? "Ordered!"
                                                            : "Order Now!"
                                                    }
                                                </span>
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

export default MenuCard;