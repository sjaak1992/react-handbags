import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourstory from "./assets/our_story.png";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    log="jij wilt shoppen"
                    text="to the collection"
                />

                <Button
                    log="shop all bags"
                    text="shop all bags"
                />

                <Button
                    log="you want to pre-order"
                    text="pre-order"
                    disabled="disable"
                />

            </nav>

            <main>
                //first step
                {/*<article className="Product">*/}
                {/*  <img src={bag1} alt ="bag-one"/>*/}
                {/*  <span className="red-label">red label</span>*/}
                {/*  <p className="product-title">The Handy bag</p>*/}
                {/*  <h4 className="product-price">€400</h4>*/}
                {/*</article>*/}

                //components

                <Product
                    category="Best Seller"
                    imgage={bag1}
                    alternative="bag-one"
                    title="The handy bag"
                    price="€400"
                />

                <Product
                    category="Best Seller"
                    imgage={bag2}
                    alternative="bag-tw0"
                    title="The stylish bag"
                    price="€250"
                />

                <Product
                    category="New collection"
                    imgage={bag3}
                    alternative="bag-three"
                    title="The simple bag"
                    price="€300"
                />

                <Product
                    category="New collection"
                    imgage={bag4}
                    alternative="bag-four"
                    title="The trendy bag"
                    price="€150"
                />
            </main>

            <footer>
                //first step
                {/*<section className="tile">*/}
                {/*<img src={brand} alt="the brand"/>*/}
                {/*<h2 className="tile-name">The Brand</h2>*/}
                {/*<p className="tile-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quisquam.</p>*/}
                {/*</section>*/}

                //components

                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis dicta exercitationem fuga
                        hic magnam natus omnis quos recusandae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate distinctio, facilis
                        fugit incidunt minima molestiae possimus quisquam quos sapiente.</p>
                </Tile>

                <Tile
                    image={brand}
                    alternative="the-brand"
                />

                <Tile
                    image={ourstory}
                    alternative="uss"
                />

                <Tile title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis dicta exercitationem fuga
                        hic magnam natus omnis quos recusandae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate distinctio, facilis
                        fugit incidunt minima molestiae possimus quisquam quos sapiente.</p>
                </Tile>


            </footer>

        </>
    );
}

export default App;
//