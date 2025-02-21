import HomeView from "@/components/views/home-view";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({name:"random name"})

    if (data) console.log(data);
    if (error) console.log(error);
  }

  setNewView();

  return(
    <HomeView />
  )
}