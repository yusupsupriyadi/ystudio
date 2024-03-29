import React from 'react';

export default function Navbar() {
	return (
		<div>
			<nav>
				<div className='container mx-auto px-8 lg:px-32'>
					<div className='flex items-center justify-between pt-6 lg:pb-6'>
						<a
							href='#'
							className='text-xl font-bold text-slate-600'>
							Yusup Supriyadi
						</a>
						<div className='flex gap-8'>
							<div
								id='nav-list'
								className='hidden md:block'>
								<ul className='flex gap-8 text-sm'>
									<li>
										<a href='#'>Home</a>
									</li>
									<li>
										<a href='#'>About me</a>
									</li>
									<li>
										<a href='#'>Skill</a>
									</li>
									<li>
										<a href='#'>Portfolio</a>
									</li>
								</ul>
							</div>
							<div>
								<a
									href='#'
									className='rounded-full bg-sky-600 py-2 px-4 text-sm font-semibold text-white'>
									Contact
								</a>
							</div>
							<div className='block md:hidden'>bars</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
