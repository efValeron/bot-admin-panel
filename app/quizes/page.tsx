'use client'
import TheTable from "@/components/TheTable";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSearchParams} from 'next/navigation'

type TableRowType = {
  _id: string
  code: string
  name: string
  description: string
  sort: number
  active: boolean
  answerCount: number
  questionCount: number
}

type ResponseType = {
  data: TableRowType[]
  total: number
}

export type QuizesTableDataType = {
  tableType: "quizes"
  head: string[]
  response: ResponseType
}


export default function Quizes() {
  const mainUrl = "https://07a5-2a0b-6204-52bb-7700-68e9-135c-2e0a-5e6c.ngrok-free.app/api/category"
  const [tableData, setTableData] = useState<QuizesTableDataType>({
    tableType: "quizes",
    head: [
      "ID", "Sort", "Code", "Name", "Active", "Answer count", "Question count"
    ],
    response: {
      data: [],
      total: 0
    }
  })
  const [resultPerPage, setResultsPerPage] = useState(100)

  // const searchParams = useSearchParams()
  // const get = Object.fromEntries(searchParams.entries())
  // console.log(get)

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          "ngrok-skip-browser-warning": "any"
        }
      })
      setTableData({
        tableType: "quizes",
        head: [
          "ID", "Sort", "Code", "Title", "Active", "Answer count", "Question count"
        ],
        response: response.data
      })
    } catch (error) {
      console.warn('Error fetching data:', error)
    }
  }

  const setResultsPerPagePageHandle = async (result: number) => {
    setResultsPerPage(result)
    const url: string = `${mainUrl}?by=sort&order=-1&page=1&limit=${result}`
    await fetchData(url)
  }

  const deleteQuiz = async (quizId: string) => {
    const url: string = `${mainUrl}/${quizId}/delete`
    console.log("delete", quizId)
    try {
      const response = await axios.get(url, {
        headers: {
          "ngrok-skip-browser-warning": "any"
        }
      })
      await fetchData(`${mainUrl}?by=sort&order=-1&page=1&limit=${resultPerPage}`)
    } catch (error) {
      console.warn('Error while deleting:', error)
    }
  }

  useEffect(() => {
    const url: string = `${mainUrl}?by=sort&order=-1&page=1&limit=${resultPerPage}`
    fetchData(url)
  }, [])

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Quiz's</h1>
      </div>
      <TheTable tableData={tableData} setResultsPerPagePageHandle={setResultsPerPagePageHandle}
                resultPerPage={resultPerPage} deleteQuizFunc={deleteQuiz}/>
    </div>
  )
}
