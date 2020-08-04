import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    color: '#000',
  };
  const [valores, setValores] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValor(chave, valor) {
    console.log(chave, valor);
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValor(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {

    const BACKEND_URL = 'http://localhost:8080/categorias';

    fetch(BACKEND_URL)
      .then(async (response) => {
        const parsed = await response.json();
        setCategorias([...parsed]);
      });

  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, valores]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descricao"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={valores.color}
          onChange={handleChange}
        />

        <Button as="button">
          Cadastrar
        </Button>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}
        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${index}-${categoria.nome}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>
      </form>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
