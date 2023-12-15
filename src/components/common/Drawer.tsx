import { useCallback, useEffect, useState, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	right?: boolean;
	slideEffect?: number;
	content: JSX.Element;
	withScrollbar?: boolean;
	toggleDrawer: () => void;
	animationDuration?: number;
}

const Drawer = ({
	content,
	right,
	toggleDrawer,
	withScrollbar,
	slideEffect = 0,
	animationDuration = 250,
}: Props) => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const handleClose = useCallback(() => {
		setDrawerOpen(false);
		setTimeout(() => {
			toggleDrawer();
		}, animationDuration);
	}, [toggleDrawer, animationDuration]);

	const CloseDrawer = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	useEffect(() => {
		setDrawerOpen(true);
		document.body.style.overflowY = withScrollbar ? "auto" : "hidden";
		document.body.style.marginLeft = right
			? `-${slideEffect}px`
			: `${slideEffect}px`;

		return () => {
			document.body.style.overflowY = "auto";
			document.body.style.marginLeft = "0";
		};
	}, [right, slideEffect, withScrollbar]);

	return (
		<main
			onClick={CloseDrawer}
			className="fixed flex top-0 left-0 w-screen h-screen z-[500] bg-black/50">
			<article
				className={twMerge(
					`w-[80%] h-full md:w-[400px] pt-1 px-2 bg-gray-50 transition-all ease-out duration-500 absolute ${
						right ? "-right-[400px]" : "-left-[400px]"
					} dark:bg-dark`,
					isDrawerOpen && (right ? "right-0" : "left-0"),
				)}>
				<div className="flex justify-between items-center mt-8 px-4 py-4">
					<img
						className="w-[120px]"
						src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/logo-GCEA9T.png"
						alt="logo"
					/>

					<div
						onClick={handleClose}
						className="w-10 mr-4 text-white font-bold flex justify-center items-center rounded-md aspect-square bg-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={"12px"}
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 122.88 122.88">
							<defs>
								{/* <style>.cls-1{fill:#ff4141;fill-rule:evenodd;}</style> */}
							</defs>
							<title>close</title>
							<path
								className="fill-white"
								d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z"
							/>
						</svg>
					</div>
				</div>
				{content}

			</article>

		</main>
	);
};

export default Drawer;
