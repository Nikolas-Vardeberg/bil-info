import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import UserDropdown from "./UserDropdown";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Menu() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

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
                        <UserDropdown user={user} />
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
                <LanguageSwitcher />
                </div>

              
            </div>
        </header>
    )
}