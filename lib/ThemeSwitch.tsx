"use client";

import { useEffect, useState } from "react";

export function ThemeSwitch() {
    // bool representing the current theme, can be true false null.
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        // prohibits running on the server side
        if (typeof window === "undefined") return;
        
        const saved = window.localStorage.getItem("theme"); // gets saved theme

        if (saved === "dark") {
            setIsDark(true);
        } else if (saved === "light") {
            setIsDark(false);
        } else {
            // get the browser preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
            
        }
    }, []); // empty array ensures it runs after initial render

    // whenever isDark changes change style
    useEffect(() => {
        // ensures doesnt run on server
        if (isDark === null || typeof window === "undefined") return;

        const root = document.documentElement;

        // if isDark is active, add dark class to hmtl and remember this choice in the local memory
        if (isDark){
            root.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    }, [isDark]); // reruns every time isDark changes

    if (isDark === null){
        return null;
    }

    // Main render of the toggle button
    return (
        <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="theme-toggle-button"
        >
            {isDark ? "Light mode" : "Dark mode"}
        </button>
    );
}