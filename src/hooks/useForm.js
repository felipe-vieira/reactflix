/* eslint-disable */
import {useState} from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

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

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    handleChange,
    valores,
    clearForm,
  };
};

export default useForm;