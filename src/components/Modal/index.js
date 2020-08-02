import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import videoIMG from "../../assets/videoadd.png";
import categoriaIMG from "../../assets/catcriada.png";

const Modal = ({ video }) => {
	// if clicks in backdrop, it sets state of selected img to null, then, for if condition
	// it closes the modal
	const history = useHistory();
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			history.push("/");
		}
	};

	setTimeout(() => {
		history.push("/");
	}, 3000);
	console.log("modal", video);
	return (
		<motion.div
			className="backdrop"
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{video ? (
				<motion.img
					src={videoIMG}
					alt="modal pic"
					initial={{ y: "-100vh" }}
					animate={{ y: 0 }}
					video={false}
				/>
			) : (
				<motion.img
					src={categoriaIMG}
					alt="modal pic"
					initial={{ y: "-100vh" }}
					animate={{ y: 0 }}
					video={false}
				/>
			)}
		</motion.div>
	);
};

export default Modal;
