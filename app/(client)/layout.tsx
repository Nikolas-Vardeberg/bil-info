import Footer from '@/components/layout/Footer';
import Menu from '@/components/layout/Menu';
import { Toaster } from '@/components/ui/sonner';

export default function ClientLayout({ children}: { children: React.ReactNode }) {
    return(
        <>
            <Menu />
            <main>{children}</main>
            <Toaster position='top-center' />
            <Footer />
        </>
    )
}