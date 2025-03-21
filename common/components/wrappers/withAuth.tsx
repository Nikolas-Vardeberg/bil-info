import { createClient } from "@/utils/supabase/server";
import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export type WithAuthProps = {
    user: User;
}

/**
 * withAuth HOC
 * @description: Higher Order Component for authentication
 * @param WrapperComponent - The component to wrap
 * @returns Authenticated component
 */
export function withAuth<P extends WithAuthProps>(
    WrapperComponent: React.ComponentType<P>
) {
    return async function AuthenticatedComponent(
        props: Omit<P, keyof WithAuthProps>
    ) {
        const supabase = await createClient();
        
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            redirect("/login");
        }

        return (
            <WrapperComponent {...(props as P)} user={user} />
        )
    }
}