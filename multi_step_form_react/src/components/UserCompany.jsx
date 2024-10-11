import React from "react";

const UserCompany = ({ data, update }) => {
  return (
    <div className="form-company">
      <div className="form-control">
        <label htmlFor="empresa">Nome da empresa:</label>
        <input
          type="text"
          name="empresa"
          id="empresa"
          placeholder="Qual é o nome da empresa"
          value={data.company || ""}
          onChange={(e) => update("company", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="funcionario">Número de funcionários:</label>
        <input
          type="number"
          name="funcionario"
          id="funcionario"
          placeholder="Digite o número de colaboradores"
          value={data.employees || ""}
          onChange={(e) => update("employees", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="negocio">Sobre seu negócio</label>
        <textarea
          name="negocio"
          id="negocio"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
          value={data.comment || ""}
          onChange={(e) => update("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default UserCompany;
