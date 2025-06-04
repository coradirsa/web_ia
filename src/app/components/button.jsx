export default function Button({element, type, className, ariaLabel}) {
    return(
        <button
            type={type}
            className={`${className} uppercase font-bold shadow-sm shadow-white/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
            aria-label={ariaLabel}
        >{element}</button> 
    );
}
    