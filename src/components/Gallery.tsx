import React, {Dispatch, useEffect, useRef, useState} from "react";
import gal1 from "../statics/img/gal-1.jpeg";
import gal2 from "../statics/img/gal-2.jpeg";
import gal3 from "../statics/img/gal-3.jpeg";
import gal4 from "../statics/img/gal-4.jpeg";
import gal5 from "../statics/img/gal-5.jpeg";
import gal6 from "../statics/img/gal-6.jpeg";
import gal7 from "../statics/img/gal-7.jpeg";
import gal8 from "../statics/img/gal-8.jpeg";
import gal9 from "../statics/img/gal-9.jpeg";
import gal10 from "../statics/img/gal-10.jpeg";
import gal11 from "../statics/img/gal-11.jpeg";
import gal12 from "../statics/img/gal-12.jpeg";
import gal13 from "../statics/img/gal-13.jpeg";
import gal14 from "../statics/img/gal-14.jpeg";

interface Image {
    image: string;
    position: number;
}


const Image = ({image, position}: Image) => {
    return (

        <figure className={"gallery__item gallery__item--" + position}>
            <img src={image} alt="" className={"gallery__img"}/>
        </figure>
    )
};

const Gallery = () => {
    return (
        <section className="gallery">
            <Image image={gal1} position={1}/>
            <Image image={gal2} position={2}/>
            <Image image={gal3} position={3}/>
            <Image image={gal4} position={4}/>
            <Image image={gal5} position={5}/>
            <Image image={gal5} position={6}/>
            <Image image={gal6} position={7}/>
            <Image image={gal7} position={8}/>
            <Image image={gal8} position={9}/>
            <Image image={gal9} position={10}/>
            <Image image={gal10} position={11}/>
            <Image image={gal11} position={12}/>
            <Image image={gal12} position={13}/>
            <Image image={gal13} position={14}/>
            <Image image={gal14} position={15}/>
        </section>
    );
};

export default Gallery;