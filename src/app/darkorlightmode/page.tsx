"use client"

import { useState } from "react"

export default function DarkOrLightMode() {

    const [mode, setMode] = useState(true)
    const handleTheme = () => {
        setMode(!mode)
    }
    return (
        <div className={`${mode && "dark"}`}>
            <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
                <div className="bg-black dark:bg-white text-white dark:text-black font-sans flex flex-col
            gap-5 p-5 w-screen sm:w-1/2 lg:w-1/3">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">Tailwind Theme</p>
                        <button className="bg-white dark:bg-black text-black dark:text-white rounded-full w-10 h-10 flex justify-center items-center"
                            onClick={() => handleTheme()}>
                            {!mode && <p>dark</p>}
                            {mode && <p>light</p>}
                        </button>
                    </div>
                    <p>click toggle button to swith between the mode</p>
                    <p className="text-sm text-justify">Dark and light themes in web apps offer users options for interface appearance. Dark themes use dark backgrounds with light text for reduced eye strain in low-light conditions. Light themes feature light backgrounds with dark text for clarity in bright environments. Users choose based on preference and usability needs.</p>
                    <a href="https://youtu.be/NxIBnvb8B7Y?si=OX7Z-zia6EZDEYpb" className="underline">reference video</a>
                </div>
            </div>
        </div>
    )
}