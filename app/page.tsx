'use client'
import TheTable from "@/components/TheTable";
import React, {useEffect, useState} from "react";
import axios from "axios";

type TableRowType = {
  id: string
  phone: string
  username: string
  name: string
  completedQuizes: CompletedQuizes[]
  contactMe: boolean
}

type CompletedQuizes = {
  code: string
  quizTitle: string
  score: number
  answers: Answers[]
}

type Answers = {
  id: string
  questTitle: string
  answerTitle: string
  answerScore: number
}

export type ClientsTableDataType = {
  tableType: "clients"
  head: string[]
  rows: TableRowType[]
}

export default function Home() {
  const [clientsData, setClientsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/clients.json');
        setClientsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const tableData: ClientsTableDataType = {
    tableType: "clients",
    head: [
      "ID", "Phone", "Username", "Name", "Completed quiz", "Wants to contact"
    ],
    rows: [...clientsData]
  }
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Clients</h1>
      </div>
      {/*<TheTable tableData={tableData}/>*/}
    </div>
  )
}
