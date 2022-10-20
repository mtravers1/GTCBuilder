import { Container } from '@mantine/core';
import PrimaryButton from '../components/PrimaryButton';
import Image from "next/image"
import { routes } from '../constants/Routes';

// custom 404 page, route not fount

export default function Index() {
    return (
        <Container size="xl" className="mt-24">
            <div className="flex flex-col justify-center items-center h-full space-y-4">
                <div>
                    <Image src="/images/property.svg" width={500} height={400} alt="property image" />
                </div>
                <h1 className="tablet:text-8xl text-6xl font-black text-primary">404</h1>
                <div className="font-bold text-primary/80">Oopz! There is no property found here</div>
                <div>
                    <PrimaryButton link={routes.home}>
                        Go home
                    </PrimaryButton>
                </div>
            </div>
        </Container>
    );
}