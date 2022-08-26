import {BehaviorSubject} from "rxjs"
import { useEffect, useState } from "react";
import { PhotoFile } from "react-native-vision-camera";

let picture: PhotoFile;

export const picture$ = new BehaviorSubject(picture);

export const setPicture = (arg:PhotoFile)=> {
    picture = arg
    picture$.next(picture)
}

export const usePicture = ()=> {
    const [picture, setPicutre] = useState<PhotoFile>();

    useEffect(()=> {
        picture$.subscribe(picture => setPicutre(picture))
    })

    return picture
}