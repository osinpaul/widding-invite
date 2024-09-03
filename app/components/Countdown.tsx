"use client";

import React from "react";
import Countdown from "react-countdown";
import { RevealWrapper } from "next-reveal";

function CountdownComp() {
  function renderer({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
  }) {
    return completed ? (
      <span>Мероприятие состоялось.</span>
    ) : (
      <span>
        {days} дней {hours} часов
        <br />
        {minutes} минут {seconds} секунд
      </span>
    );
  }

  return (
    <section id="countdown">
      <div className="min-h-screen bg-[url('/images/countdown/bg.jpg')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm font-light">Наверняка вы уже все поняли, но на всякий случай:</p>
              <h1 className="text-3xl font-light mt-2 mb-4">Вы приглашены!</h1>
              <div className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                  <span>Куда бежать?</span>
                  <span className="font-semibold"> 31 августа 2024 года, 09:30.</span> <span>Ресторан "Карлсон"</span>
                </p>
                <p className="py-2 px-2 flex flex-col gap-2">
                  <span>Осталось всего:</span>
                  <Countdown
                    date={new Date("2024-08-31")}
                    renderer={renderer}
                  />
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownComp;
