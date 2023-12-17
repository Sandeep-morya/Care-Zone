import { PropsWithChildren } from "react";
import FooterHeading from "./FooterHeading";

const Li = ({ children }: PropsWithChildren) => (
	<li className="hover:text-primary transition grid grid-cols-[1fr,3fr]">
		{children}
	</li>
);

const BusinessHours = () => {
	return (
		<div className="text-white/80 mt-8">
			<FooterHeading title="Business Hours" />
            <ul className="flex flex-col gap-2">
				<Li>
					<span>Mon:</span> Open 24 Hours
				</Li>
				<Li>
					<span>Tue:</span> Open 24 Hours
				</Li>
				<Li>
					<span>Wed:</span> <span>Open 24 Hours</span>
				</Li>
				<Li>
					<span>Thu:</span> <span>Open 24 Hours</span>
				</Li>
				<Li>
					<span>Fri:</span> <span>Open 24 Hours</span>
				</Li>
				<Li>
					<span>Sat:</span> <span>Open 24 Hours</span>
				</Li>
				<Li>
					<span>Sun:</span> <span>Open 24 Hours</span>
				</Li>
			</ul>
		</div>
	);
};

export default BusinessHours;
