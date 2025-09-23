import React from 'react';


const Extracurricular = () => {
    const activities = [
        "Football player for several Mexican teams' reserves including Cruz Azul F.C., Club América, Deportivo Toluca F.C., and Atlante F.C. (2006 - 2010)",
        "Third division professional football player, Atlante F.C., C.D. Guadalajara, and Club Santos Laguna. (2010 - 2015)",
        "Events Director and Public Relations, Student Association of Electronics Engineering, Universidad Iberoamericana. (2016 - 2018)",
        "Managed donations and resources for earthquake-affected zones in Mexico following the September 19, 2017 earthquake. (2017)",
        "Taught football classes for children in poverty and/or dangerous situations in the Malinalco community. (2019)",
        "Master's degree student representative, Postgraduate Technical Council, Universidad Iberoamericana. (2021 - 2022)",
        "Football player for United Wolves AFC Division 1, First Grade, Australia (2024 – 2025)"
    ]

    return (
        <div className='containerH' id={8}>
            <div className='subtitle'>
                <span>EXTRACURRICULAR ACTIVITIES<br /><br /></span>
            </div>
            {activities.length > 0 ?
                activities.toReversed().map((item, index) => {
                    return (
                        <p key={"EX" + index}>• {item}<br /><br /></p>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default Extracurricular