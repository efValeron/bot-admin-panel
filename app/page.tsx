'use client'
import React from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const authorized = true
  const router = useRouter()

  if (authorized) {
    router.push("/quizes")
  }
  return (
    <div>
      Fuck
    </div>
  )
}
