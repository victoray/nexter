import React from "react";
import story1 from "../statics/img/story-1.jpeg";
import story2 from "../statics/img/story-2.jpeg";

const Content = () => {
    return (
        <section className="story__content">
            <h3 className="heading-3 mb2">
                Happy customers
            </h3>
            <h2 className="heading-2 heading-2--dark mb4">
                &ldquo; the best decision of our lives &rdquo;
            </h2>
            <p className="story__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
                voluptatibus. Quidem consequatur harum volupta!
            </p>

            <button className="btn">
                Find your own home
            </button>
        </section>
    )
};

const Pictures = () => {
    return (
        <section className="story__pictures">
            <img src={story1} alt={""} className={"story__img--1"}/>
            <img src={story2} alt={""} className={"story__img--2"}/>
        </section>
    )
};
const Story = () => {
    return (
        <>
            <Content/>
            <Pictures/>
        </>
    );
};

export default Story;