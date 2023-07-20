interface SectionHeaderProps {
	title: string;
	description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
	return (
		<header className="space-y-8">
			<h3 className="text-4xl font-bold">{title}</h3>
			<p className="text-custom-gray-500">{description}</p>
		</header>
	);
};
