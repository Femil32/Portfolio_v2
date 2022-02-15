import React from "react";

function Blog({ BlogData }) {
    return (
        <>
            <div className='flex justify-center items-center flex-col'>
                <div className='relative flex justify-center items-center gap-[50px] w-full flex-wrap mb-10'>
                    {BlogData.length > 0 &&
                        BlogData.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.links.preview}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='relative text-black-300 flex flex-row justify-center items-center w-[300px] h-[300px] overflow-hidden group cursor-pointer  transition-transform duration-300 blogBox'
                            >
                                <div className='overflow-hidden p-4 absolute top-0 left-0 flex flex-col justify-start items-start bg-black-400 w-full h-full transition-transform duration-300 transform flex-grow-3 group-hover:-translate-x-full'>
                                    <h1 className='text-xl font-medium '>{blog.title}</h1>
                                    <div className='mt-auto border-t-2 pt-2 w-full'>
                                        <ul className='flex gap-2 mb-2'>
                                            {blog.tags.map((tag, index) => (
                                                <li key={index}>#{tag}</li>
                                            ))}
                                        </ul>
                                        <p>{blog.date}</p>
                                    </div>
                                </div>
                                <div className='overflow-hidden absolute top-0 left-full flex justify-center items-center bg-green-100 w-full h-full transition-transform duration-300 transform flex-grow-3 group-hover:-translate-x-full'>
                                    <img
                                        src={blog.links.img}
                                        alt={blog.title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </a>
                        ))}
                </div>
                <a
                    href='https://dev.to/femil'
                    className='px-6 py-2 border-2 border-gold-300 hover:bg-gold-300 hover:text-black-100'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    See More
                </a>
            </div>
        </>
    );
}

export default Blog;
