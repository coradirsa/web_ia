export default function NavLink({href, text , isBarrer}) {
    return (
        <div className="relative flex items-center justify-center h-10 w-full max-w-44 xl:max-w-40">
            <a 
                href={href}
                className="text-white font-bold uppercase text-[10px] sm:text-xs xl:text-sm  cursor-pointer w-full sm:px-2 md:px-3 " 
            >{text}</a>
           {isBarrer && <span className="absolute top-0 right-0 w-[1px] sm:w-[2px] h-full md:bg-gray "></span>} 
        </div>
    )
}