import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { UserContext } from "../context/UserContext";

const ComponentA = () => {
	const { name, department } = useContext(UserContext);

	return (
		<div className="w-full h-[600px] border border-white rounded-lg px-10 py-10">
			<h1 className="text-2xl">Component A</h1>
			<p>Fullname: {name}</p>
			<p>Department: {department}</p>
			<ComponentB />
		</div>
	);
};

export default ComponentA;
