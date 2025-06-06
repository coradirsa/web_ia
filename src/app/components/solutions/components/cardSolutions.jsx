import Image from "next/image";

export default function CardSolutions({icon, title, description}) {
    return(
        <div className="flex flex-col justify-between items-center gap-4 px-5 xl:px-16 py-10
        border-l-[2px] border-r-[2px] border-gray rounded-3xl box-fade-vertical xl:min-h-96 
        ">
            <Image 
                loading="lazy"
                aria-label={`icono-${title}`}
                src={icon}
                alt={`icono-${title}`}
                width={100}
                height={100}
                className="w-20 h-20"
            />
            <h4 className="text-background text-sm xl:text-xl font-bold uppercase text-center">{title}</h4>
            <span className="w-full h-[2px] bg-background"></span>
            <p className="text-background text-sm text-center w-full h-12 xl:h-28">{description}</p>
        </div>
    );
}