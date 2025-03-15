import Menu from "@/components/Menu";

export default function ClientLayout({ children}: { children: React.ReactNode }) {
    return(
        <>
            <Menu />
            <main>{children}</main>
        </>
    )
}