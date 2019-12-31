import React from "react";
import house1 from "../statics/img/house-1.jpeg";
import house2 from "../statics/img/house-2.jpeg";
import house3 from "../statics/img/house-3.jpeg";
import house4 from "../statics/img/house-4.jpeg";
import house5 from "../statics/img/house-5.jpeg";
import house6 from "../statics/img/house-6.jpeg";
import sprite from "../statics/img/sprite.svg";

interface Home {
    image: string;
    name: string;
    location: string;
    price: string;
}

const Home = ({image, name, location, price}: Home) => {
    return (
        <div className="home">
            <img src={image} alt="" className="home__img"/>
            <svg className="home__like">
                <use xlinkHref={`${sprite}#icon-heart-full`}/>
            </svg>
            <h5 className="home__name">
                {name}
            </h5>
            <div className="home__location">
                <svg>
                    <use xlinkHref={`${sprite}#icon-map-pin`}/>
                </svg>
                <p>{location}</p>
            </div>
            <div className="home__rooms">
                <svg>
                    <use xlinkHref={`${sprite}#icon-profile-male`}/>
                </svg>
                <p>5 rooms</p>
            </div>
            <div className="home__area">
                <svg>
                    <use xlinkHref={`${sprite}#icon-expand`}/>
                </svg>
                <p>325 ms <sup>2</sup></p>
            </div>
            <div className="home__price">
                <svg>
                    <use xlinkHref={`${sprite}#icon-key`}/>
                </svg>
                <p>{price}</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
        </div>
    )
};
const Homes = () => {
    return (
        <section className="homes">
            <Home image={house1} location={"USA"} name={"beautiful family house"} price={"$1,200,000"}/>
            <Home image={house2} location={"Canada"} name={"Mordern glass villa"} price={"$1,500,000"}/>
            <Home image={house3} location={"France"} name={"cozy country house"} price={"$5,200,000"}/>
            <Home image={house4} location={"Egypt"} name={"large rustical villa"} price={"$200,000"}/>
            <Home image={house5} location={"Spain"} name={"majestic palace house"} price={"$7,200,000"}/>
            <Home image={house6} location={"Brazil"} name={"the dome"} price={"$78,200,000"}/>
        </section>);
};

export default Homes;