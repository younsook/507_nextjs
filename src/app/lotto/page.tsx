'use client'
import TailBall from "@/ui/TailBall";
import TailButton from "@/ui/TailButton";

import { useState } from "react"
import type { ReactNode } from "react";

export default function Lotto() {
  const [lottoTag , setLottoTag] = useState<ReactNode[]>([]) ;

  const handleClick = () => {
    //로또 번호 생성 버튼이 눌러지면 배열을 항상 초기화
    const num : number[] = [] ;

    //중복되지 않는 7개 숫자
    while(num.length < 7) {
      const n = Math.floor(Math.random() * 45) + 1 ; //1~45
      if ( !num.includes(n) ) num.push(n) ;
    }

    //보너스
    const bonus: number[] = num.splice(-1) ;

    //num배열 정렬
    num.sort((a, b) => a - b) ;
    
    //화면 출력을 위한 배열
    const lotto : (number | string)[] = [...num, '+' , ...bonus] ;
    const tmTag : ReactNode[] = lotto.map(item => typeof item == 'string' ? <span className="text-3xl font-bold m-2"
                                                                                  key={`n${item}`}>
                                                                              {item}
                                                                            </span>
                                                                  : <TailBall key={`n${item}`}
                                                                              n={item} />) ;

    // console.log(lottoTag)
    setLottoTag(tmTag)
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center my-10 h-10">
        {lottoTag}
      </div>
      <div className="mt-20">
        <TailButton caption="로또번호생성"
          color="orange"
          onHandle={handleClick} />
      </div>
    </div>
  )
}