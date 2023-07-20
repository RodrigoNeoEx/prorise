import { ContentContainer } from "@/components/ContentContainer";

export const CopyrightSection = () => {
	const currentYear = new Date(Date.now()).getFullYear();

	return (
		<ContentContainer>
			<div className="bg-dark-900 py-4">
				<p className="text-center text-sm text-custom-gray-500">
					© Todos os direitos reservados, {currentYear}.
				</p>
			</div>
		</ContentContainer>
	);
};
