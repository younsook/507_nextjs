import MyClockTime from "../clock/MyClockTime";

export default async function AppCSR() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
       CSR 예제 
      </h1>
      <p className="text-green-600">
        CSR은 클라이언트에서 실행되며 클라이언트의 시간을 가져옵니다.
      </p>
      <MyClockTime />
    </div>
  );
}