export default function Button({element, type, className}) {
    return(
        <button
            type={type}
            className={className}
        >{element}</button> 
    );
}
    