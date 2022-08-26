import {BehaviorSubject} from "rxjs"
import { useEffect, useState } from "react";

let loader = false;

export const loader$ = new BehaviorSubject(loader);

export const setLoader = (arg)=> {
    loader = arg
    loader$.next(loader)
}

export const useLoader = ()=> {
    const [loader, setLoader] = useState(false);

    useEffect(()=> {
        loader$.subscribe(loader => setLoader(loader))
    })

    return loader
}