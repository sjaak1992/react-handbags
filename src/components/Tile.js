import React from "react";
import brand from "../assets/brand.png";

function Tile ({image, alternative, title, children}){
    return(
        <section className="tile">
            <img src={image} alt={alternative}/>
            <h2 className="tile-name">{title}</h2>
            {children}

        </section>
    )
}
export default Tile;