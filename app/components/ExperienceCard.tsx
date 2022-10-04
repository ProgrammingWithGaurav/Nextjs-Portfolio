import React from 'react';
import { motion } from 'framer-motion';

interface Props {

}

export const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center flex-shrink-0 space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 cursor-pointer opacity-40 hover:opacity-100 transition-opacity transition-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-top object-cover'
                src='https://avatars.githubusercontent.com/u/88154142?v=4' alt='' />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of XYZ</h4>
                <p className='font-bold text-2xl mt-1'>XYZ</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3w5W7QtL-0dzvdO7eE-e_64dBoG4NjsclLw&usqp=CAU' alt='' />
                    <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3w5W7QtL-0dzvdO7eE-e_64dBoG4NjsclLw&usqp=CAU' alt='' />
                    <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3w5W7QtL-0dzvdO7eE-e_64dBoG4NjsclLw&usqp=CAU' alt='' />
                </div>
                <p className='uppercase text-gray-300 py-5'>Started work... * Ended...</p>

                <ul className='list-dic space-y-4 text-lg ml-5'>
                    <li>Summary Points Summary Points Summary</li>
                    <li>Summary Points Summary Points Summary</li>
                    <li>Summary Points Summary Points Summary</li>
                    <li>Summary Points Summary Points Summary</li>
                    <li>Summary Points Summary Points Summary</li>
                </ul>
            </div>
        </article>
    )
}
