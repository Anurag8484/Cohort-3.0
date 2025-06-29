import { atom } from "recoil";


export const wishItemState = atom({
    default :[
        {
            id:"1",name:"Keyboard",price:"2249",
        },
        {
            id:"2",name:"Keyboard2",price:"22495",
        },
        {
            id:"3",name:"Keyboard3",price:"25249",
        },
    ],
    key:"wishList"
})

