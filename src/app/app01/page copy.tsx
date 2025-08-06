
type TdataItem = {
    title : string,
    content : string
}

const getData = async () => {
    return new Promise<TdataItem>((resolve) =>
        setTimeout(()=>{
            resolve({
                title : "APP ROUTE",
                content : "앱라우트 테스트 중입니다."
            });
        }, 3000)
    );
}
export default async function App01Page({
    // 쿼리스트링 ?a=10&b=20 잡기위 seachPrams
    searchParams
}:{
    searchParams:{[key:string]:string}
}) {
    if (searchParams.error == "true"){
        //실행 http://localhost:3000/app01?error=true
        throw new Error('서버에서 발생된 에러');
    }
    const Tdata = await getData();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">
        {Tdata.title}
      </h1>
      <p className="text-blue-600">
        {Tdata.content}
      </p>
    </div>
  );
}