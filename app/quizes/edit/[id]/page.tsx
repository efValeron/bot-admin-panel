'use client'
import React, {useEffect, useState} from "react";
import TheEditForm from "@/components/TheEditForm";
import axios from "axios";

type PropsType = {
  params: {
    id: string
  }
}

export default function Edit(props: PropsType) {
  const mainUrl = "https://07a5-2a0b-6204-52bb-7700-68e9-135c-2e0a-5e6c.ngrok-free.app/api/category"
  const [quizData, setQuizData] = useState({
    "_id": "",
    "code": "",
    "name": "",
    "sort": 0,
    "active": false,
    "answerCount": 0,
    "questionCount": 0
  })

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          "ngrok-skip-browser-warning": "any"
        }
      })
      setQuizData(response.data.data)
    } catch (error) {
      console.warn('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const url: string = `${mainUrl}/${props.params.id}`
    fetchData(url)
  }, [])
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Quiz's</h1>
      </div>

      <div className="flex flex-col items-center py-8">
        <TheEditForm action={"edit"} data={quizData} id={props.params.id}/>
      </div>

    </div>
  )
}
