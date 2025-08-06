'use client'

export default function Error({
    error
}:{
    error : Error
}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
       페이지 에러
      </h1>
      <p className="text-green-600">
        오류메시지 : {error.message}
      </p>

      
      
    </div>
  );
}