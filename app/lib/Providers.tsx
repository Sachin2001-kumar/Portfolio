"use client"
import ActiveSectionContextProvider, { ActiveSectionContext } from "./Active"

type props={
    children:React.ReactNode;
}

const Providers= ({children}:props)=>{
    return (
   <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
) }

export default Providers;