"use client";

import { User } from "@supabase/supabase-js";
import { ChevronDown, LogOut, Cloud, CreditCard, PlusCircle, UserPlus, Settings, User as UserIcon, Mail, LifeBuoy, MessageSquare} from "lucide-react";
import Button from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface UserDropdownProps {
  user: User;
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const handleSignOut = async () => {
    await fetch('/api/auth/signout', {
      method: 'POST'
    });
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {user.email}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Min Bruker</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            <span>Bruker</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Abonnement</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Innstillinger</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
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
  );
}