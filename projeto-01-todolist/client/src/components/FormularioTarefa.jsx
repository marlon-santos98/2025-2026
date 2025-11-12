// client/src/components/FormularioTarefa.jsx

import { useState } from 'react';

// 'props' é um objeto. Estamos usando { onAdicionar } para "desestruturar"
// e pegar a propriedade 'onAdicionar' que o App.jsx vai nos passar.
function FormularioTarefa({ onAdicionar }) {
  
  // Lógica: Este estado agora "mora" aqui. App.jsx não precisa saber dele.
  const [novoTitulo, setNovoTitulo] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (novoTitulo.trim() === '') return;

    // Lógica: Chamamos a função que o "Pai" (App.jsx) nos passou.
    // Estamos "subindo" (lifting state up) o dado 'novoTitulo' para o Pai.
    onAdicionar(novoTitulo);
    
    // Limpamos o nosso próprio estado.
    setNovoTitulo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="O que precisa ser feito?"
        value={novoTitulo}
        onChange={(e) => setNovoTitulo(e.target.value)} 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;