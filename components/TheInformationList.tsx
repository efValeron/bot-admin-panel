import React from "react";
import {ClientType} from "@/app/[id]/page";

type PropsType = {
  head: string[]
  clientData: ClientType
}

export default function TheInformationList(props: PropsType) {
  return (
    <div className="bg-slate-300 rounded-lg box-border p-4 container flex flex-col gap-4 justify-evenly">
      {
        Object.keys(props.clientData).map((k, index) => {
          return (
            <div key={index} className="w-full flex flex-row gap-4">
              {/*<div className="font-medium text-lg rounded-lg box-border p-4 bg-slate-200 h-full w-1/3">*/}
              <h3
                className="font-medium text-lg rounded-lg box-border p-4 bg-slate-200 h-full w-1/3">{props.head[index]}:</h3>
              {/*</div>*/}
              {/*<div className="font-medium text-left text-gray-600 rounded-lg box-border bg-slate-200 h-full w-full">*/}
              {
                k !== "completedQuiz"
                  ? <p
                    className="font-medium text-left text-gray-600 rounded-lg box-border bg-slate-200 h-full w-full p-4">{k !== "contactMe" ? props.clientData[k] : props.clientData[k] ? "yes" : "no"}</p>
                  : <div className="h-full w-full">
                    <button type="button"
                            className="font-medium text-left text-gray-600 rounded-lg h-full w-full box-border bg-slate-200 p-4 flex items-center justify-between border border-b-0 border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span>{props.clientData[k]}</span>
                      <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 5 5 1 1 5"/>
                      </svg>
                    </button>
                    <div id="answersAcc"
                         className="hidden font-medium text-left text-gray-600 rounded-lg box-border bg-slate-200 h-full w-full p-4"
                         aria-labelledby="accordion-collapse-heading-1">
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of
                          interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                          navbars, and more.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                          href="/docs/getting-started/introduction/"
                          className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start
                          developing websites even faster with components on top of Tailwind CSS.</p>
                      </div>
                    </div>
                  </div>
              }
              {/*</div>*/}
            </div>
          )
        })
      }
    </div>
  )
}