import React, { useState } from 'react';

const Form = ({ formData, setFormData, enviaForm }) => {
  return (
    <form className="form-add-item" action="#" method="post" onSubmit={enviaForm}>
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar Novo Item na Lista:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formData.nome}
            onChange={(event) =>
              setFormData({ ...formData, nome: event.target.value })
            }
          />
          <label htmlFor="item">Quantidade do item:</label>
          <input
            type="number"
            min="1"
            max="9999"
            className="form-control"
            id="quantidade"
            value={formData.quantidade}
            onChange={(event) =>
              setFormData({ ...formData, quantidade: event.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
};

export default Form;