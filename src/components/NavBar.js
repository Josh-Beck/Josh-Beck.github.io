import { Link } from "gatsby-link"
import * as React from "react"
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LinkedIn } from "../icons/linkedin"
import { GitHub } from "../icons/github"

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { 
        name: <LinkedIn />,
        href: 'https://www.linkedin.com/in/joshuatbeck/'
    },
    { 
        name: <GitHub />,
        href: 'https://github.com/Josh-Beck'
    }
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <div>
        <div className="fixed inset-x-0 top-0 z-10 bg-gray-300">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5 transition ease-in-out delay hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <span className="sr-only"></span>
                <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="home"
                />
                </Link>
            </div>
            <div className="flex lg:hidden ">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-blue-700 transition ease-in-out delay hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    {item.name}
                </Link>
                ))}
            </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt=""
                    />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </Dialog.Panel>
            </Dialog>
        </div>
        {/* SIDEBAR BOILERPLATE */}
        <div className="fixed h-screen w-10 flex items-center bg-green-800">
            <ul className="grid grid-flow-row grid-flow-1 gap-10 text-center">
                <li className="col-span-2">
                    x
                </li>
                <li className="col-span-2">
                    y
                </li>
                <li className="col-span-2">
                    z
                </li>
            </ul>
        </div>
        </div>
)}
