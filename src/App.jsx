import { useContext, useState } from "react";
import ComponentA from "./components/ComponentA";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Card from "./components/Card";
import { ToggleModeContext } from "./context/ToggleModeContext";

function App() {
	const notes = [
		{
			id: 1,
			text: "I love Jesus",
		},
		{
			id: 2,
			text: "Spend time with Dami",
		},
		{
			id: 3,
			text: "Cook dinner",
		},
	];

	const { toggleLightAndDarkMode, setToggleLightAndDarkMode } =
		useContext(ToggleModeContext);

	return (
		<main
			className={`h-[150vh] w-full ${
				toggleLightAndDarkMode === false
					? "bg-white text-black"
					: "bg-black text-white"
			} px-[50px] md:px-[200px] py-5 font-nanum`}
		>
			<div className="flex items-center justify-between ">
				<h1 className="text-[20px] md:text-[30px]">Welcome Nancy</h1>
				{toggleLightAndDarkMode ? (
					<button
						onClick={() =>
							setToggleLightAndDarkMode(!toggleLightAndDarkMode)
						}
					>
						<FiSun className="h-6 w-6" />
					</button>
				) : (
					<button
						onClick={() =>
							setToggleLightAndDarkMode(!toggleLightAndDarkMode)
						}
					>
						<FaMoon className="h-6 w-6" />
					</button>
				)}
			</div>
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
				{notes.map((note) => (
					<Card id={note.id} text={note.text} />
				))}
			</div>
			{/* <ComponentA /> */}
		</main>
	);
}

export default App;
