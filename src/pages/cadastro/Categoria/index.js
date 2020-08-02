import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button/index";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import videosRepository from "../../../repositories/videos";

import Modal from "../../../components/Modal";
import ModalError from "../../../components/Modal/error";

function CadastroCategoria() {
	const valoresIniciais = {
		titulo: "",
		descricao: "",
		cor: "",
	};

	const { handleChange, values, clearForm } = useForm(valoresIniciais);

	const [categorias, setCategorias] = useState([]);

	const [videos, setVideos] = useState([]);

	const history = useHistory();

	const [modal, setModal] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const URL_TOP = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://celoflix.herokuapp.com/categorias";

		fetch(URL_TOP).then(async (respostaDoServidor) => {
			const resposta = await respostaDoServidor.json();
			setCategorias([...resposta]);
		});
	}, []);

	useEffect(() => {
		videosRepository.getAll().then((dataFromServer) => {
			setVideos(dataFromServer);
		});
	}, []);

	console.log(values);
	console.log("oi", videos);

	const numberVideos = categorias.map((categoria) => {
		let num = 0;
		videos.find((video) => {
			if (video.categoriaId === categoria.id) {
				num++;
			}
		});
		return num;
	});

	console.log("numero", numberVideos);

	return (
		<PageDefault>
			<h1>
				Cadastro de Categoria:
				{values.titulo}
			</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();

					if (values.titulo.lenght <= 0 || values.cor.length <= 0) {
						setError(true);

						return;
					}

					const categoriaEscolhida = categorias.find((categoria) => {
						if (categoria.titulo === values.titulo) {
							alert("Categoria já existente!");
							return false;
						} else {
							return true;
						}
					});

					if (categoriaEscolhida) {
						setCategorias([...categorias, values]);
						let index = categorias.length + 1;
						categoriasRepository
							.create({
								titulo: values.titulo,
								link_extra: {
									text: values.descricao,
									url: values.url,
								},
								cor: values.cor,
								id: index,
							})
							.then(() => {
								console.log("Cadastrou com sucesso!");
								// redirect

								clearForm();
								setModal(true);
								// history.push("/");
							});
					}
				}}
			>
				{modal && <Modal video={false} />}
				{error && <ModalError error={false} />}
				<FormField
					label="Nome da Categoria"
					name="titulo"
					value={values.titulo}
					onChange={handleChange}
				/>

				<FormField
					label="Descrição"
					type="textarea"
					name="descricao"
					value={values.descricao}
					onChange={handleChange}
				/>
				<FormField
					label="URL"
					type="text"
					name="url"
					value={values.url}
					onChange={handleChange}
				/>

				<FormField
					label="Cor"
					type="color"
					name="cor"
					value={values.cor}
					onChange={handleChange}
				/>

				<Button>Cadastrar</Button>
			</form>

			{categorias.length === 0 && (
				<div>
					{/* Cargando... */}
					Loading...
				</div>
			)}

			<table className="table">
				<thead>
					<tr>
						<th>Categorias</th>
						<th>Videos</th>
					</tr>
				</thead>
				<tbody>
					{categorias.map((categoria, index) => (
						<tr>
							<td key={`${categoria.titulo}`}>
								{categoria.titulo}
							</td>
							<td key={`${numberVideos[index]}`}>
								{numberVideos[index]}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Link to="/" className="link">
				Ir para home
			</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
