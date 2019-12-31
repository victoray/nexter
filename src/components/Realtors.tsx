import React from "react";
import realtor1 from "../statics/img/realtor-1.jpeg"
import realtor2 from "../statics/img/realtor-2.jpeg"
import realtor3 from "../statics/img/realtor-3.jpeg"

interface Realtor {
    image: string;
    name: string;
    sold: number;
}

const Realtor = ({image, name, sold}: Realtor) => {
    return (
        <div className="realtor">
            <img src={image} alt="" className="realtor__img"/>
            <div className="realtor__details">
                <h4 className="heading-4 heading4--light">
                    {name}
                </h4>
                <p className="realtor__sold">{sold} houses sold</p>
            </div>
        </div>
    )
};

const Realtors = () => {
    return (
        <section className="realtors">
            <h3 className="heading-3">Top 3 realtors</h3>
            <Realtor image={realtor1} name={"Erik Holsgate"} sold={300}/>
            <Realtor image={realtor2} name={"May Sia"} sold={500}/>
            <Realtor image={realtor3} name={"Philip Bronzegate"} sold={150}/>
        </section>
    );
};

export default Realtors;