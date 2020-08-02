import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FormFieldWrapper = styled.div`
	position: relative;
	textarea {
		min-height: 150px;
	}

	input[type="color"] {
		padding-left: 56px;
	}
`;

const Label = styled.label``;

Label.Text = styled.span`
	color: #e5e5e5;
	height: 57px;
	position: absolute;
	top: 0;
	left: 16px;
	margin-bottom: 3px;

	display: flex;
	align-items: center;

	transform-origin: 0% 0%;
	font-size: 1.1rem;
	font-style: normal;
	font-weight: 300;

	transition: 0.1s ease-in-out;
`;

const Input = styled.input`
	background: #030303;
	color: #f5f5f5;
	display: block;
	width: 100%;
	height: 57px;
	font-size: 1.1rem;

	outline: 0;
	border: 0;
	border-top: 4px solid transparent;
	border-bottom: 4px solid #fff;

	padding: 16px 10px;
	margin-bottom: 45px;

	resize: none;
	border-radius: 5rem;
	transition: border-color 0.3s;

	&:focus {
		border-bottom-color: var(--primary);
		box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.8),
			inset -2px -2px 6px rgba(255, 255, 255, 0.1);
	}

	&:focus:not([type="color"]) + span {
		transform: scale(0.7) translateY(-0.9rem);
		padding-bottom: 5px;
	}

	&:invalid {
		color: #ff3015;
	}

	${function ({ hasValue }) {
		return (
			hasValue &&
			css`
				&:not([type="color"]) + span {
					transform: scale(0.7) translateY(-0.8rem);
				}
			`
		);
	}}
`;

function FormField({ label, type, name, value, onChange, suggestions }) {
	const fieldID = `id_${name}`;

	const hasValue = value.length;

	const hasSuggestions = Boolean(suggestions.length);
	return (
		<FormFieldWrapper>
			<Label htmlFor={fieldID}>
				{type === "textarea" ? (
					<Input
						as="textarea"
						type="text"
						name={name}
						value={value}
						hasValue={hasValue}
						onChange={onChange}
						pattern=".{10,}"
						style={{ borderRadius: "1rem 1rem 5rem 5rem" }}
					/>
				) : (
					<Input
						id={fieldID}
						type={type}
						name={name}
						value={value}
						hasValue={hasValue}
						onChange={onChange}
						pattern=".{3,}"
						autoComplete={hasSuggestions ? "off" : "on"}
						list={
							hasSuggestions ? `suggestionFor_${fieldID}` : null
						}
					/>
				)}
				<Label.Text>{label} :</Label.Text>
				{hasSuggestions && (
					<datalist id={`suggestionFor_${fieldID}`}>
						{suggestions.map((suggestion) => (
							<option
								value={suggestion}
								key={`suggestionFor_${fieldID}_option${suggestion}`}
							>
								{suggestion}
							</option>
						))}
					</datalist>
				)}
			</Label>
		</FormFieldWrapper>
	);
}

FormField.defaultProps = {
	type: "text",
	value: "",
	onChange: () => {},
	suggestions: [],
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
