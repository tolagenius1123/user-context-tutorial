import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
	return (
		<div className="mt-10 w-full h-[400px] border border-white rounded-lg p-10">
			<h1 className="text-2xl">Component B</h1>
			{/* <p>Fullname: {userInfo.name}</p>
			<p>Department: {userInfo.department}</p> */}
			<ComponentC />
		</div>
	);
};

export default ComponentB;
