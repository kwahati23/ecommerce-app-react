import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" className="home__image" />
                    <div className="home__row">
                        <Product
                            id="1234231223"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                        <Product
                            id="42413123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                        <Product
                            id="42413123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                    </div>  
                    <div className="home__row">
                         <Product
                            id="4324134123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                         />
                         <Product
                            id="42413123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                        <Product
                            id="42413123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                    </div>  
                    <div className="home__row">
                        <Product
                            id="434123123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                        <Product
                            id="43243123"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                        <Product
                            id="423123412321"
                            title="loremIpsum"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/318IUzGaq2L.jpg"
                        />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Home