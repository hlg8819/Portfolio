//#region IMPORTS
//*REACT
import React from 'react';
//*FILES
import AutomationTestImg from '../../Assets/Automation1.png';
import FacemaskImg from '../../Assets/Automation2.png';
import UruconImg from '../../Assets/UruconImg.png';
import DronePortImg from '../../Assets/DronePortImage.png';
import VRClassImg from '../../Assets/VRClassroom.png';
import ThermalVRImg from '../../Assets/ThermalVr.png';
import VRKayakImg from '../../Assets/VRKayak.png';
//#endregion

//#region PROJECTS
const ProjectsList = [
    {
        automation: false,
        control: false,
        embedded: false,
        vr: true,
        research: true,
        publication: false,
        image: VRClassImg,
        imageAlt: "ProjectImg",
        title: "VR Classroom",
        role: "Undergraduate Research Assistant",
        summary: "Designed a multi-user virtual classroom in Unity, enhancing interactive learning with VR devices.",
        responsibilities:
            <>
                • Designed virtual environment in Unity<br />
                • Programmed interactions and movements within the virtual environment.<br />
                • Integrated multiple VR devices for seamless user experience.<br />
                • Designed initial learning experiences within the VR environment.<br />
                • Presented potential lectures.<br />
                • Demonstrated the educational benefits of using VR in a classroom setting.<br />
            </>
        ,
        skills:
            [
                "Virtual Reality",
                "Unity",
                "C#",
                "Research",
                "Public Speaking",
            ],
    },
    {
        automation: true,
        control: false,
        embedded: true,
        vr: false,
        research: false,
        publication: false,
        image: AutomationTestImg,
        imageAlt: "ProjectImg",
        title: "Automation Testing Unit",
        role: "Automation and Control Systems Engineer at All Robot",
        summary: "Developed a nine-module automation system to teach Mechatronics Engineering students real-world PLC programming and industrial processes. The system, designed using Autodesk Inventor and rapid prototyping techniques, enhances hands-on learning experiences and has significantly improved student engagement and comprehension.",
        responsibilities:
            <>
                • Developed a comprehensive automation system consisting of 9 modules.<br />
                • Designed ladder logic and programmed Allen Bradley PLCs for system control.<br />
                • Created user interfaces and programmed HMIs for efficient operation.<br />
                • Installed and configured sensors, actuators, and components for seamless functionality.<br />
                • Utilized AutoDesk Inventor for mechanical design and layout optimization.<br />
                • Employed rapid prototyping techniques such as laser cutting and 3D printing for prototype development.<br />
                • Oversaw mechanical installation and components integration.<br />
                • Developed automation course laboratory practices and a user manual for system operation.<br />
            </>
        ,
        skills:
            [
                "Team management",
                "Embedded Systems",
                "PLC programming",
                "Ladder Logic",
                "Instrumentation",
                "HMIs",
                "Prototyping",
                "Autodesk Inventor",
                "Allen Bradley CCW",
                "3D printing",
                "Laser Cutting",
            ]
    },
    {
        automation: true,
        control: false,
        embedded: true,
        vr: false,
        research: false,
        publication: false,
        image: FacemaskImg,
        imageAlt: "ProjectImg",
        title: "Facemasks Production System",
        role: "Automation and Control Systems Engineer as a Freelancer",
        summary: "Redesigned and optimized an industrial facemask production system, resulting in a 100% increase in output.",
        responsibilities:
            <>
                • Mechanical design, prototyping and installation of parts.<br />
                • Enhanced PLC programming for improved system performance.<br />
                • Replaced faulty sensors and actuators with new components to maintain operational integrity.<br />
                • Boosted production from 75 pieces per minute to 150 pieces per minute.<br />
            </>
        ,
        skills:
            [
                "Leadership",
                "Client Management",
                "Embedded Systems",
                "Control Systems",
                "PLC Programming",
                "Instrumentation",
                "Prototyping",
            ],
    },
    {
        automation: true,
        control: true,
        embedded: true,
        vr: false,
        research: false,
        publication: false,
        image: DronePortImg,
        imageAlt: "ProjectImg",
        title: "Drone Ports",
        role: "Automation and Control Systems Engineer as a Freelancer",
        summary: "Led the installation and update of 17 autonomous drone port systems across Mexico, significantly enhancing area patrol efficiency and operational reliability. This systems were designed for drones to be able to patrol areas autonomously and to have a base to recharge the batteries and get cover from environmental phenomenoms.",
        responsibilities:
            <>
                • On-site system installation.<br />
                • PID tuning.<br />
                • On-site PLC programming.<br />
                • Sensors and actuators integration.<br />
                • Cable soldering on-site.<br />
                • Designing, prototyping, and installing mechanical parts in units.<br />
                • Cable management.<br />
            </>
        ,
        skills:
            [
                "Embedded Systems",
                "PLC Programming",
                "Control Systems",
                "Instrumentation",
                "Soldering",
                "Prototyping",
                "Autodesk Inventor",
                "3D Printing",
            ]
    },
    {
        automation: false,
        control: true,
        embedded: true,
        vr: true,
        research: true,
        publication: false,
        image: VRKayakImg,
        imageAlt: "ProjectImg",
        title: "Kayak simulator",
        role: "Postgraduate research assistant",
        summary: "Developed a virtual reality kayak simulator with a robotic seat to aid CVA patients in balance recovery. The simulator provides a safe, accessible alternative to real kayaking, demonstrating measurable improvements in patient balance.",
        responsibilities:
            <>
                • Designed virtual environment for the kayak simulation therapy with a team of researchers.<br />
                • Established the connection between the virtual environment and the robotic seat for synchronized movements in real time.<br />
                • Participated in a radio program to discuss and raise awareness about the project.<br />
                • Provided assessment and expertise on the project's development and implementation.<br />
            </>
        ,
        skills:
            [
                "Teamwork",
                "Virtual Reality",
                "Unity",
                "Teaching",
                "Public Speaking",
                "Communication",
                "Research",
            ]
    },
    {
        automation: false,
        control: true,
        embedded: true,
        vr: true,
        research: true,
        publication: false,
        image: ThermalVRImg,
        imageAlt: "ProjectImg",
        title: "Thermal Haptic Device",
        role: "Master of Science in Engineering Student",
        summary: "Developed a multi-agent formation control strategy for a thermal haptic device, providing real-time temperature feedback to enhance VR experiences. The project involved extensive research in thermal control methods, prototyping, and system integration, resulting in a functional prototype with seamless interaction",
        responsibilities:
            <>
                • Researched thermal control methods for effective implementation.<br />
                • Developed a Multi-agent formation control strategy for thermal agents.<br />
                • Created prototypes of the haptic device.<br />
                • Designed a thermal dissipation system.<br />
                • Programmed the control strategy into microcontrollers.<br />
                • Selected appropriate and innovative sensors and actuators.<br />
                • Designed inputs and outputs for the embedded system.<br />
                • Calculated thermodynamics of the system to optimize the control strategy.<br />
                • Generated virtual environments compatible with the haptic device.<br />
                • Connected the haptic device to the virtual environment for seamless interaction.<br />
                • Implemented temperature feedback mechanisms from the virtual environment to the haptic device.<br />
            </>
        ,
        skills:
            [
                "Advanced Control Systems",
                "Virtual Reality",
                "Embedded Systems",
                "Embedded C",
                "C# Programming",
                "Unity",
                "Multi-agent Systems",
                "Research",
                "Innovation",
                "Thermodynamics",
                "Prototyping",
                "3D printing",
                "Laser Cutting",
                "Circuit Design",
                "Instrumentation",
            ]
    },
    {
        automation: false,
        control: true,
        embedded: false,
        vr: false,
        research: true,
        publication: true,
        image: UruconImg,
        imageAlt: "ProjectImg",
        title: "IEEE URUCON 2021",
        role: "Principal Author",
        summary:
            <span>
                This paper extends consensus theory to develop a temperature-based formation scheme for thermal agents modeled as first-order linear systems. Utilizing a predefined communication topology and a control strategy derived from the Poisson's Heat Equation, the system ensures exponential convergence to desired temperature patterns. Evaluated through simulations and experiments with thermoelectric devices, the approach shows significant potential for advanced thermal control applications, enhancing system stability and efficiency.<br />
                DOI: <a href='https://ieeexplore.ieee.org/document/9647108/authors#authors' target='_blank' rel="noreferrer">10.1109/URUCON53396.2021.9647108</a><br />
            </span>,
        responsibilities: null,
        skills:
            [
                "Advanced Control Systems",
                "Research",
                "Simulation",
                "MATLAB",
                "Multi-agent systems",
                "Prototyping",
                "Thermodynamic Systems",
            ],
    },
];
//#endregion 

export default ProjectsList;