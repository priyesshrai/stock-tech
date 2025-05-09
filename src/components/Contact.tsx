import React from 'react'

export default function Contact() {
    return (
        <section className='w-full relative bg-new-light-500'>
            <div className='w-full relative'>
                <div className='w-full relative bg-new-green-300 rounded-2xl p-8'>
                    <div className='w-full relative flex gap-4 max-md:flex-col-reverse max-md:gap-10'>
                        <div className='relative w-full '>
                            <div className='w-full text-center'>
                                <h2 className='text-4xl text-new-green-500 font-bold'>Contact Us</h2>
                            </div>
                            <div className='w-full mt-5 flex flex-col gap-5'>
                                <div className='w-full'>
                                    <input type="text" name='name' placeholder='Name'
                                        className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500' />
                                </div>
                                <div className='w-full'>
                                    <input type="email" name='email' placeholder='Email'
                                        className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500' />
                                </div>
                                <div className='w-full'>
                                    <input type="number" name='number' placeholder='Contact No.'
                                        className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500' />
                                </div>
                                <div className='w-full'>
                                    <textarea name="message" id="message" placeholder='Message' rows={5} className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500'></textarea>
                                </div>
                                <div className='w-full flex justify-end'>
                                    <button type="submit" className='px-10 py-2 text-2xl font-bold rounded-md cursor-pointer bg-new-green-500 text-new-light-500 hover:bg-[#428F21] '>Send</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full flex justify-center'>
                            <img src="/assets/svg/contact-02.svg" alt="hero" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
