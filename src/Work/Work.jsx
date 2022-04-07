import { Component } from "react";
import Nav from "../Components/Nav";
import {FramePentagon, Button, FrameUnderline, Text} from '@arwes/core';

const Projects = ({name, description, date}) => {
    return(
        <div style={{marginBottom: '30px'}}>
            <FramePentagon inverted>
                <div style={{padding: '30px 10px'}}>
                    <Text>
                        <h3 style={{paddingBottom: '20px', borderBottom: '5px solid'}}>{name}</h3>
                        <p style={{paddingBottom: '20px', borderBottom: '5px solid'}}>
                            {description}
                        </p>
                    </Text>
                    <div className={'details'}>
                        <div>
                            <Text>{date}</Text>
                        </div>
                    </div>
                </div>
            </FramePentagon>
        </div>
    )
}

class Work extends Component {
    state = {
        works: [
            {
                id: 1,
                name: 'Student Information System',
                description: 'Student Information System is a web application that allows admin to manage lecturers, students and their information. Admin can add classes, lecturers and students. Admin can also view the list of students and lecturers. Lecturers can view the list of students in their classes and they can aslo write monthly report for their students. Students can view their diploma courses. The backend api is created with Laravel. My role was to develop the front-end of the application by using ReactJS, JQuery, TailwindCSS and Material-UI.',
                date: '2022-01'
            },
            {
                id: 2,
                name: 'Salary Slip',
                description: 'This is a web application to create salary slip for employees every month. The backend technology is Django. The front-end is created with HTML, Bootstrap, JQuery.',
                date: '2022-01'
            },
            {
                id: 3,
                name: 'KBTC Invoice Financing System',
                description: 'KBTC Invoice Financing System is a web application for students to send their invoices to the university after payment. In this project, my role was to develop the front-end of the application using HTML, Bootstrap and Jquery using Django Framework. This application was developed when I was working at the KBTC University.',
                date: '2021-12'
            },
            {
                id: 4,
                name: 'Inventory Management System',
                description: 'It is a web application to manage the inventory for a client. In this project, my role was to develop the front-end of the application using HTML, TailwindCSS, Jquery and PHP using Laravel framework. This application was developed when I was working as a freelance developer at 4WARD IT Solutions.',
                date: '2020-06'
            },
        ]
    }
    render() {
        return(
            <>
                <Nav/>
                <div className={'content'}>
                    {this.state.works.map(work => (
                        <Projects key={work.id} name={work.name} description={work.description} date={work.date}/>
                    ))}
                </div>
            </>
        )
    }
}

export default Work;