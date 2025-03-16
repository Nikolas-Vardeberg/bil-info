import { Card, CardContent, CardHeader } from "./ui/card";

type DataTableProps = {
    children: React.ReactNode;
}

export default function DataTable({ children }: DataTableProps) {
    return <Card className="h-fit">{children}</Card>;
}

type DataTableHeader = {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
} 

function DataTableHeader({ title, icon, children }: DataTableHeader) {
    return (
        <CardHeader className="flex flex-row justify-between">
            <div className="flex items-center gap-2">
                {icon}
                {title}
            </div>
            {children}
        </CardHeader>
    );
}
type DataTableCardProps = {
    children: React.ReactNode;
}

function DataTableCard({ children }: DataTableCardProps) {
    return <Card className="p-6 !shadow-none">{children}</Card>;
}

type DataTableCardContentProps = {
    children: React.ReactNode;
}

type DataTableCardHeaderProps = {
    title: string;
    icon: React.ReactNode;
}

function DataTableCardHeader({ title, icon }: DataTableCardHeaderProps) {
    return(
        <div className="flex items-center gap-2 mb-4">
            {icon}
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
    )
}

function DataTableCardContent({ children }: DataTableCardContentProps) {
    return <CardContent className="flex flex-col gap-2 py-2">{children}</CardContent>;
}

export { DataTableCard, DataTableHeader, DataTableCardContent, DataTableCardHeader };
