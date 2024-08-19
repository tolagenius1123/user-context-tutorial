import { useState } from "react";
import ComponentA from "./components/ComponentA";

function App() {
	return (
		<main className="h-[150vh] w-full bg-black text-white px-10 py-5 font-nanum">
			<h1 className="text-[50px]">Welcome Home</h1>
			<ComponentA />
		</main>
	);
}

export default App;
