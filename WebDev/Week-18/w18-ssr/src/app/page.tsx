import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button> Sign In</Button>
      <Button> Sign Up</Button>
    </div>
  );
}



function Button({children}:React.PropsWithChildren ){
return(
  <button>{children}</button>
)
}