import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TextInput, Checkbox, PasswordInput, Group, Select } from '@mantine/core';
import { IconMailFast } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { authPageConstants, basicsInfoConstants } from '../../constants/Basics';
import NormalButton from '../NormalButton';
import { showNotification } from '@mantine/notifications';


// authentication page 
// register page

export default function AuthCard() {

    // Submit function function
    function submit(values) {
        // Toast notification
        showNotification({
            title: "Success",
            message: "User registered " + values.name.toString(),
            color: 'green',
        })
    }

    // Sign in form
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <>
            <div className="bg-white rounded-default shadow-lg w-full h-full flex laptop:flex-row flex-col space-x-2">
                {/* Left */}
                <div className="basis-1/2 p-2">
                    <div className="text-2xl font-bold my-4">
                        {/* Title */}
                        Welcome back to {basicsInfoConstants.name}
                    </div>
                    <div className="w-full">
                        {/* Sign up section */}
                        <form onSubmit={form.onSubmit((values) => submit(values))}>
                            {/* Name */}
                            <TextInput
                                withAsterisk
                                required
                                label="Name"
                                placeholder="John doe"
                                {...form.getInputProps('name')}
                            />
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
                            {/* Re-Password */}
                            <PasswordInput
                                withAsterisk
                                placeholder="Retype-Password"
                                label="Retype-Password"
                            />

                            {/* Country */}
                            <Select
                                withAsterisk
                                label="Country"
                                placeholder="Your country"
                                data={[
                                    { value: 'sl', label: 'Sri Lanka' },
                                    { value: 'nz', label: 'New zeland' },
                                ]}
                                {...form.getInputProps('country')}
                            />

                            <Checkbox
                            required
                                withAsterisk
                                mt="md"
                                label="I agree to term and conditions"
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

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
                        {/* Login link */}
                        <div className="m-auto">Have an account? <Link href="/auth/login"><a className='text-primary'>login</a></Link> here</div>
                    </div>
                </div>
                {/* Right */}
                <div className="laptop:flex hidden justify-center items-center relative">
                    <Image src={authPageConstants.registerImgPath} className="rounded-r-default brightness-50" objectFit="cover" width={1000} height={1000} alt="auth page image" />
                    <div className="absolute m-auto text-4xl font-bold text-white">
                        {basicsInfoConstants.name}
                    </div>
                </div>
            </div>

        </>
    )
}
