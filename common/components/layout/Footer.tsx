import Link from "next/link";
import Container from "./Container";
import Button from "../ui/button";



export default function Footer() {
    return(
        <div className="flex justify-center py-2 items-center">
            <p className="text-green-500">&copy; {new Date().getFullYear()} Bil Info. Alle rettigheter forbeholdt.</p>
        </div>
    )
}
