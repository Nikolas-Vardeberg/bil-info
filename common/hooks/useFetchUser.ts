"use client"

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { useState } from "react";
import { toast } from "sonner";

export default function useFetchUser() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            
            if (error) {
                toast.error(error.message);
            }

            setUser(data.user);
            setIsLoading(false);
        }
        fetchUser();
    }, []);

    const handleSignOut = async () => {
        if (!user) {
            toast.error("No user found");
            return;
        }

        try {
            await fetch('/api/auth/signout', {
                method: 'POST'
              });
        } catch {
            toast.error("Something went wrong");
        } finally {
            setUser(null);
            setError(null);
            setIsLoading(false);
            window.location.reload();
        }
    }

    return { user, isLoading, error, handleSignOut };
}

