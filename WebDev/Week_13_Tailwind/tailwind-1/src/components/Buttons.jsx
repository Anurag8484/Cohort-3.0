export const Button = ({
    disabled,
    children,
    onClick
})=>{

        return <div onClick={onClick} className={`text-white px-20 py-8 rounded-3xl text-2xl cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-500"}`}>
            {children}
        </div>


}