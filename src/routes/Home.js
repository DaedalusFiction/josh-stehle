import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import MediaLinks from "../components/MediaLinks";
import Showcase from "../components/Showcase";

const Home = () => {
    return (
        <>
            <Hero />
            <MediaLinks />
            <Showcase />

            <Contact />
        </>
    );
};

export default Home;
