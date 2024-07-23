import React from 'react'
import { Container, Div1 } from './HeaderStyles'
import { DiCssdeck } from 'react-icons/di';
import Link from 'next/link'

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
        </Container>
    )
}

export default Header
