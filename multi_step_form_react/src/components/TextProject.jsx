import React from "react";

const TextProject = ({ data, update }) => {
  return (
    <div className="text-project">
      <div className="form-control">
        <label htmlFor="negocio">Objetivo do projeto: </label>
        <textarea
          name="projeto"
          id="projeto"
          placeholder="Descreva quais os objetivos desse projeto"
          value={data.project || ""}
          onChange={(e) => update("project", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default TextProject;
