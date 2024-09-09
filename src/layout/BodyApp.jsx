import { useContext, useEffect } from "react";
import Context from "../context/context";
import "../css/body.css";
import Arbuz from "../img/watermelon (1).png";
import BackCoin from "../img/back-coin.png";

export default function BodyApp() {
  const { total, level } = useContext(Context);
  const { clickHandler } = useContext(Context);

  useEffect(() => {
    const $button = document.querySelector("#button");
    $button.style.animationName = "spin-coin";
    setTimeout(() => {
      $button.style.animationName = "";
    }, 1000);
  }, [level]);

  function clickHandler2(event) {
    const $button = document.querySelector("#button");
    clickHandler();
    const rect = $button.getBoundingClientRect();

    console.log(rect)
    console.log(event)

    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    const DEG = 50;

    const tiltX = (offsetX / rect.width) * DEG;
    const tiltY = (offsetY / rect.height) * DEG;

    $button.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    setTimeout(() => {
      $button.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 300)

    const plusArbuz = document.createElement('div');
    plusArbuz.classList.add('button__plus');
    plusArbuz.textContent = '+1';
    plusArbuz.style.left = `${event.clientX - rect.left}px`;
    plusArbuz.style.top = `${event.clientY - rect.top}px`;
    $button.prepend(plusArbuz);

    setTimeout(() => {
      plusArbuz.remove();
    }, 1000)
  }

  return (
    <section className={`body ${level.style}`}>
      <div className="counter">
        <p>{total}</p>
        <img src={Arbuz} alt="" />
      </div>
      <button
        className="button"
        id="button"
        onClick={(event) => {
          clickHandler2(event);
        }}
      >
        <div className="button__circle">
          <img src={BackCoin} alt="O" className="button__img-back" />
          <img src={level.img} alt="O" className="button__lvl-img" />

          <div className="button__back"></div>
        </div>
      </button>
    </section>
  );
}
