import { useState } from "react";

//export const [dhValue, setDhValue] = useState<number>(10);

export function useDoubleHalfState(){
    const [dhValue, setDhValue] = useState<number>(10);
    return {dhValue, setDhValue};
}