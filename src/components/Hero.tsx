import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <section className='bg-new-green-300 w-full'>
            <div className='w-full relative flex gap-3'>
                <div className='relative w-full pt-3'>
                    <h1 className='text-[64px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Master the Market with <span className='text-new-green-500'>Confidence.</span></h1>
                    <p className='text-3xl font-bold text-new-dark-500 mt-3 flex gap-2 items-end'
                        style={{ lineHeight: '0.7' }}>
                        Learn. Trade. <span className='text-new-green-500'>Grow.</span>
                        <img src="/assets/svg/grow.svg" alt="growth" className='inline' />
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        Learn to trade smart, invest wisely, and grow your financial future with our trusted stock market services and easy-to-understand guidance.
                    </p>

                    <div className='flex gap-3 mt-10'>
                        <Button name='Contact' path='#'
                            calssName='text-new-blue-500 border border-new-blue-500 py-3 px-10 text-2xl font-semibold rounded-md hover:bg-new-blue-500 hover:text-white transition duration-300 ease-in-out'
                        />
                        <Button name='Join Now' path='#' calssName='border border-new-blue-500 py-3 px-10 text-2xl font-semibold rounded-md bg-new-blue-500 text-white hover:bg-new-blue-300 hover:border-new-blue-300' />

                    </div>

                </div>
                <div className='relative w-full'>
                    <img src="/assets/svg/hero.svg" alt="hero" className='' />
                </div>
            </div>
        </section>
    )
}
