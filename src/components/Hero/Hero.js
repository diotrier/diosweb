"use client";

import { Section, SectionText, SectionTitle } from '@/styles/GlobalComponents'
import React from 'react'
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, ResumeButton, SubTitle, TextLoop, Title } from './HeroStyles'
import Typewriter from 'typewriter-effect'
import { Bio } from '@/constants/Bio'
import HeroBgAnimation from '../BackgroundAnimation'
import { motion } from 'framer-motion'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,

} from '../../utils/motion'

const Hero = () => {

    return (
        <div id='/'>
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>


                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hi, I&apos;m {Bio.name}
                                </Title>
                                <TextLoop>
                                    a <span>
                                        <Typewriter options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }} />
                                    </span>
                                </TextLoop>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>
                                    {Bio.description}
                                </SubTitle>
                            </motion.div>
                            <ResumeButton>Check Resume</ResumeButton>
                        </HeroLeftContainer>
                        <HeroRightContainer>

                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>



            </HeroContainer>
        </div>
    )
}

export default Hero
