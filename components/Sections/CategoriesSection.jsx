import React from 'react'
import { Fade } from "react-awesome-reveal";
import ImageCard from '../ImageCard'
import PlainCard from '../PlainCard'

// in home page there are four sections 
// this is the category section

export default function CategoriesSection({ data }) {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 tablet:grid-cols-2 pc:grid-cols-4 gap-4">
                    {/* Title card*/}
                    <div>
                        <PlainCard>
                            <div className="font-bold text-2xl text-primary">
                                Categories
                            </div>
                            <div className="text-black/50 font-bold italic">Browse by category</div>
                        </PlainCard>
                    </div>
                    <Fade cascade direction="right" triggerOnce>
                        {/*Individual Category */}
                        {data.map((cat, index) =>
                            <div key={index}>
                                <ImageCard title={cat.title} count={cat.listings} src={cat.img} />
                            </div>
                        )}
                    </Fade>
                </div>
            </section>
        </>
    )
}
