import React from 'react';
import type { Metadata } from 'next';
import Order from "../../../../components/Order";

interface OrderPageProps {
    params: Promise<{
        model: string;
    }>;
}

// Model information for metadata
const modelInfo = {
    stingray: {
        title: 'Corvette Stingray',
        description: 'Configure your new Corvette Stingray with factory and dealer options. Complete customer information and finalize your purchase order.',
        image: '/images/stingray.jpeg'
    },
    z06: {
        title: 'Corvette Z06',
        description: 'Configure your new Corvette Z06 with factory and dealer options. Complete customer information and finalize your purchase order.',
        image: '/images/Z06.jpg'
    },
    eray: {
        title: 'Corvette E-Ray',
        description: 'Configure your new Corvette E-Ray with factory and dealer options. Complete customer information and finalize your purchase order.',
        image: '/images/eray.jpg'
    },
    zr1: {
        title: 'Corvette ZR1',
        description: 'Configure your new Corvette ZR1 with factory and dealer options. Complete customer information and finalize your purchase order.',
        image: '/images/ZR1.webp'
    }
};

export async function generateMetadata({ params }: OrderPageProps): Promise<Metadata> {
    const { model } = await params;
    const modelData = modelInfo[model as keyof typeof modelInfo] || modelInfo.stingray;

    return {
        title: `Configure Your ${modelData.title}`,
        description: modelData.description,
        keywords: ['Corvette configuration', model, 'factory options', 'dealer options', 'purchase order', 'Chevrolet'],
        openGraph: {
            title: `Configure Your ${modelData.title} | Corvette Purchase Order`,
            description: modelData.description,
            images: [
                {
                    url: modelData.image,
                    width: 1200,
                    height: 630,
                    alt: `${modelData.title} Configuration`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `Configure Your ${modelData.title}`,
            description: modelData.description,
            images: [modelData.image],
        },
    };
}

export default async function OrderPage({ params }: OrderPageProps) {
    const { model } = await params;
    return <Order key={model} model={model}/>;
}
