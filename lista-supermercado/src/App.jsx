import { useState, useRef } from "react";
import ItemLista from "./ItemLista";

function App() {
  const [listaMercado, setListaMercado] = useState([]);

  const inputAdicionar = useRef();



  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado]
    const valorInput = inputAdicionar.current.value;

    if (valorInput !== "") {
    novaLista.push(valorInput);
    setListaMercado(novaLista)
    
    inputAdicionar.current.value = '';
    
    
    }
    



    
  };


  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-4" >
      <h1 className="text-3xl font-bold">Lista de Mercado</h1>
      
      <div className="flex w-full gap-2">
        <input className="w-full border border-gray-600 rounded-md px-2" ref={inputAdicionar} type="text" placeholder="Digite um item" />
        
        <button className="rounded-md bg-gray-800 text-white transition px-2 cursor-pointer hover:bg-gray-600 " onClick={() => adicionarElementoNaLista()}>Adicionar</button>
      </div>

      {listaMercado.length > 0 ? ( 
        <ul className="w-full flex flex-col gap-2">
        {listaMercado.map((itemLista, index) => (
          <ItemLista
            key={index}
            itemLista={itemLista}
            listaMercado={listaMercado}
            setListaMercado={setListaMercado} />
        ))}


      </ul> 
      ) : ( 
      <p>Você não tem itens na sua lista.</p>
      )}

    </div>

  );


}

export default App;
