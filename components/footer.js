import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const thisyear = new Date().getFullYear();

const Footer = () => {
	return (
		<Fragment>
			<div className="md:flex kramdown border-t-2 border-b-2">
				{/* studio roozen */}
				<div className="md:w-50 px-50 text-center mt-24 text-gray-500">
					<p>
						<Link href="/studioroozen">
							<a className="font-700">Studio Roozen</a>
						</Link>
					</p>
					<p className="font-700 text-18 leading-7 text-gray-500">
						Een multidisciplinair ontwerpbureau, onder leiding van
						Pieter Roozen, sinds 1981, in wisselende samenstelling
						en in samenwerking met diverse specialisten. Sinds 2015
						werkt Pieter Roozen weer zelfstandig.
					</p>
					<p className="text-18 leading-7">
						Lid van de Beroepsvereniging Nederlandse Ontwerpers
						(BNO).
					</p>
				</div>
				{/* pieter roozen */}
				<div className="md:w-50 border-l-2 md:pr-50 mt-24">
					<p className="text-center">
						<Link href="/pieterroozen">
							<a className="font-700">Pieter Roozen</a>
						</Link>
					</p>

					<div className="flex flex-col md:flex-row justify-center -mt-21">
						<div className="flex justify-center md:w-50">
							<div className="object-center w-150 h-150 mt-18 md:ml-50 relative">
								<Image
									className="rounded-full"
									src="/img/pieter_portret.jpg"
									alt="Pieter Roozen"
									layout="fill"
								/>
							</div>
						</div>
						<div className="md:w-50 md:flex md:flex-col justify-center">
							<div className="flex items-center mb-18 relative">
								<div className="relative w-25 h-25 opacity-50">
									<Image
										src="/img/feather/phone.svg"
										alt="telephone"
										layout="fill"
									/>
								</div>
								&nbsp;
								<span className="pl-5 text-19">
									M +31 (0)6 8188 3838
								</span>
							</div>
							<div className="flex">
								<div className="relative w-25 h-25 opacity-50">
									<Image
										src="/img/feather/mail.svg"
										alt="email"
										layout="fill"
									/>
								</div>
								<a
									className="text-21 ml-18"
									href="mailto:pieter@roozen.nl"
								>
									pieter@roozen.nl
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="kramdown md:flex px-20">
				<div className="md:w-1/3 -mt-10">
					<p className="mb-0 pt-30">
						&copy;{thisyear}&nbsp;Studio Roozen
					</p>
				</div>
				<div className="md:w-1/3 flex items-center justify-center -mt-10">
				
				</div>
				<div className="md:w-1/3 flex items-center justify-around">
					<p className="mb-0 pr-18 pt-18">
						<Link className="" href="/proclaimer">
							<a>proclaimer</a>
						</Link>
					</p>
					<p className="mb-0 pt-18 pr-20">
						{' '}
						<Link className="mb-0" href="/colofon">
							<a>colofon</a>
						</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
