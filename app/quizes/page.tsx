'use client'
import TheTable from "@/components/TheTable";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {AxiosHeaders, mainUrl} from "@/app/axiosParams";
import {usePathname, useSearchParams, useRouter} from 'next/navigation';

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

type SearchParams = {
  [key: string]: string | string[] | null | number | number[]
};

export default function Quizes() {
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
  const [resultPerPage, setResultsPerPage] = useState(10)
  const [page, setPage] = useState(1)
  const [currentActiveFilter, setCurrentActiveFilter] = useState('all')
  const [showInfo, setShowInfo] = useState({
    showFrom: 0,
    showTo: 0,
    showTotal: 0
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const fetchData = async (url: string) => {
    console.log("fetching")
    try {
      const response = await axios.get(url, {
        headers: AxiosHeaders
      })
      setTableData({
        tableType: "quizes",
        head: [
          "ID", "Sort", "Code", "Title", "Active", "Answer count", "Question count"
        ],
        response: response.data
      })
      updateShowInfo(response.data.total)
    } catch (error) {
      console.warn('Error fetching data:', error)
    }
  }
  // const setResultsPerPagePageHandle = async (result: number) => {
  //   setResultsPerPage(result)
  //   const url: string = `${mainUrl}?by=sort&order=-1&page=1&limit=${result}`
  //   await fetchData(url)
  // }
  const deleteQuiz = async (quizId: string) => {
    const url: string = `${mainUrl}/${quizId}/delete`
    try {
      const response = await axios.get(url, {
        headers: AxiosHeaders
      })
      await fetchData(`${mainUrl}?${decodeURI(new URLSearchParams(Object.fromEntries(searchParams)).toString())}`)
    } catch (error) {
      console.warn('Error while deleting:', error)
    }
  }
  const updateQueryParams = (params: SearchParams): void => {
    const mergedParams: SearchParams = {...Object.fromEntries(searchParams)};

    for (const key in params) {
      if (params[key] === null) {
        delete mergedParams[key];
      } else {
        mergedParams[key] = params[key];
      }
    }

    if (JSON.stringify(mergedParams) === JSON.stringify(Object.fromEntries(searchParams))) return

    // @ts-ignore
    const queryString = decodeURI(new URLSearchParams(mergedParams).toString());
    router.push(`${pathname}?${queryString}`)
    fetchData(`${mainUrl}?${queryString}`)
  };
  const changeFilterActiveHandler = (filter: string) => {
    setCurrentActiveFilter(filter)
    switch (filter) {
      case "all":
        updateQueryParams({"filter[active]": null})
        break
      case "active":
        updateQueryParams({"filter[active]": "true"})
        break
      case "disabled":
        updateQueryParams({"filter[active]": "false"})
        break
    }
  }
  const changeResultPerPageHandler = (result: number) => {
    setResultsPerPage(result)
    updateQueryParams({"limit": result})
  }
  const updateShowInfo = (totalElementsRes: number) => {
    const totalElements = totalElementsRes
    const itemsPerPage = searchParams.get("limit") === null ? 10 : Number(searchParams.get("limit"))
    const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))

    const startElement = (currentPage - 1) * itemsPerPage + 1
    const endElement = Math.min(currentPage * itemsPerPage, totalElements)
    console.log(itemsPerPage, Math.min(currentPage * itemsPerPage, totalElements))

    setShowInfo({
      showTotal: totalElements,
      showFrom: startElement,
      showTo: endElement
    })
  }

  const setAllQueryParams = async ()  => {
    setCurrentActiveFilter(searchParams.get("filter[active]") === null ? "all" : searchParams.get("filter[active]") === "true" ? "active" : "disabled")
    setResultsPerPage(searchParams.get("limit") === null ? 10 : Number(searchParams.get("limit")))
  }

  useEffect(() => {
    setAllQueryParams()
    const url: string = `${mainUrl}?${decodeURI(new URLSearchParams(Object.fromEntries(searchParams)).toString())}`
    console.log(resultPerPage,Number(searchParams.get("limit")), "eqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    fetchData(url)
  }, [])

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Quiz's</h1>
      </div>
      <TheTable tableData={tableData} changeResultPerPageHandlerFunc={changeResultPerPageHandler}
                resultPerPage={resultPerPage} deleteQuizFunc={deleteQuiz}
                changeFilterActiveHandlerFunc={changeFilterActiveHandler}
                currentActiveFilter={currentActiveFilter} showInfo={showInfo}
      />
    </div>
  )
}
