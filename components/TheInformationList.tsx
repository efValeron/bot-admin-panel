import React, {useState} from "react";
import {ClientType} from "@/app/[id]/page";

type PropsType = {
  head: string[]
  clientData: ClientType
}

export default function TheInformationList(props: PropsType) {
  const [isAnswersAccOpen, setAnswersAccOpen] = useState(false);
  const expandAnswersAcc = () => {
    setAnswersAccOpen(!isAnswersAccOpen)
  }

  return (
    <div className="bg-stone-200 rounded-lg border-2 border-stone-400 box-border p-4 flex flex-row gap-x-4 gap-y-6">
      <div className="w-1/2 flex flex-col gap-4">
        {
          Object.keys(props.clientData).map((k, index) => {
            if (k !== "completedQuizes") return (
              <div key={index} className="w-full rounded-lg p-0 flex flex-row gap-4 bg-stone-100">
                <h1 className="font-medium text-md box-border p-4 h-[60px] w-1/3">{props.head[index]}:</h1>
                <p
                  className="font-medium text-left text-stone-600 box-border h-[60px] w-full p-4">{k !== "contactMe" ? props.clientData[k] : props.clientData[k] ? "yes" : "no"}</p>
              </div>
            )
          })
        }
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        {
          props.clientData.completedQuizes.map(q => {
            return (
              <div key={q.quizTitle} className="flex flex-col w-full gap-4 bg-stone-100 rounded-lg box-border p-3">
                <h1 className="font-medium text-lg pl-2">"{q.quizTitle}" quiz
                  answers:</h1>
                <div className="font-medium pl-2 w-[90%] flex flex-col gap-6">
                  {
                    q.answers.map((a, index) => {
                      return (
                        <div key={index} className="flex flex-row gap-2">
                          <p className="pl-2">{index + 1}:</p>
                          <div className="pl-4 w-full flex flex-col gap-1">
                            <div className="flex flex-row gap-4">
                              <p className="h-full w-[20%]">Question id:</p>
                              <p className="text-stone-600 h-full w-[80%]">{a.id}</p>
                            </div>
                            <div className="flex flex-row gap-4">
                              <p className="h-full w-[20%]">Question title:</p>
                              <p className="text-stone-600 h-full w-[80%]">{a.questTitle}</p>
                            </div>
                            <div className="flex flex-row gap-4">
                              <p className="h-full w-[20%]">Answer title:</p>
                              <p className="text-stone-600 h-full w-[80%]">{a.answerTitle}</p>
                            </div>
                            <div className="flex flex-row gap-4">
                              <p className="h-full w-[20%]">Answer score:</p>
                              <p className="text-stone-600 h-full w-[80%]">{a.answerScore}</p>
                            </div>
                            {/*<p className="pl-2">Answer score: {a.answerScore}</p>*/}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}