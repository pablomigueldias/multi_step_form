import React from "react";

const UserForm = ({ data, update }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Como prefere ser chamado"
          value={data.name || ""}
          onChange={(e) => update("name", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="number"
          name="telefone"
          id="telefone"
          placeholder="Digite seu número de WhatsApp"
          value={data.number || ""}
          onChange={(e) => update("number", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={data.email || ""}
          onChange={(e) => update("email", e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
