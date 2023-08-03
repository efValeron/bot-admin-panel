'use client'
import React, {useEffect, useState} from "react";
import TheEditForm from "@/components/TheEditForm";
import axios from "axios";
import {AxiosHeaders, mainUrl} from "@/app/axiosParams";
import { useRouter } from 'next/navigation'

export type CreateBodyType = {
  _id?: string
  code: string
  description: string
  name: string
  sort: number
  active: boolean
}

export default function Edit() {
  const router = useRouter()
  const [quizData, setQuizData] = useState({
    "_id": "",
    "code": "",
    "name": "",
    "sort": 0,
    "active": false,
    "answerCount": 0,
    "questionCount": 0
  })
  const [errorMessage, setErrorMessage] = useState("")
  const [uniqueError, setUniqueError] = useState(false)

  const setUniqueErrorFunc = (state: boolean) => {
    setUniqueError(state)
  }

  const addQuiz = async (data: CreateBodyType) => {
    const url: string = `${mainUrl}`

    const body = {
      name: data.name,
      description: data.description,
      sort: data.sort,
      active: data.active,
      code: data.code
    }

    try {
      const response = await axios.post(url, {
        headers: AxiosHeaders,
        ...body
      })
      console.log(response)
      router.push("/quizes")
    } catch (error) {
      // @ts-ignore
      document.querySelector("#errorAlert").className = "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
      // @ts-ignore
      setTimeout(() => document.querySelector("#errorAlert").className = "hidden", 5000)
      // @ts-ignore
      setErrorMessage(error.message)
      // @ts-ignore
      if (error.response.data.message.includes("E11000")) {
        setUniqueErrorFunc(true)
      }
    }
  }

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full justify-between flex flex-row p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Create quiz</h1>

        <div
          id="errorAlert"
          className="hidden">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {errorMessage}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center py-8">
        <TheEditForm action={"create"} data={quizData} addQuiz={addQuiz} uniqueError={uniqueError} setUniqueErrorFunc={setUniqueErrorFunc}/>
      </div>

    </div>
  )
}
