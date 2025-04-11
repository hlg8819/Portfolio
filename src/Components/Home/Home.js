//#region IMPORTS
//*Components
import Areas from "./Areas/Areas";
import Intro from "./Intro/Intro";
import SectionBar from "../SectionBar/SectionBar";
import Skills from "./Skills/Skills";
import { useEffect } from "react";
//#endregion

function Home() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    const sections = [
        {
            id: 0,
            title: "Introduction",
        },
        {
            id: 1,
            title: "Areas of Expertise",
        },
        {
            id: 2,
            title: "Skills",
        }
    ];

    //#region HTML
    return (
        <>
            <SectionBar sections={sections} />
            <Intro />
            <Areas />
            <Skills />
        </>
    );
    //#endregion
}

export default Home;