import React, { ReactElement } from 'react';
import {motion} from 'framer-motion';

interface Props {
    
}

function Projects({}: Props): ReactElement {
    const projects = [1,2,3,4,5];
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen'>
                        <motion.img
                        initial={{y: -300, opacity: 0}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true}}
                         src='https://github.com/ProgrammingWithGaurav/nextjs-instagram-clone/raw/main/public/screenshot.png' alt='' />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl text-center font-semibold'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span>
                             Instagram Clone</h4>
                        
                        <p className='text-lg text-center md:text-left'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium odit, harum illo veritatis dolores soluta repudiandae saepe tenetur enim dicta accusamus ducimus. Asperiores, dicta! Necessitatibus magni eaque id cumque error aliquam. Magni ex ad sunt, quasi deserunt cupiditate voluptatibus harum sapiente placeat accusantium tempore inventore eveniet natus perferendis veritatis officia! Adipisci officia placeat sint? Asperiores molestias necessitatibus placeat adipisci.
                        </p>
                    </div>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects
