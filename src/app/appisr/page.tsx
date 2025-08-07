export const revalidate = 10;

export default async function AppISR() {
  const ssgTime = new Date().toLocaleString('ko-KR');
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
       ISR 예제 : {ssgTime}
      </h1>
      <p className="text-green-600">
        ISR은 주기적으로 업데이트됨으로 백그라운드에서 10초 간격으로 변경됩니다. (변경시점 주기적이지 않음)
      </p>
    </div>
  );
}