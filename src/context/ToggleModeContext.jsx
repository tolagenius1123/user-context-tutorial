import { createContext, useState } from "react";

const ToggleModeContext = createContext({});

const ToggleContextProvider = ({ children }) => {
	const [toggleLightAndDarkMode, setToggleLightAndDarkMode] = useState(false);

	const ToggleModeContextValue = {
		toggleLightAndDarkMode,
		setToggleLightAndDarkMode,
	};

	return (
		<ToggleModeContext.Provider value={ToggleModeContextValue}>
			{children}
		</ToggleModeContext.Provider>
	);
};

export { ToggleModeContext, ToggleContextProvider };
