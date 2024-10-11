import "./Steps.css";
import { RiContactsBookFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa6";
import { BsDiagram3Fill } from "react-icons/bs";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <RiContactsBookFill />
        <p>Contato</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <FaHotel />
        <p>Empresa</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <BsDiagram3Fill />
        <p>Projeto</p>
      </div>
    </div>
  );
};

export default Steps;
