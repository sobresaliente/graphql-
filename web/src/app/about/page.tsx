import Image from "next/image";



export default function About() {
	return <main className="flex flex-col min-h-screen">
		Hello there, I'm Sobresaliente, some of you may know me by name xnxlf. Mostly I do indie hacking, but I do live stream occasionally ツ	
		<Image src={"/about-hero.gif"} width={"200"} height={"200"} alt="Pokemons running gif"/>
	</main>
};
