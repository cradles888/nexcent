const Link = ({ label, className, disabled }) => {

    return <a href="#" disabled={disabled} className={`${className} hover:underline focus:outline-2 focus:underline focus:rounded-[2px] active:text-[#388E3B] active:outline-0 disabled:text-[#717171] ${disabled ? "text-[#717171]" : "text-[#4CAF4F]"}`}>{label}</a>
}

export default Link;


