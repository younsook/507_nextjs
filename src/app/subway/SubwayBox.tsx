import scode from "@/db/scode.json"
import type { TdataItem } from "./page"

interface SubwayBoxProps {
  item : TdataItem, 
  idx : number
}
type ScodeKey = keyof typeof scode ; //"pm10" | "co2" | ...

export default function SubwayBox({item, idx}:SubwayBoxProps) {
  const kdata = Object.keys(scode) as ScodeKey[];
  // const kdata = Object.keys(scode); //string[]
  console.log(kdata )
  return (
    <div className="w-9/10 flex flex-col mt-5">
      <div className="mx-10 text-green-800 font-bold">
        {item.site} {item.city} (시각 : {`${item.controlnumber.slice(0,4)}.
                                         ${item.controlnumber.slice(4,6)}.
                                         ${item.controlnumber.slice(6,8)} 
                                          ${item.controlnumber.slice(8,10)}시`})
      </div>
      <div className="w-full mx-10 grid grid-cols-5 md:grid-cols-9 gap-2">
        {
          kdata.map((k) => <div className= "w-full flex flex-col justify-center items-center" 
                              key={k}>
                          <div className={`${idx % 2 == 0 ? 'bg-blue-400' : 'bg-gray-700'} text-white w-full text-center`}>
                            {/* {scode[k as keyof typeof scode]["name"]}<br /> */}
                            {scode[k]["name"]}<br />
                            ({k})
                          </div>
                          <div className="border border-y-green-800 w-full text-center">
                            {/* {item[k as keyof TdataItem]}{scode[k as keyof typeof scode]["unit"]} */}
                             {item[k]}{scode[k]["unit"]}
                          </div>
                         </div>)
        }
      </div>
    </div>
  )
}