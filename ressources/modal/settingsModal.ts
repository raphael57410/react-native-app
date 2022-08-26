import {BehaviorSubject} from "rxjs"
import { useEffect, useState } from "react";

let settingsModal = false;

export const settingsModal$ = new BehaviorSubject(settingsModal);

export const setSettingsModal = (arg)=> {
    settingsModal = arg
    settingsModal$.next(settingsModal)
}

export const useModal = ()=> {
    const [modal, setModal] = useState(false);

    useEffect(()=> {
        settingsModal$.subscribe(modal => setModal(modal))
    })

    return modal
}