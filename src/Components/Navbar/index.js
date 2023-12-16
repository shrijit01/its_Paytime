import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <header className="border  fixed top-0 z-10 bg-white  w-full">
                <nav className="mx-auto flex max-w-7xl items-center justify-between  px-2 py-2 lg:px-0" aria-label="Global">
                    <div className="flex lg:flex-1 h-auto ">
                        <a href="#" className="-m-1.5 p-1.5 h-full">
                            <span className="sr-only">ER</span>
                            <img className="h-20 w-auto object-cover" src="/images/logoP.png" alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center justify-center">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Home
                                {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> */}
                            </Popover.Button>
                        </Popover>

                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 linK">
                            About us
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 linK">
                            Contact us
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 linK">
                            Support
                        </a>
                        <button className=' text-white px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500'  > 
                         <a href='https://play.google.com/store/apps/details?id=com.rachiapps.exchangeopinionrewards&referrer=utm_source%3Dappbrain%26utm_medium%3Dappbrain_web%26utm_campaign%3Dappbrain_web'>   Get started</a>
                        </button>

                    </Popover.Group>
                    <div className="hidden  lg:hidden lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a> */}
                        {/* <button className=' text-white px-5 py-2 rounded-lg'>Get started</button> */}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5 h-full">
                                <span className="sr-only">ER</span>
                                <img className="h-20 w-auto object-cover" src="/images/logoP.png" alt="" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Home
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                {/* <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...products, ...callsToAction].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel> */}
                                            </>
                                        )}
                                    </Disclosure>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        About us
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Contact us
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        updates
                                    </a>
                                </div>
                                <div className="py-6">
                                    {/* <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a> */}
                                    <button className='bg-gradient-to-r from-blue-500 to-green-500 text-white px-5 py-2 rounded-lg'>Get started</button>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header >
        </>
    )
}
