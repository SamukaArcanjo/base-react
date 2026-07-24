import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function DetailPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="bg-[#080825] w-screen h-screen p-6 flex flex-col justify-start items-center gap-6">
      <div className="w-[500px] flex justify-center relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2  text-white">
          <ChevronLeft />
        </button>
        <h1 className="text-4xl font-bold text-[#fff] text-center ">
          Detalhes da Tarefa
        </h1>
      </div>

      <div className="w-[500px] h-[200px] rounded-md shadow bg-[#fff] space-y-4 p-6 text-center ">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
