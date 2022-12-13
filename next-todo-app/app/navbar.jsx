/* [CLIENT] COMPONENT • Navigation Bar */
'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';

export default function NavBar() {

        useEffect(() => {
                import('bootstrap/dist/js/bootstrap');
        }, [])

        return (
                <>
                        <nav className='navbar navbar-dark navbar-expand-md bg-black'>
                                <div className='container-fluid'>

                                        <Link
                                                className='navbar-brand fw-bold d-block-inline py-2'
                                                href='/'
                                        > NEXT.jsx | TODO
                                        </Link>

                                        <button
                                                className='navbar-toggler'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#navbarNav'
                                                aria-controls='navbarNav'
                                                aria-expanded='false'
                                                aria-label='Toggle navigation'
                                        > <span className='navbar-toggler-icon'></span>
                                        </button>

                                        <div className='collapse navbar-collapse' id='navbarNav'>
                                                <ul className='navbar-nav'>

                                                        <li className='nav-item'>
                                                                <Link
                                                                        className='nav-link active'
                                                                        aria-current='page'
                                                                        href='/'>
                                                                        HOME
                                                                </Link>
                                                        </li>

                                                </ul>

                                        </div>

                                </div>
                        </nav>
                </>
        );
}
