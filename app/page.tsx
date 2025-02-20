"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
 
const formSchema = z.object({
  regNumber: z.string().min(2).max(50),
})

export default function Home() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      regNumber: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen items-center justify-center flex flex-col">
      {loading ? (
        <p>loading...</p>
      ): (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="regNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registrering nummer</FormLabel>
                  <FormControl>
                    <Input placeholder="CF 1111" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
