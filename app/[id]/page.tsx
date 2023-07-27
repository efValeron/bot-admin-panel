'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import TheInformationList from "@/components/TheInformationList";

type PropsType = {
  params: {
    id: string
  }
}

export interface ClientType {
  [key: string]: any

  id: string
  firstName: string
  secondName: string
  age: number
  completedQuizes: CompletedQuizes[]
  contactMe: boolean
}

export interface CompletedQuizes {
  quizTitle: string
  score: number
  answers: Answers[]
}

export interface Answers {
  id: string
  questTitle: string
  answerTitle: string
  answerScore: number
}


export default function ClientGeneral(props: PropsType) {
  const [clientData, setClientData] = useState<ClientType>({
    "id": "",
    "firstName": "",
    "secondName": "",
    "age": 0,
    "completedQuizes": [
      {
        "quizTitle": "",
        "score": 0,
        "answers": []
      }
    ],
    "contactMe": false
  })
  const head = ["ID", "First name", "Second Name", "Age", "Completed quiz", "Wants to contact"]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/client.json');
        setClientData(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 flex py-24 justify-center">
      <Link href="/" className="absolute left-6 top-6 rounded-full hover:bg-stone-200 p-1 duration-200">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                fill="#0c0a09"/>
        </svg>
      </Link>

      <div className="container">
        <h1 className="font-semibold text-3xl mb-8">Viewing information about {clientData.firstName}</h1>
        <TheInformationList head={head} clientData={clientData}/>
      </div>
    </div>

  )
}