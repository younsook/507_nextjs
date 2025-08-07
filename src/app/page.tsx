'use client'
import { useAtom } from "jotai"
import { isLogin } from "../atoms/IsLoginAtom"
import Login from "@/components/Login";
import { useEffect, useState } from "react"
export default function Home() {
  const [ login,  ] = useAtom(isLogin) ;
  const [id, setId] = useState("")

  useEffect(() => {
    const storedId = localStorage.getItem("id")
    if (storedId) setId(storedId)
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      { login ? <h1 className="text-2xl font-bold">
                 {id} 로그인되었습니다.
                </h1> 
              : <Login />}
      
    </div>
  )
}