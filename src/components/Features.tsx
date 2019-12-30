import React from "react";
import sprite from "../statics/img/sprite.svg"

interface Feature {
    icon: string;
    heading: string;
    content?: string;
}

const Feature = ({icon, heading, content}: Feature) => {
    return (
        <div className="feature">
            <svg className="feature__icon">
                <use xlinkHref={`${sprite}#${icon}`}/>
            </svg>
            <h4 className="heading-4 heading-4--dark">
                {heading}
            </h4>
            <p className="feature__text">
                {content || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur\n" +
                "                voluptatibus."}
            </p>
        </div>
    )
};

const Features = () => {
    return (
        <section className="features">
            <Feature icon={"icon-global"} heading={"Worlds best luxury homes"}/>
            <Feature icon={"icon-trophy"} heading={"Only the best properties"}
                     content={"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."}/>
            <Feature icon={"icon-map-pin"} heading={"All Homes in top location"}
                     content={"Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."}/>
            <Feature icon={"icon-key"} heading={"new home in one week"}
                     content={"Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>
            <Feature icon={"icon-presentation"} heading={"top 1% realtors"}
                     content={"Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."}/>
            <Feature icon={"icon-lock"} heading={"secure payments on nexter"}
                     content={"Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."}/>
        </section>
    );
};

export default Features;