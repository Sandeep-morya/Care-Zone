import { PropsWithChildren } from "react";
import FooterHeading from "./footer/FooterHeading";

interface Props extends PropsWithChildren {
    title: string;
}

const MainLayer = (props: Props) => {
    return (
        <div className='w-full  p-4  lg:px-12 xl:px-28 2xl:px-48'>
            <FooterHeading title={props.title} />

            {props.children}
        </div>
    );
};

export default MainLayer;
