import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import BACKEND_URL from '../../../config/index';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    color: '#000',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const CATEGORIAS_API = `${BACKEND_URL}/categorias`;

    fetch(CATEGORIAS_API)
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
        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
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
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </form>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
