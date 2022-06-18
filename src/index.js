import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const MainApp = () => (
	<Router>
		<App />
	</Router>
);

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>,
);
