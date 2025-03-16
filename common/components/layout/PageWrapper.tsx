import { cn } from "@/lib/utils";
import Container from "./Container";


type Props = {
    children: React.ReactNode;
    className?: string;
}

/**
 * Page Wrapper Component
 * @description: Reusable page wrapper component
 * @param children - The children to render
 * @returns The page wrapper component
 */
export default function PageWrapper({ children, className }: Props) {
    return (
        <div className={cn('py-12 sm:py-20', className)}>
            <Container>
                {children}
            </Container>
        </div>
    ) 
}