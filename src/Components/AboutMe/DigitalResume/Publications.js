import React from 'react'

const Publications = () => {
    const publications = [
        {
            title: "Formation Control for Thermal Multi-agent Systems",
            doi: "10.1109/URUCON53396.2021.9647108",
            url: "https://ieeexplore.ieee.org/document/9647108",
            publisher: "IEEE",
        }
    ]

    return (
        <div className='containerHBorder' id={7}>
            <div className='subtitle'>
                <span>PUBLICATIONS</span>
            </div>
            {publications.length > 0 ?
                publications.map((item, index) => {
                    return (
                        <div className='containerExp' key={"DP" + index}>
                            <p>
                                • Title: {item.title}<br />
                                &nbsp; &nbsp; &nbsp; &nbsp;• Publisher: {item.publisher}<br />
                                &nbsp; &nbsp; &nbsp; &nbsp;• DOI: <a href={item.url} target='_blank' rel="noreferrer noopener">{item.doi}</a>
                            </p>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default Publications