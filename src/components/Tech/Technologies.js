"use-client"
import React from 'react'
import { Container, Desc, SkillImage, SkillItem, SkillList, Skill, SkillsContainer, SkillTitle, Title, Wrapper } from './TechStyles'
import { skills } from '../../constants/Bio'
import { motion } from 'framer-motion'
import { slideAnimation, fadeAnimation } from '@/utils/motion'

const Technologies = () => {
    return (
        <Container id="tech">
            <Wrapper>
                <Title>Technologies</Title>
            </Wrapper>
            <Desc style={{ marginBottom: "40px" }}>
                Here are some of my technologies on which I have been working& learning on for the
                past 1 years.
            </Desc>
            <motion.div {...fadeAnimation}>
                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Skill key={`skill-${index}`}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, index_x) => (
                                    <SkillItem key={`skill-x-${index_x}`}>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}

                </SkillsContainer>
            </motion.div>
        </Container>
    )
}

export default Technologies
