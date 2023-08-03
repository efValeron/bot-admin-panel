'use client'
import TheTable from "@/components/TheTable";
import React from "react";
export default function Questions() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full p-4 bg-bg-white-lighter">
        <h1 className="font-medium text-3xl text-text-gray p-4 hidden md:block">Questions</h1>
      </div>
      {/*<TheTable tableData={tableData} setResultsPerPagePageHandle={setResultsPerPagePageHandle}*/}
      {/*          resultPerPage={resultPerPage} deleteQuizFunc={deleteQuiz}/>*/}
    </div>
  )
}
