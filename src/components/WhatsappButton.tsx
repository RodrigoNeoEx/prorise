import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";

export const WhatsappButton = () => {
	const phoneNumber = 16992051424;
	const text = "Olá, gostaria de saber mais sobre a office trends.";

	return (
		<Link
			href={`https://api.whatsapp.com/send/?phone=55${phoneNumber}&text=${text}`}
			target="_blank"
		>
			<div className="bg-green-500 absolute bottom-3 right-3 w-fit cursor-pointer rounded-full p-2">
				<MdWhatsapp size={40} color="#FFF" />
			</div>
		</Link>
	);
};
