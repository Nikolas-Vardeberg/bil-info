import Footer from '@/components/layout/Footer';
import Menu from '@/components/layout/Menu';

export default function ClientLayout({ children}: { children: React.ReactNode }) {
    return(
        <>
            <Menu />
            <main>{children}</main>
            <Footer />
        </>
    )
}