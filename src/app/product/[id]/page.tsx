import type { Product } from "@/types/product";
import { products } from "@/types/product";
import Link from "next/link";

export default async function ProductDetail({
  params
}:{
  params: Promise <{id:string}>
}) {
    const {id} = await params;
    console.log(id)

    const p = products.filter((item:Product)=>item.id == id)[0];
  return (
   <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold p-5">
           상품상세정보
          </h1>
          <ul>
            <li>{p.id}</li>
            <li>{p.name}</li>
            <li>{p.category}</li>
            <li>{p.price}</li>
            <li>{p.description}</li>
          </ul>
         <div>
            <Link href="/productlist">이전</Link>
         </div>
        </div>
  );
}

