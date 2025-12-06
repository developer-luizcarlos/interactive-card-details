import Image from "next/image";

const Home: React.FC = () => {
	return (
		<>
			<div className="decoration">
				<div className="card card--front">
					<header className="card--front__header">
						<Image
							src="images/card-logo.svg"
							alt="card logo"
							height={40}
							width={70}
						/>
					</header>
					<footer className="card--front__footer">
						<div className="card--front__numbers">
							<span className="number-set">0000</span>
							<span className="number-set">0000</span>
							<span className="number-set">0000</span>
							<span className="number-set">0000</span>
						</div>
						<div className="card--front__info">
							<span className="info__name">jane appleseed</span>
							<span className="info__expire-date">
								<span className="expire-date__month">00</span>
								<span>/</span>
								<span className="expire-date__year">00</span>
							</span>
						</div>
					</footer>
				</div>
				<div className="card card--back">
					<span className="card--back__cvc">000</span>
				</div>
			</div>
			<form className="form"></form>
		</>
	);
};

export default Home;
