import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import card_bg from '../assets/card_bg.jpg';

import male1 from '../assets/male1.png';
import male2 from '../assets/male2.png';
import female1 from '../assets/female1.png';
import female2 from '../assets/female2.png';
import slime from '../assets/slime.png';
import dagron from '../assets/dagron.png';

const images = {
	male1,
	male2,
	female1,
	female2,
	slime,
	dagron,
};

const Star = () => (
	<svg width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
		<linearGradient id="q0c2dLEp_4LHk~8cW2fATa" x1="9.009" x2="38.092" y1="6.36" y2="45.266" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#ffda1c"></stop>
			<stop offset="1" stop-color="#feb705"></stop>
		</linearGradient>
		<path
			fill="url(#q0c2dLEp_4LHk~8cW2fATa)"
			d="M24.913,5.186l5.478,12.288l13.378,1.413c0.861,0.091,1.207,1.158,0.564,1.737l-9.993,9.005	l2.791,13.161c0.18,0.847-0.728,1.506-1.478,1.074L24,37.141l-11.653,6.722c-0.75,0.432-1.657-0.227-1.478-1.074l2.791-13.161	l-9.993-9.005c-0.643-0.579-0.296-1.646,0.564-1.737l13.378-1.413l5.478-12.288C23.439,4.395,24.561,4.395,24.913,5.186z"
		></path>
	</svg>
);

const ImgGenerator = () => {
	let { name, rarity, job, basehp, basemp } = useParams();

	let [loading, setLoading] = useState(true);
	let [imgPath, setImgPath] = useState(undefined);

	useEffect(() => {
		for (const [imgName, path] of Object.entries(images)) {
			if (name === imgName) {
				setImgPath(path);
			}
		}
		setLoading(false);
	}, [name]);

	let stars = [...Array(parseInt(rarity)).keys()];

	if (loading) {
		return null;
	}

	return (
		<div>
			<div style={{ width: '350px', height: '450px', backgroundImage: `url(${card_bg})` }} className=" bg-blue-600 p-2 bg-cover relative overflow-hidden">
				{/* IMAGE */}
				<div className="flex justify-center">
					<img src={imgPath} />
				</div>

				{/* TEXT */}
				<div className="font-ferrum relative bottom-0 w-full h-full">
					<p className="text-3xl absolute top-8">{job}</p>
					<p className="text-5xl absolute top-14">{name}</p>

					<div className="text-2xl right-0 top-2 text-right absolute">
						<div className="flex mb-2">
							{stars.map((star, index) => (
								<span key={index}>
									<Star />
								</span>
							))}
						</div>
						<p>{basehp} hp</p>
						<p>{basemp} mb</p>
					</div>
				</div>
			</div>

			{/* DEBUG */}
			{/* <div className="mt-20">
				{name}, {rarity}, {job}, {basehp}, {basemp}
			</div> */}
		</div>
	);
};

export default ImgGenerator;
