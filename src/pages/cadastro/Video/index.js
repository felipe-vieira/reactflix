import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((list) => setCategorias(list));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoria = categorias.find((value) => value.titulo === valores.categoria);

        videoRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoria.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso');
            history.push('/');
          })
          .catch((err) => {
            alert(`Erro cadastrando ${err.message}`);
            console.error(err);
          });
      }}
      >
        <FormField
          label="Titulo do vídeo"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categorias.map((cat) => cat.titulo)}
        />


        <Button type="submit" as="button">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
