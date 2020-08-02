import config from "../config";

const URL_VIDEOS = `${config.URL_TOP}/videos`;

function create(objetoDoVideo) {
	return fetch(`${URL_VIDEOS}?_embed=videos`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objetoDoVideo),
	}).then(async (respostaDoServidor) => {
		if (respostaDoServidor.ok) {
			const resposta = await respostaDoServidor.json();
			return resposta;
		}

		throw new Error("Não foi possível cadastrar os dados :(");
	});
}

function getAll() {
	return fetch(`${URL_VIDEOS}?_embed=videos`).then(
		async (respostaDoServidor) => {
			if (respostaDoServidor.ok) {
				const resposta = await respostaDoServidor.json();
				console.log(resposta);
				return resposta;
			}

			throw new Error("Não foi possível pegar os dados :(");
		}
	);
}

export default {
	create,
	getAll,
};
