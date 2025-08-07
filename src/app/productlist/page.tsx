import type { Product } from "@/types/product";
import { products } from "@/types/product";
import Link from "next/link";

export default async function ProductList() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold p-5">
           상품목록
          </h1>
          <ul>
            {
                products.map((item:Product) =>
                    <li key={item.id}>
                      <Link href={`/product/${item.id}`}>[{item.id}]{item.name}</Link>  
                    </li>
                )
            }
          </ul>
         
        </div>
  );
}