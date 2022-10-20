import React from 'react'
import { IconBrandFacebook,IconBrandInstagram,IconBrandTwitter,IconBrandYoutube,IconBrandLinkedin,IconBrandPinterest } from '@tabler/icons'

// in individual property there are sub collapsable sections for each details
// this is the social links section data

export default function SocialLinks() {
    return (
        <>
            <div className="bg-white rounded-default p-2">
                <div value="overview">
                    <div className="mb-4"><span className='font-bold my-4'>Social links</span></div>
                    <div>
                        {/* Basic informations */}
                        <div className="grid pc:grid-cols-6 tablet:grid-cols-6 grid-cols-5 gap-2 text-base">
                            {/* Facebook */}
                            <div>
                                <IconBrandFacebook size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                            {/* Twitter */}
                            <div>
                                <IconBrandTwitter size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                            {/* Instagram */}
                            <div>
                                <IconBrandInstagram size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                            {/* Youtube */}
                            <div>
                                <IconBrandYoutube size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                            {/* LinkedIn */}
                            <div>
                                <IconBrandLinkedin size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                            {/* Pinterest */}
                            <div>
                                <IconBrandPinterest size={50} className="bg-primary/20 hover:bg-primary/10 cursor-pointer duration-300 text-primary p-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

