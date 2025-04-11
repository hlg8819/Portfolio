//#region IMPORTS
//*REACT
import React, { useRef } from 'react';
//*CSS
import './sectionBar.css';
//#endregion

const SectionBar = ({ sections = [] }) => {

  const ref = useRef(null);

  const scrollWithOffset = (index) => {
    const element = document.getElementById(index);
    const offset = 80;
    const elementPos = element.getBoundingClientRect().top;
    const offsetPos = window.scrollY + elementPos - offset - ref.current.clientHeight;
    window.scrollTo({top: offsetPos, behavior: 'smooth'})
  }

  //#region HTML
  return (
    <div className='barBack' ref={ref}>
      <div className={sections.length > 1 ? 'barMenu' : 'barMenuSingle'}>
        {sections.length > 0 ?
          sections.map((item, index) => {
            return (
              <p key={"link" + index} className='barItem' onClick={() => {scrollWithOffset(index)}}>{item.title.toUpperCase()}</p>
            )
          })
          :
          null
        }
      </div>
    </div>
  );
  //#endregion
}

export default SectionBar;