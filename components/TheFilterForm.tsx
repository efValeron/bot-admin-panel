import React, {Fragment} from "react"
import {Menu, Transition} from '@headlessui/react'
import Link from "next/link";

type PropsType = {
  tableType: "clients" | "quizes"
  setResultsPerPageFilterHandle: (result: number) => void
  resultPerPage: number
}

export default function TheFilterForm(props: PropsType) {
  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <div className="py-3 px-6 flex flex-row-reverse gap-4 bg-bg-white-lighter">
        {/*<div className="relative w-72 max-w-sm">*/}
        {/*  <div className="relative rounded-md shadow-sm">*/}
        {/*    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
        {/*      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"*/}
        {/*           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"*/}
        {/*           className="h-4 w-4 text-gray-400">*/}
        {/*        <circle cx="11" cy="11" r="8"/>*/}
        {/*        <path d="m21 21-4.3-4.3"/>*/}
        {/*      </svg>*/}
        {/*    </div>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      name="price"*/}
        {/*      id="price"*/}
        {/*      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
        {/*      placeholder="Search"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        <Link href="quizes/create/"
          type="button"
          className="h-[36px] flex flex-row gap-2 items-end uppercase text-xs font-bold border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-100 select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
               className="h-4 w-4">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
          create quiz
        </Link>

        <div className="divider divider-horizontal mx-0"/>

        {
          props.tableType === "clients"
            ? <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Completed quiz's
                  <svg className="-mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                       strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("All")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          All
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("Some")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Some
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("None")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          None
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            : <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Active
                  <svg className="-mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                       strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("All")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          All
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("Active")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Active
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => console.log("Disabled")}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Disabled
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
        }
      </div>

      <div className="border-t divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <div
          className="w-full text-sm text-icon-hover py-2 px-4 tracking-wide flex flex-row items-center justify-between">
          <p>Showing 11 - 20 of 64 results</p>
          <div className="flex flex-row items-center gap-2">
            <p>Results per page:</p>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {props.resultPerPage}
                  {/*<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                  <svg className="-mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                       strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="font-medium absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => props.setResultsPerPageFilterHandle(1)}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => props.setResultsPerPageFilterHandle(2)}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          2
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => props.setResultsPerPageFilterHandle(3)}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          3
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="button"
                          onClick={() => props.setResultsPerPageFilterHandle(100)}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          100
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}
