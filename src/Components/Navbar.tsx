"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "black"
      : "black"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    let localtheme = localStorage.getItem("theme");
    let htmlElement = document.querySelector("html");
    if (htmlElement && localtheme) {
      htmlElement.setAttribute("data-theme", localtheme);
    }
  }, [theme]);
  return (
    <>
      <nav className="w-5/6 mx-auto">
        <div className="navbar bg-base-100 flex items-start ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">A Web3 Todolist</a>
          </div>
          <div className="flex-none">
            <div className="m-3">
              <w3m-account-button />
            </div>
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn m-1">
                Themes
                <svg
                  width="12px"
                  height="12px"
                  className="h-2 w-2 fill-current opacity-60 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048">
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] relative p-2 shadow-2xl bg-base-300 rounded-box">
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Black"
                    value="black"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="light"
                    value="light"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="nord"
                    value="nord"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Retro"
                    value="retro"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cyberpunk"
                    value="cyberpunk"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Valentine"
                    value="valentine"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Aqua"
                    value="aqua"
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
