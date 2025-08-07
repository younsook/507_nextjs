
'use client'
import Image from "next/image"

// import bank from "/img/bank.png"
// import busan from "/img/busan.png"
// import market from "/img/market.png"
import { useState } from "react"
import type { FoodItem } from "@/types/Food"

interface FoodCardProps {
  item : FoodItem
}

export default function FoodCard({item}:FoodCardProps) {
  const [flag , setFalg] = useState<boolean>(false) ;

  const handleToggle = () => {
    setFalg(!flag) ;
  }
  return (
    <div className="w-full flex justify-start items-start
                    border rounded-lg border-gray-300">

      <div className="w-1/4 p-4">
        <Image src = { 
                  item["구분"] == "광역지원센터" ? "/img/busan.png"
                    : item["구분"] == "기초푸드뱅크" ? "/img/bank.png" : "/img/market.png"
                    } alt={item["구분"]|| "푸드 이미지"} width={100} height={100} />
      </div>
      <div className="w-3/4 flex flex-col justify-between items-start">
         <div className="w-full flex flex-col justify-start items-start my-4">
          <h1 className="text-2xl font-bold">
            {item["사업장명"]}
          </h1>
          <h2 className="text-lg font-bold text-gray-600">
            {item["운영주체명"]}        
          </h2>
          <p className="h-12 w-full text-left text-small text-gray-400">
            {item["사업장 소재지"]}        
          </p>
         </div>
         <div className="w-full bg-gray-100 h-8 mt-4 px-4
                         text-white text-left
                         flex items-center font-bold
                          hover:cursor-pointer"
              onClick={handleToggle}>
          {flag && item["연락처(대표번호)"]}
         </div>              
      </div>
    </div>
  )
}