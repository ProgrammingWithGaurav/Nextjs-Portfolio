import React, { ReactElement } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

interface Props {

}

export default function Hero({ }: Props): ReactElement {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name is Gaurav", "Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"], loop: true, delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img src='https://avatars.githubusercontent.com/u/88154142?v=4' className='rounded-full relative h-32 w-32 mx-auto object-cover' alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0a' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
