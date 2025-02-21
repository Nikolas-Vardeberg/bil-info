import Link from "next/link";
import { Button } from "./ui/button";



export default function Menu() {
    return(
        <header className="bg-white w-full border-b">
            <div className="py-4 max-w-[1200px] px-8 mx-auto flex justify-between items-center">
                <Button variant="link">
                    Bil Info
                </Button>

                <div className="hidden md:block">
                    <Link href="/om-oss">
                        <Button variant="ghost">
                            Om oss
                        </Button>
                    </Link>
                    <Link href="/tjenester">
                        <Button variant="ghost">
                            Tjenester
                        </Button>
                    </Link>
                    <Link href="/faq">
                        <Button variant="ghost">
                            Ofte stilte spørsmål
                        </Button>
                    </Link>
                    
                </div>

                <Link href="/bil">
                    <Button>
                        Søk opp bilen din nå!
                    </Button>
                </Link>
            </div>
        </header>
    )
}