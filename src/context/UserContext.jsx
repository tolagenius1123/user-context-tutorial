import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		name: "Nancy Dev",
		department: "Accounting",
	});

	const { name, department } = userInfo;

	const UserContextValue = { name, department };

	return (
		<UserContext.Provider value={UserContextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
