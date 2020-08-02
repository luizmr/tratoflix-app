import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";
import "../../../App.css";
import Modal from "../../../components/Modal/index";
import ModalError from "../../../components/Modal/error";

function CadastroVideo() {
	const history = useHistory();
	const [categorias, setCategorias] = useState([]);
	const categoryTitles = categorias.map(({ titulo }) => titulo);
	const { handleChange, values } = useForm({
		titulo: "",
		url: "",
		categoria: "",
	});

	const [modal, setModal] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		categoriasRepository.getAll().then((categoriasFromServer) => {
			setCategorias(categoriasFromServer);
		});
	}, []);

	console.log(categorias);

	return (
		<PageDefault>
			<h1>Cadastro de Video</h1>

			<form
				onSubmit={(event) => {
					event.preventDefault();
					// alert('Video Cadastrado com sucesso!!!1!');

					if (
						values.titulo.lenght <= 0 ||
						values.url.length <= 0 ||
						values.categoria.length <= 0
					) {
						// alert(
						// 	"Cadastro inválido, preencha corretamente os campos!"
						// );
						// history.push("/cadastro/video");
						setError(true);

						return;
					}
					const categoriaEscolhida = categorias.find((categoria) => {
						if (categoria.titulo != values.categoria) {
							if (categoria.id === categorias.length) {
								alert("Categoria inválida, crie primeiro!");
								history.push("/");
								return;
							}
						} else {
							return categoria.titulo === values.categoria;
						}
					});

					if (categoriaEscolhida) {
						console.log(categoriaEscolhida.id);
						videosRepository
							.create({
								titulo: values.titulo,
								url: values.url,
								categoriaId: categoriaEscolhida.id,
							})
							.then(() => {
								// console.log("Cadastrou com sucesso!");
								// // redirect
								// history.push("/");
								setModal(true);
							});
					}
				}}
			>
				{modal && <Modal video={true} />}
				{error && <ModalError error={true} />}

				<FormField
					label="Título do Vídeo"
					name="titulo"
					value={values.titulo}
					onChange={handleChange}
				/>

				<FormField
					label="URL"
					name="url"
					value={values.url}
					onChange={handleChange}
				/>

				<FormField
					label="Categoria"
					name="categoria"
					value={values.categoria}
					onChange={handleChange}
					suggestions={categoryTitles}
				/>

				<Button type="submit">Cadastrar</Button>
			</form>

			<br />
			<br />

			<Link to="/cadastro/categoria" className="link">
				Cadastrar Categoria
			</Link>
		</PageDefault>
	);
}

export default CadastroVideo;
