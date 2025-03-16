import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
}

/**
 * Container Component
 * @description: Reusable container component
 */
export default function Container({ children, className }: Props) {
    return (
        <div className={cn('mx-auto max-w-[1200px] px-8 flex flex-col gap-8', className)}>
            {children}
        </div>
    )
}
