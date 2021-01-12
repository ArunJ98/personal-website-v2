import React from 'react';
import TextLoop from "react-text-loop";

export default function Splash() {
    return (
        <div className="bg-secondary h-vh90 flex">
            <div className="m-auto">
                <div className="md:mr-40">
                    <div className="pb-5 text-4xl md:text-5xl flex flex-row"> 
                        <p className="text-accent"> Hello, my name is&#160; </p>
                        <p className="text-secondary"> Arun. </p>
                    </div>
                    <div className="text-xl md:text-3xl flex flex-row"> 
                        <p className="text-accent">I'm a&#160; </p>
                        <div className="text-secondary"> 
                            <TextLoop children={["developer.", "creator.", "thinker.", "striving pilot.", "tech enthusiast.", "basketball fan."]} />
                        </div>
                    </div>
                    <div className="text-md md:text-xl pt-10"> 
                        <p className="text-accent "> This website is currently under construction, check back soon! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}