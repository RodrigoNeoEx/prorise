import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const WhatsappButton = () => {
	const phoneNumber = 16992051424;
	const text = "Olá, gostaria de saber mais sobre a Prorise.";

	return (
		<div className="fixed bottom-3 right-3 ">
			<TooltipProvider>
				<Tooltip delayDuration={300}>
					<TooltipTrigger>
						<Link
							href={`https://api.whatsapp.com/send/?phone=55${phoneNumber}&text=${text}`}
							target="_blank"
						>
							<div className="w-fit cursor-pointer rounded-full bg-green-500 p-2">
								<MdWhatsapp size={40} color="#FFF" />
							</div>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="left" className="mr-2 animate-bounce bg-dark-600">
						<p>Fale conosco no WhatsApp - clique e envie uma mensagem! 📞💬</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};
