import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import errorImg from "../../assets/error.png";

const ModalError = ({ error }) => {
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

	return (
		<>
			{error ? (
				<motion.div
					className="backdrop"
					onClick={handleClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<motion.img
						src={errorImg}
						alt="modal pic"
						initial={{ y: "-100vh" }}
						animate={{ y: 0 }}
						video={false}
					/>
				</motion.div>
			) : (
				<motion.div
					className="backdrop"
					onClick={handleClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<motion.img
						src={errorImg}
						alt="modal pic"
						initial={{ y: "-100vh" }}
						animate={{ y: 0 }}
						video={false}
					/>
				</motion.div>
			)}
		</>
	);
};

export default ModalError;
