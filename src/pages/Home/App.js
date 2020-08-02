import React, { useEffect, useState } from "react";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";
import loading from "../../assets/gif.gif";

function Home() {
	// http://localhost:8080/categorias?_embed=videos
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		// http://localhost:8080/categorias?_embed=videos
		categoriasRepository
			.getAllWithVideos()
			.then((categoriasComVideos) => {
				console.log(categoriasComVideos[0].videos[0]);
				setDadosIniciais(categoriasComVideos);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	console.log(dadosIniciais);
	return (
		<PageDefault paddingAll={0}>
			{dadosIniciais.length === 0 && (
				<img src={loading} alt="gif" className="loading" />
			)}

			{dadosIniciais.map((categoria, indice) => {
				if (indice === 0) {
					return (
						<div key={categoria.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={
									dadosIniciais[0].videos[0].description
								}
							/>
							<Carousel
								ignoreFirstVideo
								category={dadosIniciais[0]}
							/>
						</div>
					);
				}

				return <Carousel key={categoria.id} category={categoria} />;
			})}
		</PageDefault>
	);
}

export default Home;
