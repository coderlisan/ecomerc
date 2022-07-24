import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App'

const MainApp = () => (
	<Router>
		<App />
	</Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />)
