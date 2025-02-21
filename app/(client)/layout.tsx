import Menu from "@/components/Menu";
import React from "react";

export default function ClientLayout({ children}: { children: React.ReactNode }) {
    return(
        <>
            <Menu />
            {children}
        </>
    )
}