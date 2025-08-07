export const dynamic = 'force-dynamic'

export default async function AppSSR() {
    const ssgTime = new Date().toLocaleString('ko-KR');
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
       SSR 예제 : {ssgTime}
      </h1>
      <p className="text-green-600">
        SSR은 페이지가 요청될때 마다 새로 생성됨으로 새로 고침시 변경됩니다.
      </p>
    </div>
  );
}