import Image from "next/image";
import Splashscreen from "@/components/Splashscreen/Splashscreen";
import ListProvider from "@/components/Contexts/ListProvider";
export default function Home() {
	return (
		<main>
			<ListProvider>
				<Splashscreen />
			</ListProvider>
		</main>
	);
}
