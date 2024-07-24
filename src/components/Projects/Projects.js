import React, { useState } from 'react'
import { CardContainer, Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectStyles'

import ProjectCard from '../Cards/ProjectsCard'
import { projects } from '@/constants/Bio'

const Projects = () => {
    const [toggle, setToggle] = useState('all')
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc style={{
                    marginBottom: "40px",
                }}>
                    I have worked on a wide range of projects. From web apps to android
                    apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton active={toggle === "all"}
                        onClick={() => setToggle("all")}>
                        All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "web app"}
                        onClick={() => setToggle("web app")}>
                        WEB APP&quot;S
                    </ToggleButton>
                    <Divider />

                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === "all" && projects.map((project) => <ProjectCard key={projects.id} project={project} />)}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard key={projects.id} project={project} />
                        ))}
                </CardContainer>
            </Wrapper>

        </Container>
    )
}

export default Projects
