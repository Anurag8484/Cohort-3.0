type InputProps = {
    placeholder?: string;
    ref?: React.Ref<HTMLInputElement>;
    type?: string
}


export default function Input({placeholder, ref, type}: InputProps){
    return (
      <div className="flex gap-2 justify-between items-center ">
        <label className="font-[500]">{placeholder}:</label>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          className="border-1 py-1 px-2 rounded-lg border-neutral-500 focus:outline-0 focus:scale-105 duration-200 hover:scale-105"
        />
      </div>
    );
}