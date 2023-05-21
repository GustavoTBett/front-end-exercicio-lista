import "./App.css";
import { useState } from 'react';
import List from "./components/list.jsx";
import Form from "./components/form.jsx";

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    quantidade: '',
    comprado: 'Não comprado'
  });

  const [compras, setCompras] = useState([]);

  const enviaForm = (event) => {
    event.preventDefault();

    if (formData.nome === '') {
      alert('Preencha o nome');
      return;
    }
    if (formData.quantidade === '') {
      alert('Preencha a quantidade');
      return;
    }

    setCompras([...compras, formData]);
  };

  const removeItem = (index) => {
    const confirmRemoval = window.confirm('Você tem certeza que quer excluir esse item?');
    if (confirmRemoval) {
        const updatedCompras = [...compras];
        updatedCompras.splice(index, 1);
        setCompras(updatedCompras);
    }
  };

  const selectItem = (index) => {
      const confirmPurchase = window.confirm('Você tem certeza que quer marcar esse item como comprado?');
      if (confirmPurchase) {
          setCompras((prevCompras) => {
          return prevCompras.map((compra, i) => {
              if (i === index) {
              return { ...compra, comprado: 'Comprado' };
              } else {
              return compra;
              }
          });
          });
      }
  };

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <List compras={compras} removeItem={removeItem} selectItem={selectItem} />
      <Form formData={formData} setFormData={setFormData} enviaForm={enviaForm} />
    </div>
  );
}

export default App;
