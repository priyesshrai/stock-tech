import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='relative w-full bg-new-blue-500'>
                <footer className='w-full relative grid grid-cols-[42%_1fr_1fr] gap-3'>
                    <div className='w-full relative flex flex-col gap-5'>
                        <img src='/assets/logo/logo.png' className='w-1/2' />

                        <div className='w-full max-w-[400px] text-new-light-500 px-4'>
                            <p>At Stocktech Investments, we are committed to helping you succeed in the market by providing you with the knowledge and tools you need.</p>
                        </div>

                        <div className='w-full flex gap-3 px-4'>
                            <div
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/insta.svg" alt="social media" />
                            </div>
                            <div
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/yt.svg" alt="social media" />
                            </div>
                            <div
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/fb.svg" alt="social media" />
                            </div>
                            <div
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/twitter.svg" alt="social media" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-10'>
                        <h2 className='text-new-green-500 text-4xl font-bold'>Quick Links</h2>
                        <div className='w-full flex flex-col gap-1'>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>Home</Link>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>About Us</Link>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>Services</Link>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>Investment</Link>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>Blogs</Link>
                            <Link href="#" className='text-new-light-500 text-lg hover:text-new-green-500'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-10'>
                        <h2 className='text-new-green-500 text-4xl font-bold'>Get to Us</h2>
                        <div className='w-full'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.618134989147!2d77.22950977538735!3d28.612912975679947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e3a8823e33%3A0xe1793d4eec665eb!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1683978435226!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: "0", borderRadius: "10px" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </footer>

            </section>
            <div className='w-full relative bg-new-blue-500 py-5 border-t border-new-blue-300 text-center text-new-green-300 font-semibold'> 
                <p>Copyright {new Date().getFullYear()} @ StockTech Investments | Developed by <a href="" className='text-new-green-500'>Wizards.</a></p>
            </div>
        </>
    )
}
