import React from 'react';

export type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    thumbnail: string;
    images: Array<string>;
    rating: string;
};

export type Category = {
    category?: string;
};