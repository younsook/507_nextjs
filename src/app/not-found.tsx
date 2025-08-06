
import Link from "next/link";
export default async function NotFound() {
  return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
      404 페이지를 찾을 수 없습니다.
      </h1>
      <p className="text-red-600">
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link href="/">
        홈으로 
        </Link>
      
      
    </div>
  );
}