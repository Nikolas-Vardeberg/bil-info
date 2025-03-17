"use client";

import { ChevronDown, LogOut, Cloud, CreditCard, PlusCircle, UserPlus, Settings, User as UserIcon, Mail, LifeBuoy, MessageSquare} from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import useFetchUser from "@/hooks/useFetchUser";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User;
}

export default function UserDropdown({ user }: Props) {
  const { handleSignOut } = useFetchUser();

  return (
    <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              {user?.email}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Min Bruker</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/account">
              <DropdownMenuItem>
                <UserIcon />
                <span>Bruker</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <Settings />
              <span>Innstillinger</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus />
            <span>Inviter brukere</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail />
                <span>E-post</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare />
                <span>Melding</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle />
                <span>Mer...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />
      
      <DropdownMenuItem>
        <LifeBuoy />
        <span>Støtte</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <Cloud />
        <span>API</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleSignOut}>
        <LogOut />
        <span>Logg ut</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    </>
  );
}