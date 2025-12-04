import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({
	display: "swap",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

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
			<body className={space_grotesk.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
