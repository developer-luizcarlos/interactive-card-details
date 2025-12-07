import "./formField.css";

import {cloneElement, useId} from "react";

interface Props {
	controls: Array<React.ReactElement<HTMLInputElement>>;
	errorLabel: string;
	isControlsValueValid: boolean;
	label: string;
}

const FormField: React.FC<Props> = ({
	controls,
	errorLabel,
	isControlsValueValid,
	label,
}) => {
	const inputID = useId();

	const inputWithID = cloneElement(controls[0], {
		id: inputID,
	});

	return (
		<div className="form-field">
			<label htmlFor={inputID} className="form-field__label">
				{label}
			</label>
			{controls.length > 1
				? controls.map(c => {
						return c;
				  })
				: inputWithID}
			{!isControlsValueValid && (
				<p className="form-field__error-msg">{errorLabel}</p>
			)}
		</div>
	);
};

export default FormField;
