import React from 'react'
import { Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectStyles'

const Projects = () => {
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
                    <ToggleButton>
                        All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton>
                        WEB APP&quot;S
                    </ToggleButton>
                    <Divider />

                </ToggleButtonGroup>
            </Wrapper>

        </Container>
    )
}

export default Projects
