import React from 'react';
import {Providers} from "./provider";


export default async function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {    return (
        <div>
            <Providers>{children}</Providers>
        </div>
    );
};