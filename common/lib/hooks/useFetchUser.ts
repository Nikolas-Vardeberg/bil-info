"use client"

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { useState } from "react";


export default function useFetchUser() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            
            if (error) {
                setError(error.message);
            }
            setUser(data.user);
            setIsLoading(false);
        }
        fetchUser();
    }, []);

    const handleSignOut = async () => {
        if (!user) {
            setError("No user found");
            return;
        }

        try {
            await fetch('/api/auth/signout', {
                method: 'POST'
              });
        } catch {
            setError("Something went wrong");
        } finally {
            setUser(null);
            setError(null);
            setIsLoading(false);
            window.location.reload();
        }
    }

    return { user, isLoading, error, handleSignOut };
}

