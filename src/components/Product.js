import React from "react";

function Product ({imgage, price, title, category, alternative}) {
    return (
        < article className="Product">
            <img src={imgage} alt ={alternative}/>
            <span className="category">{category}</span>
            <p className="title">{title}</p>
            <h4 className="price">{price}</h4>
        </article>
    );
}
export default Product;
