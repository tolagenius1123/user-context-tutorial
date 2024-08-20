const Card = ({ id, text }) => {
	return (
		<div
			key={id}
			className="shadow-lg border rounded-lg cursor-pointer h-[250px] w-full md:w-[250px]  py-4 px-6 "
		>
			<p>{text}</p>
		</div>
	);
};

export default Card;
