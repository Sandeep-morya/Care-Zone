import { servicesData } from "../data";
import ButtonLink from "../ui/ButtonLink";

type CardProps = (typeof servicesData)[0];

const ServiceCard = ({
    description,
    title,
    icon,
    image,
    handler,
}: CardProps) => {
    const Icon = icon;
    return (
        <article className="w-full">
            <div className="w-full aspect-square">
                <img
                    className="w-full h-full shadow-xl rounded-xl"
                    src={image}
                    alt="service"
                />
            </div>

            <div className="w-[90%] bg-white  transition-all duration-500 hover:bg-primary border h-[240px] rounded-xl shadow-xl -translate-y-1/2 m-auto group">
                <div className="w-[80px] shadow-md group-hover:bg-white flex justify-center text-4xl m-auto -translate-y-1/2 items-center rounded-full text-white aspect-square bg-primary group-hover:text-primary transition-all duration-500">
                    <Icon/>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 text-center -translate-y-4">
                    <h2 className="text-xl font-semibold text-third group-hover:text-white">
                        {title}
                    </h2>
                    <p className="text-sm text-third/75 group-hover:text-white/75">
                        {description}
                    </p>
                    <ButtonLink onClick={handler}>Read More</ButtonLink>
                </div>
            </div>
        </article>
    );
};

export default ServiceCard