import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TextInput, Checkbox, PasswordInput, Group, } from '@mantine/core';
import { IconMailFast } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { authPageConstants, basicsInfoConstants } from '../../constants/Basics';
import NormalButton from '../NormalButton';
import { showNotification } from '@mantine/notifications';

// authentication page 
// login page

export default function AuthCard() {
    // Submit function function
    function submit(value) {
        // Toast notification
        showNotification({
            title: "Success",
            message: "Login as " + value.email.toString(),
            color: 'green',
        })
    }

    // Sign in form validations and initialization
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },

        // Email validation
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <>
            <div className="bg-white rounded-default shadow-lg w-full h-full flex laptop:flex-row flex-col-reverse space-x-2">
                {/* Left */}
                <div className="basis-1/2 p-2">
                    <div className="laptop:text-2xl text-lg font-bold my-4">
                        Welcome back to {basicsInfoConstants.name}
                    </div>
                    <div className="w-full">
                        {/* Sign in section */}
                        <form onSubmit={form.onSubmit((values) => submit(values))}>
                            {/* Email */}
                            <TextInput
                                withAsterisk
                                required
                                label="Email"
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />
                            {/* Password */}
                            <PasswordInput
                                withAsterisk
                                placeholder="Password"
                                label="Password"
                                {...form.getInputProps('password')}
                            />

                            <Checkbox
                                mt="md"
                                label="I agree to term and conditions"
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

                            {/* Submit button */}
                            <Group position="right" mt="md">
                                <NormalButton type="submit">
                                    <div>
                                        Submit
                                    </div>
                                    <div>
                                        <IconMailFast />
                                    </div>
                                </NormalButton>
                            </Group>
                        </form>
                        {/* Register link */}
                        <div>Don&apos;t have an account? <Link href="/auth/register"><a className='text-primary'>register</a></Link> here</div>
                    </div>
                </div>
                {/* Right */}
                <div className="laptop:flex justify-center items-center relative w-full basis-1/2 hidden">
                    <Image src={authPageConstants.loginImgPath} className="rounded-r-default brightness-50" objectFit="cover" width={600} height={600} alt="auth page image" />
                    <div className="absolute m-auto text-4xl font-bold text-white">
                        {basicsInfoConstants.name}
                    </div>
                </div>
            </div>

        </>
    )
}
