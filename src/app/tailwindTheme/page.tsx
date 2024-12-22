"use client"

import { useState } from "react"

export default function TailwindTheme() {

    const [mode, setMode] = useState(true)
    const handleTheme = () => {
        setMode(!mode)
    }
    return (
        <div className={`${mode && "dark"}`}>
            <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
                <div className="flex justify-between w-1/3">
                    <button className="bg-theme1-primary text-white py-2 px-4 rounded hover:bg-theme1-secondary">
                        Theme 1
                    </button>

                    <button className="bg-theme2-primary text-white py-2 px-4 rounded hover:bg-theme2-secondary">
                        Theme 2
                    </button>

                    <button className="bg-theme3-primary text-white py-2 px-4 rounded hover:bg-theme3-secondary">
                        Theme 3
                    </button>
                </div>
            </div>
        </div>
    )
}