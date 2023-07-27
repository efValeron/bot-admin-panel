import React from "react";

export default function TheNavBar() {

  return (
    <div
      className="flex lg:flex-col flex-row items-center lg:w-16 h-16 lg:h-screen overflow-hidden text-gray-700 bg-bg-white lg:border-r border-b lg:border-b-0 lg:divide-r divide-b lg:divide-b-0 divide-gray-200">
      {/*<a className="flex items-center justify-center lg:mt-3 lg:ml-0 ml-3" href="#">*/}
      {/*  <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
      {/*       fill="currentColor">*/}
      {/*    <path*/}
      {/*      d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>*/}
      {/*  </svg>*/}
      {/*</a>*/}
      <div
        className="flex lg:flex-col flex-row items-center "> {/*lg:border-t lg:border-l-0 border-l border-gray-300*/}
        <a className="flex items-center justify-center w-12 h-12 lg:mt-2 lg:ml-0 ml-2 rounded hover:bg-gray-300"
           href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="w-6 h-6">
            <path d="M15 3v18"/>
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M21 9H3"/>
            <path d="M21 15H3"/>
          </svg>
        </a>
        <a className="flex items-center justify-center w-12 h-12 lg:mt-2 lg:ml-0 ml-2 rounded hover:bg-gray-300"
           href="/quizes">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="w-6 h-6">
            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/>
            <path d="M19 17V5a2 2 0 0 0-2-2H4"/>
            <path d="M15 8h-5"/>
            <path d="M15 12h-5"/>
          </svg>
        </a>
      </div>
      <a className="flex items-center justify-center w-16 h-16 lg:mt-auto lg:ml-0 ml-auto bg-gray-200 hover:bg-gray-300"
         href="#">
        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </a>
    </div>
  )
}