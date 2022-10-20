import React from 'react'
import { Container } from '@mantine/core'
import LoginCard from '../../components/Authpage/LoginCard'

// user login page
// route: /auth/login

export default function authpage() {
    return (
        <>
            <div className="mt-20">
                <Container size="xl">
                    <LoginCard />
                </Container>
            </div>
        </>
    )
}
