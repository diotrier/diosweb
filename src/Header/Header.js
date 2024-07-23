import React from 'react'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'
import { DiCssdeck } from 'react-icons/di';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    return (
        <Container>
            <Div1>
                <Link href="/" legacyBehavior>
                    <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                        <DiCssdeck size="3rem" /> <span>Portfolio</span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href="#projects" legacyBehavior>
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#tech" legacyBehavior>
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#about" legacyBehavior>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <SocialIcons href="https://google.com">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://google.com">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://google.com">
                    <AiFillInstagram size="3rem" />
                </SocialIcons>
            </Div3>
        </Container>
    )
}

export default Header
