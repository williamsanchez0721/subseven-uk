'use client'
import Link from 'next/link'
import NavLink from './NavLink'
import ShoppingCart from '@/components/ui/cart/ShoppingCart'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuVariants = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent md:py-6">
            <div className="container mx-auto px-6 flex items-center justify-between relative z-[60]">
                <div className="flex items-center gap-2">
                    <Image
                        src="/montacarga.png"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                    <Link href="/" className="text-white text-3xl font-bold tracking-normal hover:text-gray-200 transition-colors hidden md:block">
                        Subseven
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:gap-8">
                    <button className="bg-[#FFFF00] text-black px-4 md:px-8 py-2.5 rounded-full font-medium hover:bg-[#39FF14] transition-colors duration-200">
                        BUY NOW
                    </button>
                    <ShoppingCart />
                    <button
                        className={`bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-200`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="container mx-auto px-6 py-24 h-screen">
                            <div className="flex flex-col h-full">
                                <div className="flex-1 flex justify-center items-center">
                                    <NavLink />
                                </div>

                                <motion.div 
                                    className="absolute right-6 bottom-8"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="flex items-center rounded-xl gap-6 bg-white">
                                        <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-medium transition-colors duration-200">
                                            DOWNLOAD
                                            <span className="block text-xs text-gray-600 mt-1">SUBSEVEN APP</span>
                                        </button>
                                        <Image
                                            src="/qrcode.svg"
                                            alt="QR Code"
                                            width={100}
                                            height={100}
                                            className="w-32 h-32 bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}