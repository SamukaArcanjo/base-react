import { useSearchParams } from "react-router-dom";

function DetailPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("description");
  const description = searchParams.get("description");

  return (
    <div className="bg-[#080825] w-screen h-screen p-6 flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold text-[#fff] text-center p-6">
        Detalhes da Tarefa
      </h1>
      <div className="w-[500px] bg-[#fff] ">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
