import "../css/header.css";
import { useContext } from "react";
import Context from "../context/context";

export default function HeaderApp() {
  const { level } = useContext(Context);

  return (
    <header className={`header ${level.style}`}>
      <div className="header__text">
        <p>Тек. уровень: <span>{level.title}</span></p>
      </div>
      <div className="header__text">
        {level.maxTotal === Infinity ? (
          <p>Выше только Путин</p>
        ) : (
          <p>След. уровень на {level.maxTotal + 1}</p>
        )}
      </div>
    </header>
  );
}
