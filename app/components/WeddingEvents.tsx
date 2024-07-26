import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { RevealWrapper } from 'next-reveal';

function WeddingEvents() {
	return (
		<section id="wedding-events">
			<div
				className="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
				<div
					className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
				<div className="z-10 relative">
					<h1 className="text-xl italic text-white text-center font-light">
						Как подготовиться?
					</h1>
					<RevealWrapper duration={ 1500 } origin="bottom">
						<div className="mt-10">
							<img
								src="/images/weddingEvents/akad.jpg"
								alt="akad"
								className="w-full h-72 object-cover rounded-t-[1.25rem]"
							/>
							<div className="flex">
								<div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
									<p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
										ЗАГС
									</p>
								</div>
								<div
									className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
									<h1 className="italic text-xl font-light">
										Суббота, 31 августа 2024 года
									</h1>
									<hr className="border border-[#5a5a5a80] w-full"/>
									<p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
										<AiFillClockCircle/>
										<span>09:30</span>
									</p>
									<p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
										<strong className="text-black font-bold">
											Ресторан Карлсон
										</strong>
										<br/>
										Тут мы распишемся и сделаем несколько красивых фото на память. Форма одежды
										свободная, но будет здорово, если в одежде вы придержитесь светлых/пастельных
										тонов :)
										<br/>
										Заложите время на поиск парковочного места, это центр - они все платные.
									</p>
									<a target="_blank"
									   href="https://yandex.ru/maps/-/CDR1zQ8Z"
									   className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
									>
										На карту
									</a>
								</div>
							</div>
						</div>
					</RevealWrapper>
					<RevealWrapper duration={ 1500 } origin="bottom">
						<div className="mt-6">
							<img
								src="/images/weddingEvents/resepsi.jpg"
								alt="akad"
								className="w-full h-72 object-cover rounded-t-[1.25rem] object-left"
							/>
							<div className="flex">
								<div
									className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
									<h1 className="italic text-xl font-light">
										Загородная вечеринка
									</h1>
									<hr className="border border-[#5a5a5a80] w-full"/>
									<div>
										<p className="flex items-center text-[#5a5a5a] font-light text-[0.8rem] gap-1.5">
											<AiFillClockCircle/>
											<span>13:00 - Мы добираемся до базы отдыха и заселяемся</span>
										</p>
									</div>
									<p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
										<strong className="text-black font-bold">
											Шашлыки за городом на 30 человек. И мы накормим всех :)
										</strong>
										<br/>
										Форма одежды за вами. В программе игры, отдых, общение и песни у костра. С собой возьмите купальник, сменный комплект одежды на следующий день и все для комфортной и веселой ночевки.
									</p>
									<a
										href="https://yandex.ru/maps/-/CDWVABZe"
										className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
									>
										Мать моя, это где?
									</a>
								</div>
								<div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
									<p className="-rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-[3rem] lg:-translate-x-[.1rem] tracking-[5px]">
										ЛЕС
									</p>
								</div>
							</div>
						</div>
					</RevealWrapper>
				</div>
			</div>
		</section>
	);
}

export default WeddingEvents;
