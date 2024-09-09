import { createContext, useEffect, useState } from "react";
import Level1 from "../img/1.png";
import Level2 from "../img/2.png";
import Level3 from "../img/3.png";
import Level4 from "../img/4.png";
import Level5 from "../img/5.png";
import Level6 from "../img/6.png";

const Context = createContext({
  level: 1,
  total: 0,
});

const levels = [
  {
    level: 1,
    title: "Джавидан Дым",
    img: Level1,
    style: 'level-1',
    minTotal: 0,
    maxTotal: 49,
  },
  {
    level: 2,
    title: "Молодой Джевик",
    img: Level2,
    style: 'level-2',
    minTotal: 50,
    maxTotal: 99,
  },
  {
    level: 3,
    title: "Уличный Джев",
    img: Level3,
    style: 'level-3',
    minTotal: 100,
    maxTotal: 174,
  },
  {
    level: 4,
    title: "Интеллигентный Джон",
    img: Level4,
    style: 'level-4',
    minTotal: 175,
    maxTotal: 249,
  },
  {
    level: 5,
    title: "Заряженный Джига",
    img: Level5,
    style: 'level-5',
    minTotal: 250,
    maxTotal: 399,
  },
  {
    level: 6,
    title: "Президент Азербайджана",
    img: Level6,
    style: 'level-6',
    minTotal: 400,
    maxTotal: Infinity,
  },
];

export function ContextProvider({ children }) {
  const [level, setLevel] = useState({});
  const [total, setTotal] = useState(+localStorage.getItem('total'));

  useEffect(() => {
    setLevel(
      levels.find((e) => {
        if (total >= e.minTotal && total <= e.maxTotal) {
          return true;
        }
      })
    );
  });

  useEffect(() => {
    localStorage.setItem('total', total);
  }, [total])

  function clickHandler() {
    setTotal((t) => (t += 1));
  }

  return (
    <Context.Provider value={{ level, total, clickHandler }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
