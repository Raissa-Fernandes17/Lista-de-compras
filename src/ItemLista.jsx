function ItemLista({ texto, comprado, onAlternarComprado, onRemover }) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
      <span 
        onClick={onAlternarComprado} 
        className={`cursor-pointer flex-1 ${comprado ? "line-through text-gray-400" : ""}`}
      >
        {texto}
      </span>
      <button onClick={onRemover} className="text-red-600 text-sm hover:underline ml-2">
        Remover
      </button>
    </div>
  );
}

export default ItemLista;
