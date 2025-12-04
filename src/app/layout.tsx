import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Frontend Mentor | Interactive Card Details",
	description: "Challenge completed with NextJS",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
