import React from "react";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import UserCompany from "./components/UserCompany";
import TextProject from "./components/TextProject";
import Steps from "./components/Steps";

// hooks

import { useform } from "./hooks/useForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  number: "",
  comment: "",
  employees: "",
  business: "",
  project: "",
};

const App = () => {
  const [data, setData] = useState(formTemplate);

  const update = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} update={update} />,
    <UserCompany data={data} update={update} />,
    <TextProject data={data} update={update} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useform(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h1>Deixe seu contato!</h1>
        <p>
          Ficamos felizes com a sua visita! Preencha o formulário para entrarmos
          em contato.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
