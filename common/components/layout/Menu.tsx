"use client"

import Link from "next/link";
import { Loader2, User } from "lucide-react";
import UserDropdown from "../user-dropdown";
import LanguageSwitcher from "../LanguageSwitcher";
import Button from "../ui/button";
import useFetchUser from "@/hooks/useFetchUser";
import { useTranslations } from "next-intl";

export default function Menu() {
    const t = useTranslations();
    const { user, isLoading } = useFetchUser();

    return(
        <header className="bg-white w-full border-b">
            <div className="py-4 max-w-[1200px] px-8 mx-auto flex justify-between items-center">
                <Link href="/">
                    <Button variant="link">
                        {t('navigation.home')}
                    </Button>
                </Link>

                <div className="hidden md:block">
                    <Link href="#about">
                        <Button variant="ghost">
                            {t('navigation.about')}
                        </Button>
                    </Link>
                    <Link href="#features">
                        <Button variant="ghost">
                            {t('navigation.services')}
                        </Button>
                    </Link>
                    <Link href="#faq">
                        <Button variant="ghost">
                            {t('navigation.faq')}
                        </Button>
                    </Link>
                    
                </div>

                <div className="flex gap-x-2">
                    <>
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <Loader2 className="w-4 h-4 animate-spin" />
                            </div>
                        ): (
                            <>
                                {user ? (
                                    <UserDropdown user={user} />
                                ): (
                                    <div className="flex gap-x-2">
                                    <Link href="/bil">
                                        <Button>
                                            {t('navigation.search_cta')}
                                        </Button>
                                    </Link>
                                    <Link href="/login">
                                        <Button variant="secondary">
                                            <User />
                                        </Button>
                                    </Link>   
                                </div>
                                )}
                            </>   
                        )}
                    </>
                    <div className="hidden md:block">
                        <LanguageSwitcher  />
                    </div>
                </div>

              
            </div>
        </header>
    )
}