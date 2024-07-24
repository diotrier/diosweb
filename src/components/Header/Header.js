import Link from 'next/link'

import { MobileIcon, Nav, NavbarContainer, NavItems, NavLink, MobileMenu, Icon } from "./NavStyles";
import { Div3, SocialIcons } from './HeaderStyles';
import { DiCssdeck } from 'react-icons/di';
import { useEffect, useState } from 'react';
import { MenuRounded } from "@mui/icons-material";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleSize);
        return () => {
            window.addEventListener('resize', handleSize);
        }
    }, [])

    return (
        <Nav>
            <NavbarContainer>
                <Link href="/" legacyBehavior>
                    <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                        <DiCssdeck size="3rem" /> <span style={{ fontSize: "1.2rem" }}>Portfolio</span>
                    </a>
                </Link>

                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{ color: "inherit" }} />
                </MobileIcon>

                <NavItems>
                    <NavLink href='#tech'>Technologies</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#about'>About</NavLink>
                </NavItems>

                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#tech">
                            Technologies
                        </NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#projects">
                            Projects
                        </NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#about">
                            About
                        </NavLink>
                        <Icon>
                            <SocialIcons href="https://google.com">
                                <AiFillGithub size="3rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillLinkedin size="3rem" />
                            </SocialIcons>

                        </Icon>

                    </MobileMenu>
                )}

                <Div3>
                    <SocialIcons href="https://google.com">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>

                </Div3>

            </NavbarContainer>
        </Nav>

    )
}

export default Header
