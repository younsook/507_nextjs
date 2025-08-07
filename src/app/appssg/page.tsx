

export default async function AppSSG() {
    const ssgTime = new Date().toLocaleString('ko-KR');
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
       SSG 예제 : {ssgTime}
      </h1>
      <p className="text-green-600">
        SSG는 빌드시 생성되며 페이지를 새로 고침해도 변경되지 않습니다.
      </p>
    </div>
  );
}