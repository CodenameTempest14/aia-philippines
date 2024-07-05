"use client";

import Link from "next/link";

type HeaderItemProps = {
    children?: React.ReactNode;
    href?: string;
    className?: string;
};

const HeaderItem = ({children, href, className}: HeaderItemProps) => {
    return (
        <div 
            className={"h-20 flex flex-row items-center font-semibold text-black cursor-pointer " + className}>
                <Link   
                    href={href ?? "#"}
                    target={href && "_blank"}
                >
                    {children}
                </Link>
        </div>
    );
};


export default HeaderItem;