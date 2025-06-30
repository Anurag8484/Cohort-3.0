import { selector } from "recoil";
import { cardItemState } from "./cardItemState";

export const addCount = selector({
    key:'addCount',
    get: ({ get }) =>{
        const items = get(cardItemState); 

        const total = items
          .reduce(
            (acc, item) => acc + parseInt(item.price) * parseInt(item.qty),
            0
          )
          .toFixed(2);

        const totalCount = items.reduce(
          (acc, item) => acc + parseInt(item.qty),
          0
        );

        console.log(total.totalCount)
        return{ total,totalCount}


    }
})