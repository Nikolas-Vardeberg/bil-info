import Menu from "@/components/Menu";
import { Toaster } from "@/ui/sonner";
import React from "react";

export default function ClientLayout({ children}: { children: React.ReactNode }) {
    return(
        <>
            <Menu />
            <main>
            {children}
            </main>
            <Toaster position="top-center" />
        </>
    )
}