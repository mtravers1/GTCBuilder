import React from 'react'
import { Container } from '@mantine/core'
import AdminLoginCard from '../../components/Authpage/AdminLoginCard'

// user login page
// route: /auth/admin-login

export default function authpage() {
    return (
        <>
            <div className="mt-20">
                <Container size="xl">
                    <AdminLoginCard />
                </Container>
            </div>
        </>
    )
}