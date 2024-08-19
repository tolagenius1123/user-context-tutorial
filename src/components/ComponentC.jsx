import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ComponentC = () => {
	const { name, department } = useContext(UserContext);

	return (
		<div className="mt-10 w-full h-[200px] border border-white rounded-lg p-5">
			<h1 className="text-2xl">Component C</h1>
			<p>Fullname: {name}</p>
			<p>Department: {department}</p>
		</div>
	);
};

export default ComponentC;
