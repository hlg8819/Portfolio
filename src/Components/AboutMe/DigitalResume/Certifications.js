import React from 'react';
import PeopleCertLogo from '../../../Assets/PeopleCertLogo.png';
import IeltsLogo from '../../../Assets/IeltsLogo.png';


const Certifications = () => {
    const certificates = [
        {
            organization: "PeopleCert",
            title: "ITIL® Foundation Certificate in IT Service Management (No. GR671539832HL)",
            image: PeopleCertLogo,
            imageAlt: "PeopleCertLogo",
            url: "https://www.peoplecert.org",
        },
        {
            organization: "British Council",
            title: "IELTS ACADEMIC: 8.5/9.0 (CEFR level C2) - Test Report Number: 23MX501316LOPH030A",
            image: IeltsLogo,
            imageAlt: "IELTSLogo",
            url: "https://ielts.org",
        },
    ]

    return (
        <div className='containerHBorder' id={6}>
            <div className='subtitle'>
                <span>CERTIFICATES</span>
            </div>
            {certificates.length > 0 ?
                certificates.toReversed().map((item, index) => {
                    return (
                        <div className='containerExp' key={"DC" + index}>
                            <div className='divImgPR'>
                                <img className='expImgSmall' src={item.image} alt={item.imageAlt} onClick={() => { window.open(item.url, '_blank') }} />
                            </div>
                            <p>• {item.title}<br />&nbsp; &nbsp; &nbsp; &nbsp;• Obtained from: {item.organization}</p>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default Certifications