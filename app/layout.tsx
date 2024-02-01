import type { Metadata } from "next";
import "tailwindcss/tailwind.css"; //never forget this
import localFont from 'next/font/local'
export const metadata: Metadata = {
	title: "Guess Who: TV Show Edition",
	description:
		"Get ready for a hilarious challenge with your friends, testing your knowledge of iconic sitcom characters from Friends and The Office. One player acts as the host, choosing a character from either show. They can describe the character`&apos`s personality, quirks, or memorable moments without revealing their name. The other players have a limited number of guesses (try 3 attempts for a fast-paced game, or 5 for a more relaxed one). Each guess can be based on the host`&apos`s clues or anything they remember about the characters.",
};
export const amaranth = localFont({
	src: [
		{
			path: "../assets/Font/Amaranth-Regular.ttf",
		},
	],
	variable: "--font-amaranth",
})
export const elMessiri = localFont({
	src: [
		{
			path: "../assets/Font/ElMessiri-VariableFont_wght.ttf",
		},
	],
	variable: "--font-el-messiri",
})
export const poppins = localFont({
	src: [
		{
			path: "../assets/Font/Poppins-Regular.ttf",
		},
	],
	variable: "--font-poppins",
})
export const quattrocentoSans = localFont({
	src: [
		{
			path: "../assets/Font/QuattrocentoSans-Regular.ttf",
		},
	],
	variable: "--font-quattroento-sans",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-darkNavy min-h-dvh h-full min-w-dvw w-full text-red-500">
				<div className="absolute bg-cyan blur-[120px] -left-40 top-32 h-80 w-80 "></div>
				<div className="p-3 z-40 flex w-full align-middle items-center flex-col">
					{children}
				</div>
			</body>
		</html>
	);
}
