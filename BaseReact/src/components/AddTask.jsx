function AddTask(props) {
  return (
    <div className="space-y-4 p-6 bg-[#ffffff] flex flex-col rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-[#080825] outline-[#161663] px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-[#080825] outline-[#161663] px-4 py-2 rounded-md"
      />
      <button className="bg-[#080825] text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
