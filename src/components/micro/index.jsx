import React from "react"

export const PageLable = ({className,pageNo,title}) => {
    return (
        <div className={`${className} relative mb-10 flex gap-4 md:gap-8 w-full items-center justify-between text-left text-2xl md:mb-12 md:text-3xl`}>
            <div className={` capitalize flex flex-1`}>
                <span className='relative text-dk-gold-300 dark:text-lg-blue-300'>{pageNo}.&nbsp;</span>
                <span className="break-normal whitespace-nowrap">{title}</span>
            </div>
            <span className='gold-line block border-t-8 border-solid border-dk-gold-300 dark:border-lg-blue-300'></span>
        </div>
    )
}