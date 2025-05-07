import Link from 'next/link'
import React from 'react'
import Button from './Button'

export default function Blogs() {
    return (
        <section className='bg-new-light-500 w-full relative'>
            <div className='w-full relative'>
                <h2 className='text-[40px] text-center max-w-3xl mx-auto  font-bold text-new-blue-300 '
                    style={{ lineHeight: '1.1' }}>
                    Explore the <strong className='text-new-green-500'>Latest.</strong> in Stock Market Trends, Tips & Insights
                </h2>

                <div className='w-full mt-12 relative'>
                    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5'>
                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full'>
                                    <img src="/assets/blogs/blog-1.jpg" alt="" className='h-full' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='#' className='block font-medium text-new-blue-300 text-lg'
                                        style={{ lineHeight: "1.1" }}>
                                        U.S. Tariffs Shake Indian Markets: What&apos;s Happening and What&apos;s Next?
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        In April 2025, the Indian stock market experienced significant volatility following the U.S. announcement of a 26% tariff on Indian imports, part of President Trump&apos;s “Liberation Day” tariff policy. This move intensified global trade ten
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Button path='#' name='Read More' calssName='text-new-blue-300 underline' />
                                </div>
                            </div>
                        </div>

                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full'>
                                    <img src="/assets/blogs/blog-2.jpg" alt="" className='h-full' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='#' className='block font-medium text-new-blue-300 text-lg leading-[1.1]'>
                                        Stock Market Meltdown: What Triggered Sensex and Nifty&apos;s Biggest Crash in 10 Months?
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        Keywords: Market crash, Nifty/Sensex April 2025, global trade war impact On April 7, 2025, the Indian stock markets faced a significant downturn, marking one of the most substantial single-day declines in the past decade. The BSE Sen......
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Button path='#' name='Read More' calssName='text-new-blue-300 underline' />
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full'>
                                    <img src="/assets/blogs/blog-3.jpg" alt="" className='h-full' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='#' className='block font-medium text-new-blue-300 text-lg leading-[1.1]'>
                                        RBI Rate Cut in Focus: How Bond Yields and Investor Sentiment Are Shifting in April 2025
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        Keywords: RBI monetary policy, bond yield trends, market outlook The financial landscape in India has been buzzing with anticipation as the Reserve Bank of India (RBI) recently made a pivotal move to address the evolving economic challenges.
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Button path='#' name='Read More' calssName='text-new-blue-300 underline' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
