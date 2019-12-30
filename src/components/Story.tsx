import React from "react";

const Content = () => {
    return (
        <section className="story__content">
            Story Content
        </section>
    )
};

const Pictures = () => {
    return (
        <section className="story__pictures">
            Story Pictures
        </section>
    )
};
const Story = () => {
    return (
        <>
            <Pictures/>
            <Content/>
        </>
    );
};

export default Story;