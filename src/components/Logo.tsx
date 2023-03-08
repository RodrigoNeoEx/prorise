import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<div className="w-fit">
			<Link href="/">
				<Image
					src="https://lirp.cdn-website.com/0926e7b8/dms3rep/multi/opt/logo_final_site-c9a3aeea-114w.png"
					alt="Office trends logo"
					width={100}
					height={40}
				/>
			</Link>
		</div>
	);
};
