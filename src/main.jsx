import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./context/UserContext.jsx";
import { ToggleContextProvider } from "./context/ToggleModeContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserContextProvider>
			<ToggleContextProvider>
				<App />
			</ToggleContextProvider>
		</UserContextProvider>
	</StrictMode>
);
