import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';

export default function Header() {
	const [classLottie1, setClassLottie1] = useState();
	const [classLottie2, setClassLottie2] = useState('hidden');
	const [classLottie3, setClassLottie3] = useState('hidden');
  const [lottieValue, setLottieValue] = useState('lottieTemplate');
  const [valueText, setValueText] = useState('slicing');

	const handleClick = (e) => {
		if (e === 'lottieTemplate') {
			setLottieValue('lottieTemplate');
			setClassLottie1('');
			setClassLottie2('hidden');
      setClassLottie3('hidden');
      setValueText('slicing');
		} else if (e === 'lottieCustom') {
			setLottieValue('lottieCustom');
			setClassLottie1('hidden');
			setClassLottie2('');
      setClassLottie3('hidden');
      setValueText('Templating');
		} else if (e === 'lottieDeploy') {
			setLottieValue('lottieDeploy');
			setClassLottie1('hidden');
			setClassLottie2('hidden');
      setClassLottie3('');
      setValueText('Develop');
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (lottieValue === 'lottieTemplate') {
				setLottieValue('lottieCustom');
				setClassLottie1('hidden');
				setClassLottie2('');
        setClassLottie3('hidden');
        setValueText('Templating');
			} else if (lottieValue === 'lottieCustom') {
				setLottieValue('lottieDeploy');
				setClassLottie1('hidden');
				setClassLottie2('hidden');
        setClassLottie3('');
        setValueText('Develop');
			} else if (lottieValue === 'lottieDeploy') {
				setLottieValue('lottieTemplate');
				setClassLottie1('');
				setClassLottie2('hidden');
        setClassLottie3('hidden');
        setValueText('slicing');  
			}
		}, 5500);
		return () => clearInterval(interval);
	});

	return (
		<div>
			<div className='container mx-auto px-2 lg:px-32'>
				<div className='relative mt-10 h-96 rounded-3xl bg-sky-500 shadow-lg md:h-72 lg:mx-28 lg:mt-20'>
					<div className='justify-between p-10 px-8 md:flex lg:pt-16'>
						<div>
							<h6 className='text-lg font-semibold text-white'>
								I'AM
							</h6>
							<h1 className='mt-2 text-2xl font-semibold text-white md:text-4xl lg:text-[40px]'>
								<div className='text-4xl md:text-5xl'>
									FRONT-END
								</div>
								<div className='relative'>
									<h1 className='pl-8 text-4xl font-bold md:pl-20 md:text-4xl'>
										WEB DEVELOPER
									</h1>
									<span className='absolute inset-y-1/2 left-0 w-7 -translate-y-1/2 transform border-t-4 border-white md:w-16' />
								</div>
                <div className='text-end text-sm'>{valueText }</div>
							</h1>
						</div>
						<div>
							<Player
								className={
									classLottie1 +
									` absolute bottom-0 left-0 top-[9rem] w-[400px] md:right-0 md:left-auto md:-top-4 md:w-[400px] lg:-top-16 lg:-right-10 lg:h-[400px] lg:w-[400px]`
								}
								autoplay={true}
								loop={true}
								src='json/lottieTemplate.json'></Player>
							<Player
								className={
									classLottie2 +
									` absolute bottom-0 left-0 top-[9rem] w-[400px] md:right-0 md:left-auto md:-top-4 md:w-[400px] lg:-top-16 lg:-right-10 lg:h-[400px] lg:w-[400px] `
								}
								autoplay={true}
								loop={true}
								speed={0.5}
								src='json/lottieWebCustom.json'></Player>
							<Player
								className={
									classLottie3 +
									` absolute -bottom-6 left-0 top-[9rem] w-[400px] md:right-0 md:left-auto md:-top-4 md:w-[350px] lg:-top-4 lg:-right-4 lg:h-[350px] lg:w-[350px]`
								}
								autoplay={true}
								loop={true}
								src='json/lottieWebDeploy.json'></Player>
						</div>
					</div>
					<div className='absolute -bottom-5 left-10 hidden md:block lg:block'>
						<div className='flex gap-2'>
							<div
								className='group flex cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2 lg:w-28'
								onClick={() => handleClick('lottieTemplate')}>
								<div className='m-auto mr-2 rounded-full border-[1px] border-black bg-sky-400 p-2 duration-100 group-hover:border-r-4'></div>
								<h2 className='m-auto ml-0 text-xs font-semibold text-slate-600'>
									Slicing
								</h2>
							</div>
							<div
								className='group flex w-28 cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2'
								onClick={() => handleClick('lottieCustom')}>
								<div className='m-auto mr-2 rounded-full border-[1px] border-black bg-yellow-400 p-2 duration-100 group-hover:border-r-4'></div>
								<h2 className='m-auto ml-0 text-xs font-semibold text-slate-600'>
									Templating
								</h2>
							</div>
							<div
								className='group flex w-28 cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2'
								onClick={() => handleClick('lottieDeploy')}>
								<div className='m-auto mr-2 rounded-full border border-black bg-red-400 p-2 duration-100 group-hover:border-r-4'></div>
								<h2 className='m-auto ml-0 text-xs font-semibold text-slate-600'>
									Develop
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-4 block text-center md:hidden lg:hidden'>
					<div className='text-[8px] text-slate-500'>SCROLL DOWN</div>
					<Player
						className='w-[30px] opacity-60'
						autoplay={true}
						loop={true}
						speed={0.4}
						src='json/lottieArrowDown.json'></Player>
				</div>
			</div>
		</div>
	);
}
