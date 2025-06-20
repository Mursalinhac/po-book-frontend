import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { HomeProps } from '../types';

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link href="/orders/new/stingray">
                            <Image
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src="/images/stingray.jpeg"
                                alt="Stingray"
                                width={600}
                                height={256}
                                priority
                                style={{ aspectRatio: '600/256' }}
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">Stingray</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link href="/orders/new/z06">
                            <Image
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src="/images/Z06.jpg"
                                alt="Z06"
                                width={600}
                                height={256}
                                priority
                                style={{ aspectRatio: '600/256' }}
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">Z06</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link href="/orders/new/eray">
                            <Image
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src="/images/eray.jpg"
                                alt="ERAY"
                                width={600}
                                height={256}
                                priority
                                style={{ aspectRatio: '600/256' }}
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">ERAY</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link href="/orders/new/zr1">
                            <div className="effect-duke relative">
                                <Image
                                    className="w-full h-64 object-cover rounded-lg transition-all duration-300"
                                    src="/images/ZR1.webp"
                                    alt="ZR1"
                                    width={600}
                                    height={256}
                                    priority
                                    style={{ aspectRatio: '600/256' }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-2xl font-bold">Coming Soon</p>
                                </div>
                            </div>
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">ZR1</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
};

export default Home;