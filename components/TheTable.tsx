'use client'
import React, {useState} from "react"
import TheFilterForm from "@/components/TheFilterForm";
import {ClientsTableDataType} from "../app/clients/page";
import {QuizesTableDataType} from "@/app/quizes/page";
import TheModal from "@/components/TheModal";
import Link from "next/link";

type ShowType = {
  showFrom: number
  showTo: number
  showTotal: number
}

type PropsType = {
  resultPerPage: number
  tableData: ClientsTableDataType | QuizesTableDataType
  deleteQuizFunc: (quizId: string) => void
  changeFilterActiveHandlerFunc: (filter: string) => void
  currentActiveFilter: string
  changeResultPerPageHandlerFunc: (result: number) => void
  showInfo: ShowType
}

export default function TheTable(props: PropsType) {
  const [modalOpen, setModalOpen] = useState(false)
  // const [formOpen, setFormOpen] = useState(false)
  const [deleteQuiz, setDeleteQuiz] = useState("")

  const closeModalFunc = (state: boolean) => {
    if (state !== modalOpen)
      setModalOpen(state)
  }


  const deleteModalFunc = (state: boolean, quizId: string) => {
    if (state !== modalOpen) {
      setModalOpen(state)
      props.deleteQuizFunc(quizId)
    }
  }

  const openModalFunc = (quizId: string) => {
    setDeleteQuiz(quizId)
    setModalOpen(true)
  }

  const setResultsPerPageFilterHandle = (result: number) => {
    if (result !== props.resultPerPage) props.changeResultPerPageHandlerFunc(result)
  }

  return (
    <div className="flex flex-col h-full"> {/*add here mb-x (min 16) to lift table from the bottom*/}
      <TheModal open={modalOpen} closeModalFunc={closeModalFunc} deleteQuiz={deleteQuiz}
                deleteModalFunc={deleteModalFunc}/>

      <div className="min-w-full inline-block align-middle">
        <TheFilterForm setResultsPerPageFilterHandle={setResultsPerPageFilterHandle} resultPerPage={props.resultPerPage}
                       tableType={props.tableData.tableType} changeFilterActiveHandlerFunc={props.changeFilterActiveHandlerFunc} currentActiveFilter={props.currentActiveFilter}
        showInfo={props.showInfo}/>

        <div
          className="overflow-x-auto w-full border-t divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-bg-white dark:bg-gray-700">
            <tr>
              {
                props.tableData.head.map(h => {
                  return (
                    <th key={h}
                        scope="col"
                        className="px-6 py-3 max-w-full text-left text-sm font-semibold text-gray-500 uppercase">{h}</th>
                  )
                })
              }
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 align-top">
            {
              props.tableData.tableType === "clients"
                ? props.tableData.rows.map(r => {
                  return (
                    <tr key={r.id} className="even:bg-bg-white-lighter">
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{r.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.phone}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{
                        r.completedQuizes.map(q => {
                          return (
                            <p key={q.code}>{q.quizTitle}: {q.score}</p>
                          )
                        })
                      }</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.contactMe ? "Yes" : "No"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        {/*<Link href={`quizes/create/${r.id}`} type="button" className="text-blue-500 hover:text-blue-700">Show</Link>*/}
                      </td>
                    </tr>
                  )
                })
                : props.tableData.response.data.map(r => {
                  return (
                    <tr key={r._id} className="even:bg-bg-white-lighter">
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{r._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.sort}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.name}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.active ? "Active" : "Disabled"}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{r.answerCount}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {/*<Link href={`/questions/${QUESTION COUNT}`}---------------------------------------------------------------------*/}
                        {r.questionCount}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <Link href={`quizes/edit/${r._id}`} type="button"
                              className="text-blue-500 hover:text-blue-700">Edit</Link>
                        <a className="cursor-pointer ml-2 text-red-500 hover:text-red-700"
                           onClick={() => openModalFunc(r._id)}>Delete</a>
                      </td>
                    </tr>
                  )
                })
            }

            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="h-5 w-5 text-[#1F2937]">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </a>
                {/* Current: "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                Default: "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex" */}

                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="h-5 w-5 text-[#1F2937]">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

