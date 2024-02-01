import React from 'react'
export type SeriesContextObj = {
    name: string;
    setName: (text: string) => void;
}//firstm declare the variable types
export const SeriesContext = React.createContext<SeriesContextObj>({
    name: '',
    setName: (text: string) => {},
}) //next, set their values

//export default SeriesContext
