import React from 'react'
import Button from './Button'

export default function Services() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className="w-full flex gap-3">
                <div className="w-full relative">
                    <img src="/assets/svg/services.svg" alt="hero" className='' />
                </div>
                <div className="relative w-full">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Stock Market Training in <strong className='text-new-green-500'>Varanasi.</strong>
                    </h2>
                    <p className='text-xl font-medium text-new-dark-300 mt-5'>
                        Empower your investment strategies with our comprehensive Stock Market Training in Varanasi.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5'>
                        Our expert trainers provide hands-on guidance and practical knowledge on various aspects of the stock market, including technical analysis, fundamental analysis, and risk management.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5'>
                        Upgrade your skills and gain a competitive edge in the stock market with our tailored training programs. Sign up for the best Stock Market Training in Varanasi today!
                    </p>
                    <div className='relative mt-5 w-full'>
                        <Button name='Enquiry Now' path='#' calssName='block w-[fit-content] border border-new-blue-500 py-5 px-8 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}
