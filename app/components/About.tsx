import React from 'react';
import {motion} from 'framer-motion';

interface Props {
    
}

const About = (props: Props) => {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img 
                initial={{x:-200, opacity: 0}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{duration: 1.2}}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                src='https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h1 className='text-4xl font-semibold '>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h1>

                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos eum voluptates sint. Officiis suscipit facere quaerat minus nesciunt nobis dolore qui debitis consectetur minima molestiae molestias eum inventore placeat, nisi officia ab dolorem nemo a, quidem iusto fugit. Alias quas possimus facere itaque similique recusandae? Iure dolorem eligendi facere dicta repudiandae perspiciatis cumque rem maxime amet distinctio quia minus voluptatibus autem, omnis neque quo numquam, adipisci quibusdam molestiae qui similique nam consequuntur dolores a. Inventore, asperiores recusandae, ut obcaecati delectus voluptatibus officiis maiores quos nihil excepturi nisi, dolores necessitatibus ducimus? Eum non pariatur placeat dolore explicabo iste nostrum voluptatibus.
                </p>
            </div>
        </motion.div>
    )
}

export default About
