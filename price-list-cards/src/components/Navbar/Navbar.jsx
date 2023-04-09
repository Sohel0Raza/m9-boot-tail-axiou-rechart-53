import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon, BugAntIcon} from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Blog',
            path: '/blog'
        },
        {
            id: 5,
            name: 'Products',
            path: '/products'
        }
    ];

    return (
        <nav className='bg-lime-100 w-10/12 mx-auto flex items-center justify-between'>
            <div className='ml-8'>
            <BugAntIcon className="h-8 w-8 text-rose-500" /> 
            </div>
            <div className='mr-8'> 
            <div onClick={()=> setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ? 
                 <XMarkIcon className="h-6 w-6 text-blue-500" /> 
                : <Bars4Icon className="h-6 w-6 text-blue-500" />  
                }
                </span>
            </div>
            <ul className={`md:flex justify-center absolute md:p-3 md:pl-5 md:static duration-500 ${open ? 'top-6 start-3/4' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;