'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from './Button';

type MenuItem = {
    item: string;
    path: string;
};

export default function Header() {
    const path = usePathname()

    const menuItems: MenuItem[] = [
        {
            item: "Home",
            path: '/'
        },
        {
            item: "About",
            path: "about"
        },
        {
            item: "Investment",
            path: "investment"
        },
        {
            item: "Services",
            path: "services"
        },
        {
            item: "Blogs",
            path: "blogs"
        },
    ]
    return (
        <header className='w-full relative'>
            <nav className='w-full relative flex justify-between items-center bg-new-green-300 gap-5'>
                <div className='relative w-[250px]'>
                    <Link href='/'>
                        <Image src='/assets/logo/logo.png'
                            alt='StockTech Investment'
                            width={500}
                            height={200}
                            style={{ width: "180px", height: "auto" }}
                        />
                    </Link>
                </div>

                <div className='relative'>
                    <ul className='flex items-center gap-5'>
                        {
                            menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link href={item.path}
                                        className={` hover:text-new-green-500 font-medium text-lg 
                                        ${path.startsWith(item.path) ? 'text-new-green-500' : 'text-new-blue-300'} `}>
                                        {item.item}
                                    </Link>
                                </li>

                            ))
                        }
                        <li className='relative'>
                            <Button
                                name='Contact Us'
                                path='/'
                                calssName='relative font-semibold flex items-center justify-center bg-new-blue-500 text-new-light-500 px-3 py-[8px] rounded-md hover:bg-new-blue-300 text-lg'
                            />
                        </li>
                    </ul>
                </div>

                <div className='relative w-[40px] h-[40px] hidden'>

                </div>
            </nav>
        </header>
    )
}
