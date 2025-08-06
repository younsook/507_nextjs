'use client'

import { useAtom } from "jotai"
import { isLogin } from "@/atoms/IsLoginAtom"
import Login from "@/components/Login";
export default function Home() {
  const [ login,  ] = useAtom(isLogin) ;
  const id = localStorage.getItem("id") ;

  return (
    <div className="w-full h-full flex justify-center items-center">
      { login ? <h1 className="text-2xl font-bold">
                 {id} 로그인되었습니다.
                </h1> 
                //:"로그인 컴포넌트 "
             : <Login />
            }
      
    </div>
  )
}