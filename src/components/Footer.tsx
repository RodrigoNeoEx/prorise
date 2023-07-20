import { ContentContainer } from "@/components/ContentContainer";

export const Footer = () => {
	return (
		<footer className="bg-dark-700 py-12">
			<ContentContainer>
				<div className="space-y-6 md:flex md:space-y-0">
					<div className="flex-1 space-y-4">
						<p className="text-4xl">Prorise</p>
						<p className="max-w-xs text-base leading-7 text-custom-gray-500">
							A good design is not only aesthetically pleasing, but also functional. It should be
							able to solve the problem
						</p>
					</div>

					<div className="flex-1">
						<p className="mb-4 text-xl">Sections</p>

						<div className="grid grid-cols-2 gap-x-4 gap-y-8 text-sm text-custom-gray-500 md:grid-cols-3">
							<div className="flex flex-col space-y-3">
								<a href="#">Home</a>
								<a href="#">Section One</a>
								<a href="#">Section Two</a>
								<a href="#">Section Three</a>
							</div>

							<div className="flex flex-col space-y-3">
								<a href="#">Home</a>
								<a href="#">Section One</a>
								<a href="#">Section Two</a>
								<a href="#">Section Three</a>
							</div>

							<div className="flex flex-col space-y-3">
								<a href="#">Home</a>
								<a href="#">Section One</a>
								<a href="#">Section Two</a>
								<a href="#">Section Three</a>
							</div>
						</div>
					</div>
				</div>
			</ContentContainer>
		</footer>
	);
};
