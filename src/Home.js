import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/71SDTPswjNL._SX3000_.jpg' alt=''></img>
            
                <div className='home_row'>
                    <Product 
                        id="1001234"
                        title="Samsung Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Mobile Gaming Smartphone Long-Lasting Battery, Mystic Bronze "
                        image="https://m.media-amazon.com/images/I/81AT+Flc+EL._AC_UL320_.jpg"
                        price={999.99}
                        rating={5}
                    />
                    <Product 
                        id="1011235"
                        title="Lambs & Ivy Jungle Safari Musical Baby Crib Mobile - Gray, Beige, White, Animals"
                        image="https://m.media-amazon.com/images/I/71D3EPK294L._AC_UL320_.jpg"
                        price={46.99}
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product 
                        id="1021236"
                        title="Wireless Earbuds occiam Bluetooth Headphones 48H Play Back Earphones in Ear Waterproof with Microphone LED Display for Sports Running Workout Black"
                        image="https://m.media-amazon.com/images/I/61cLu+0jalL._AC_UY218_.jpg"
                        price={36.99}
                        rating={4}
                    />
                    <Product
                        id="1031237" 
                        title="Earbuds Wired with Microphone Pack of 5, Noise Isolating in-Ear Headphones, Powerful Heavy Bass, High Definition, Earphones Compatible with iPhone, iPod, iPad, MP3,"
                        image="https://m.media-amazon.com/images/I/71uT0zk5DiL._AC_UY218_.jpg"
                        price={14.99}
                        rating={3}
                    />
                    <Product
                        id="1041238" 
                        title="Teamoy Breast Pump Bag Compatible with Spectra S1,S2, Medela and Cooler Bag, Large Breast Pump Backpack with Insulated Pockets, Laptop Sleeve for Working Moms, Black"
                        image="https://m.media-amazon.com/images/I/611zAY26JPL._AC_UY218_.jpg"
                        price={58.99}
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id="1051239" 
                        title="Adjustable TV and Furniture Anti-Tip Straps Heavy Duty Cable Non Tipping Safety Strap Anti-Tip Prevention and Earthquake Protection Secures to TV Stand and Walls"
                        image="https://m.media-amazon.com/images/I/61a2cUZgSbL._AC_UY218_.jpg"
                        price={9.99}
                        rating={5}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home;
