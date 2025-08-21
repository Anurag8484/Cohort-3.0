import { Navbar } from "../../../components/Navbar";

export default function AuthLayout({children}: React.PropsWithChildren){
return(
    <div>
    <Navbar/>
    {children}
    </div>
)
}