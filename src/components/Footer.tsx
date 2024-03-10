import CompleteLogo from "./logos/CompleteLogo";

const Footer = () => {
	return (
		<footer id="contact-us" className="pb-8 bg-secondary lg:p-12 2xl:px-48 mt-24">
			<div className="p-4 lg:pt-0 lg:flex  lg:justify-between">

				<div className="w-full flex justify-center ">
					<CompleteLogo className="w-32 h-32 p-2 bg-white rounded-md drop-shadow-lg" />
				</div>

			</div >
			< div className="flex flex-col items-center gap-1 text-sm border-t text-white/50 border-white/20" >
				<p className="mt-6">
					{"CARE ZONE - (Home Nursing Services)"}
				</p>
				<p>Copyright ©carezone {new Date().getFullYear()}. All rights reserved.</p>
				<p className="self-center lg:self-end">Crafted by <a href="https://sandeep-morya.vercel.app/" target="_blank">@Sandeep-Maurya</a></p>
			</div >
		</footer >
	);
};

export default Footer;
