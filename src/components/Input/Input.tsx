import "./input.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	isValidValue: boolean;
}

const Input: React.FC<Props> = ({isValidValue, ...rest}) => {
	return (
		<input
			className={`input ${!isValidValue && "input--error"}`}
			{...rest}
		/>
	);
};

export default Input;
