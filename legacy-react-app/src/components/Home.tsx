import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { HomeProps } from '../types';
import stingray from "../images/stingray.jpeg";
import Z06 from "../images/Z06.jpg";
import ERAY from "../images/eray.jpg";
import ZR1 from "../images/ZR1.webp";

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link to="/orders/new/stingray">
                            <img
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src={stingray}
                                alt="Stingray"
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">Stingray</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link to="/orders/new/z06">
                            <img
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src={Z06}
                                alt="Z06"
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">Z06</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link to="/orders/new/eray">
                            <img
                                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                                src={ERAY}
                                alt="ERAY"
                            />
                        </Link>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-semibold text-xl drop-shadow-lg">ERAY</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none overflow-hidden relative group cursor-pointer">
                    <CardContent className="p-0">
                        <Link to="/orders/new/zr1">
                            <div className="effect-duke relative">
                                <img
                                    className="w-full h-64 object-cover rounded-lg transition-all duration-300"
                                    src={ZR1}
                                    alt="ZR1"
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