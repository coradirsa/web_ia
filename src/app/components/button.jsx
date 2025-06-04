export default function Button({element, type, className, ariaLabel}) {
    return(
        <button
            type={type}
            className={`${className} uppercase font-bold transition-all duration-300`}
            aria-label={ariaLabel}
        >{element}</button> 
    );
}
    