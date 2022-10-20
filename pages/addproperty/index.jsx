import { useState } from 'react';
import { Stepper, Group, Container } from '@mantine/core';
import ImagesStep from '../../components/AddProperty/ImagesStep';
import NormalButton from '../../components/NormalButton';
import DetailsStep from '../../components/AddProperty/DetailsStep';
import OverviewStep from '../../components/AddProperty/OverviewStep';
import DescriptionStep from '../../components/AddProperty/DescriptionStep';
import AddressStep from '../../components/AddProperty/AddressStep';
import FeatuersStep from '../../components/AddProperty/FeaturesStep';
import AssetsStep from '../../components/AddProperty/AssetsStep';
import ConsultantStep from '../../components/AddProperty/ConsultantStep';
import SocialLinksStep from '../../components/AddProperty/SocialLinksStep';

// add new property page 
// route: /addproperty

export default function Index() {
    // Active step state
    const [active, setActive] = useState(0);

    // Next and previev buttons function
    const nextStep = () => setActive((current) => (current < 10 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    return (
        <>
            <section className='mt-40 mb-2'>
                <Container>
                    {/* Stepper component */}
                    <Stepper color="teal" active={active} orientation="vertical" onStepClick={setActive}>

                        {/* Images and Details step*/}
                        <Stepper.Step label="Images and details" description="Top carousel and details section">
                            <div className="bg-white p-2 rounded-default">
                                <div className="font-bold text-lg">Image carousel</div>
                                <ImagesStep />
                                <div className="font-bold mt-2 text-lg">Details</div>
                                <DetailsStep />
                            </div>
                        </Stepper.Step>

                        {/* Overview and Details step */}
                        <Stepper.Step label="Description/Overview step" description="Description and Overview details">
                            <div className="bg-white p-2 rounded-default">
                                <div className="font-bold text-lg">Overview section</div>
                                <OverviewStep />
                                <div className="font-bold mt-2 text-lg">Description section</div>
                                <DescriptionStep />
                            </div>
                        </Stepper.Step>

                        {/* Address and features step*/}
                        <Stepper.Step label="Address/Features step" description="Address and features section">
                            <div className="bg-white p-2 rounded-default">
                                <div className="font-bold text-lg">Address section</div>
                                <AddressStep />
                                <div className="font-bold mt-2 text-lg">Features section</div>
                                <FeatuersStep />
                            </div>
                        </Stepper.Step>


                        {/* Assets Step */}
                        <Stepper.Step label="Assets step" description="Assets embedded links">
                            <div className="bg-white p-2 rounded-default">
                                <div className="font-bold text-lg">Asset section</div>
                                <AssetsStep />
                            </div>
                        </Stepper.Step>

                        {/* Consultant and Social Step */}
                        <Stepper.Step label="Social Step " description="Social links Step ">
                            <div className="bg-white p-2 rounded-default">
                                <div className="font-bold text-lg">Consultant section</div>
                                <ConsultantStep />
                                <div className="font-bold mt-2 text-lg">Social links section</div>
                                <SocialLinksStep />
                            </div>
                        </Stepper.Step>
                    </Stepper>

                    {/* Next and previous buttons */}
                    <Group position="center" mt="xl">
                        <NormalButton onClick={prevStep}>Back</NormalButton>
                        <NormalButton onClick={nextStep}>Next step</NormalButton>
                    </Group>
                </Container>
            </section>
        </>
    );
}