import React  from "react";
import reactDOM from 'react-dom/client'
import App from "./App";

const rootElement = document.getElementById('root');

if (rootElement) {
    reactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
} else {
    console.error("Não foi possível encontrar o elemento #root no DOM.");
}


