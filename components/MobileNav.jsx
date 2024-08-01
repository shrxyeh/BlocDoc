"use client"

import {Sheet,SheetContent,SheetTrigger} from '@/components/ui/sheet';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "contact",
        path: "/contact",
    }
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justigy-center items-center'>
                <CiMenuFries className='text-[32px] text-red hover:text-red-hover'/>
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/*logo*/}
                <div className="text-2xl mt-32 mb-40 text-center">
                    <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                    <span className="hover:text-red">BlocDoc</span><span className="text-accent">.</span>
                    </h1>
                    </Link>
                </div>
                <navbar className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link,index) => {
                        return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${
                                link.path ===  pathname  
                                && "text-red border-b-2 border-red"
                            } text-xl capitalize font-medium hover:text-red transition-all`}>
                            {link.name}
                        </Link>
                        );
                    })}
                </navbar>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav