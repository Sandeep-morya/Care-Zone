﻿import { useEffect, useState } from "react";
import { PiCaretRightBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const themes = {
    default: {
        primary: "#F84365",
        secondary: "#050A24",
    },
    new: {
        primary: "#FF3131",
        secondary: "#058789",
    },
};

const Theme = () => {
    const [showTheme, setShowTheme] = useState(false);
    const toggle = () => setShowTheme((x) => !x);

    useEffect(() => {
        window.onscroll = () => setShowTheme(false);
    }, []);
    return (
        <div
            className={twMerge(
                "fixed left-0 bottom-10 transition duration-500  flex gap-4 bg-white/10 backdrop-blur-sm z-50 rounded-r-full shadow -translate-x-[4.5rem]",
                showTheme && "translate-x-0",
            )}>
            <div className="h-8  flex pl-1  items-center">
                <a href="https://new.carezonelko.com/" className="flex justify-center items-center h-full">
                    <div style={{ backgroundColor: themes.new.primary }} className="h-1/2 aspect-square rounded-full translate-x-1" />
                    <div style={{ backgroundColor: themes.new.secondary }} className="h-1/2 aspect-square rounded-full" />
                </a>
                <a href="https://www.carezonelko.com/" className="flex justify-center items-center h-full">
                    <div style={{ backgroundColor: themes.default.primary }} className="h-1/2 aspect-square rounded-full translate-x-1" />
                    <div style={{ backgroundColor: themes.default.secondary }} className="h-1/2 aspect-square rounded-full" />
                </a>
                <div onClick={toggle} className={twMerge("transition-all px-2 duration-500 hover:text-primary", showTheme && "rotate-180")}>
                    <PiCaretRightBold />
                </div>
            </div>
        </div>
    );
};

export default Theme;
