import { TextInput } from "@repo/ui/text-input";

export default function(){
    return <div style={{
        height: "100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column",
        margin:"20"
    }}>
        <div>
Chat Room

        </div>
        <div>
            <TextInput placeholder="Msg" size="big" />
        </div>
    </div>
}