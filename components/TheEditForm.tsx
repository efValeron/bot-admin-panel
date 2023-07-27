import React, {useEffect, useState} from "react";
import Link from "next/link";
import {BodyType} from "@/app/quizes/edit/[id]/page";

type EditPropsType = {
  action: "edit"
  data: object
  id: string
  updateQuiz: (data: BodyType) => void
}

type CreatePropsType = any

export default function TheEditForm(props: EditPropsType | CreatePropsType) {
  const [inputsValues, setInputValues] = useState({...props.data})


  useEffect(() => {
    if (props.data) {
      setInputValues(props.data);
    }
  }, [props.data]);

  const handleInputChange = (e: { target: { name: string; checked: boolean; }; }) => {
    const {name, checked} = e.target;
    setInputValues({...inputsValues, [name]: checked});
  };

  const applyChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.updateQuiz(inputsValues)
  }

  return (
    <form className="container" onSubmit={(event) => applyChanges(event)}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Edit quiz</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Editing {props.id} quiz</p>

          <div className="m-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {
              props.action === "edit"
                ? <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Quiz id
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      readOnly
                      type="text"
                      name="id"
                      defaultValue={props.data._id}
                      autoComplete="given-name"
                      className="read-only:bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                : <></>
            }

            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  onChange={e => setInputValues({...inputsValues, name: e.target.value})}
                  value={inputsValues.name}
                  defaultValue={props.action === "edit" ? props.data.name : ""}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                Code
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="code"
                  id="code"
                  onChange={e => setInputValues({...inputsValues, code: e.target.value})}
                  value={inputsValues.code}
                  defaultValue={props.action === "edit" ? props.data.code : ""}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  onChange={e => setInputValues({...inputsValues, description: e.target.value})}
                  rows={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={props.action === "edit" ? inputsValues.description : ""}
                  defaultValue={props.action === "edit" ? props.data.description : ""}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sort" className="block text-sm font-medium leading-6 text-gray-900">
                Sort
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="sort"
                  id="sort"
                  onChange={e => setInputValues({...inputsValues, sort: e.target.value})}
                  value={props.action === "edit" ? inputsValues.sort : 500}
                  defaultValue={props.action === "edit" ? props.data.sort : ""}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="active" className="block text-sm font-medium leading-6 text-gray-900">
                Active
              </label>
              <div className="mt-2">
                <input
                  type="checkbox"
                  name="active"
                  id="active"
                  onChange={(e) => handleInputChange(e)}
                  checked={inputsValues.active}
                  autoComplete="family-name"
                  className="h-6 w-6 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/quizes" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}