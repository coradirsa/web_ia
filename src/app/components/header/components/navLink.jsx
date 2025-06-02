export default function NavLink({href, text , isBarrer}) {
    return (
        <div className="relative flex items-center justify-center h-10 min-w-36">
            <a 
                href={href}
                className="text-white font-bold uppercase text-xs md:text-lg cursor-pointer" 
            >{text}</a>
           {isBarrer && <span className="absolute top-0 -right-2 w-0.5 h-full bg-black"></span>} 
        </div>
    )
}