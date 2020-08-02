import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/App";
import CadstroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import NotFound from "./components/NotFound/notFound";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cadastro/video" component={CadstroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>,
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	document.getElementById("root")
);
