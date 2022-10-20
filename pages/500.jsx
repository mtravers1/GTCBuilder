import { Container } from '@mantine/core';
import Image from "next/image"
// custom 500 page, server side errors

export default function Index() {
    return (
        <Container size="xl" className="mt-24">
            <div className="flex flex-col justify-center items-center h-full space-y-4">
                <div>
                    <Image src="/images/server.svg" width={500} height={400} alt="property image" />
                </div>
                <h1 className="tablet:text-8xl text-6xl font-black text-primary">500</h1>
                <div className="font-bold text-primary/80">Oopz! Something went wrong please try again in few minutes</div>
            </div>
        </Container>
    );
}