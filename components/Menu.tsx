import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, User} from "lucide-react";
import { createClient } from '@/utils/supabase/server'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default async function Menu() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    const handleLogout = () => {
        supabase.auth.signOut();
    }

    return(
        <header className="bg-white w-full border-b">
            <div className="py-4 max-w-[1200px] px-8 mx-auto flex justify-between items-center">
                <Link href="/">
                    <Button variant="link">
                        Bil Info
                    </Button>
                </Link>

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

                <div className="flex gap-x-2">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button>
                                    {user.email}
                                    <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Min Bruker</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profil</DropdownMenuItem>
                                <DropdownMenuItem>Abonnement</DropdownMenuItem>
                                <Button className="w-full" variant="destructive">
                                    Log ut
                                    <ArrowRight />
                                </Button>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ): (
                        <div className="flex gap-x-2">
                            <Link href="/bil">
                                <Button>
                                    Søk opp bilen din nå!
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button variant="secondary">
                                    <User />
                                </Button>
                            </Link>   
                        </div>
                    )}
                  
                </div>
              
            </div>
        </header>
    )
}