import { useState } from "react";
import ItemLista from "./ItemLista";

function App() {
  // Estado inicial com suporte ao bônus de itens comprados
  const [itens, setItens] = useState([
    { id: 1, texto: "Arroz", comprado: false },
    { id: 2, texto: "Feijão", comprado: false },
    { id: 3, texto: "Leite", comprado: false },
  ]);

  const [novoItem, setNovoItem] = useState("");

  // Função para adicionar item à lista
  function adicionarItem() {
    if (!novoItem.trim()) return;
    
    setItens((atual) => [...atual, { id: Date.now(), texto: novoItem, comprado: false }]);
    setNovoItem("");
  }

  // Função para remover item filtrando pelo ID único
  function removerItem(id) {
    setItens((atual) => atual.filter((item) => item.id !== id));
  }

  // Função bônus para riscar/desriscar o item clicado
  function alternarComprado(id) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de compras</h1>

      {/* Campo de texto e botão de adicionar */}
      <div className="flex gap-2 mb-4">
        <input
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Novo item"
          className="border border-gray-200 rounded-lg px-3 py-2 flex-1"
        />
        <button
          onClick={adicionarItem}
          className="bg-teal-700 text-white rounded-lg px-4 py-2 hover:bg-teal-800 transition-colors"
        >
          Adicionar
        </button>
      </div>

      {/* CORRIGIDO: Mensagem limpa sem ponto e vírgula interno para renderizar perfeitamente */}
      {itens.length === 0 && (
        <p className="text-gray-500 italic">Sua lista está vazia.</p>
      )}

      {/* Renderização dinâmica dos componentes na tela */}
      <div>
        {itens.map((item) => (
          <ItemLista
            key={item.id}
            texto={item.texto}
            comprado={item.comprado}
            onAlternarComprado={() => alternarComprado(item.id)}
            onRemover={() => removerItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
