//#region IMPORTS
//*React
import React, { useState } from 'react';
//*Addons
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring';
//*Components
import Card from './Card';
//*Css
import './areas.css';
//*Files
import ControlImg from '../../../Assets/ControlFront.png';
import ResearchImg from '../../../Assets/ResearchFront.png';
import AutomationImg from '../../../Assets/AutomationFront.png';
import EmbeddedImg from '../../../Assets/EmbeddedFront.png';
import VRImg from '../../../Assets/VRFront.png';
//#endregion

const Areas = () => {
    //#region VARIABLES
    const minSwipeDistance = 50;
    const offsetRadius = 2;
    //#endregion

    //#region HOOKS
    const [slideNo, setSlideNo] = useState(0);
    const [touchEndX, setTouchEndX] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    //#endregion

    //#region CARDS
    let cards = [
        {
            key: 0,
            content: <Card
                id={0}
                src={ControlImg}
                link="/control"
                cardText='Advanced Control Systems'
                slideNo={slideNo}
            />
        },
        {
            key: 1,
            content: <Card
                id={1}
                src={EmbeddedImg}
                link='/embedded'
                cardText='Embedded Systems'
                slideNo={slideNo}
            />
        },
        {
            key: 2,
            content: <Card
                id={2}
                src={AutomationImg}
                link='/automation'
                cardText='Industrial Automation'
                slideNo={slideNo}
            />
        },
        {
            key: 3,
            content: <Card
                id={3}
                src={VRImg}
                link="/vr"
                cardText='Virtual Reality'
                slideNo={slideNo}
            />
        },
        {
            key: 4,
            content: <Card
                id={4}
                src={ResearchImg}
                link='/research'
                cardText='Research'
                slideNo={slideNo}
            />
        },
    ];

    const table = cards.map((element, index) => {
        return { ...element, onClick: () => setSlideNo(index) };
    });
    //#endregion

    //#region FUNCTIONS
    //*Gets beginning of touch (mobile)
    const moveStart = (e) => {
        setTouchEndX(null);
        setTouchEndY(null);
        setTouchStartX(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientX);
    }

    //*Gets end of touch (mobile)
    const moving = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    }

    //*Calculates movement to show previous or next image
    const moveEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const distanceX = touchStartX - touchEndX;
        const distanceY = touchStartY - touchEndY;
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;
        if (Math.abs(distanceX) > distanceY) {
            if (isLeftSwipe) {
                setSlideNo(slideNo + 1);
            }
            if (isRightSwipe) {
                setSlideNo(slideNo - 1);
            }
        }
    }
    //#endregion

    //#region HTML
    return (
        <div id="1" className='divAreas'>
            <span className='subtitle'>AREAS OF EXPERTISE</span>
            <div onTouchStart={moveStart} onTouchMove={moving} onTouchEnd={moveEnd} className='divCarousel'>
                <Carousel
                    slides={table}
                    goToSlide={slideNo}
                    offsetRadius={offsetRadius}
                    showNavigation={false}
                    animationConfig={config.gentle}
                />
            </div>
        </div>
    )
    //#endregion
}

export default Areas