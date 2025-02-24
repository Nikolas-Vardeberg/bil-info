"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"
import { Input } from "@/ui/input"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import { Calendar, Car, Cog, FileSliders, FileText, Info, Ruler, Scale, Tag, Truck, Weight } from "lucide-react"
import { Separator } from "@/ui/separator"
import { Badge } from "@/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Table, TableBody, TableCell, TableRow } from "@/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui/tooltip"

 
const formSchema = z.object({
  regNumber: z.string().min(2).max(50),
})

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      regNumber: searchParams.get("") || "",
    },
  })

  useEffect(() => {
    const regNumber = searchParams.get("");
    if (regNumber) {
      fetchVehicleData(regNumber);
    }
  }, [searchParams]);

  async function fetchVehicleData(regNumber: string) {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post("/api/vehicle", {
        regNumber,
      });
      
      setData(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`?=${values.regNumber}`);
  }

  return (
    <div className="h-full min-h-screen bg-green-100 items-center justify-center flex flex-col">
      {error ? (
        <Card className="bg-red-50">
          <CardContent className="text-red-600 p-4">{error}</CardContent>
        </Card>
      ): (
        <div className="max-w-[1200px] px-8 mx-auto py-10 sm:py-20">
            {data ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <div className="flex items-center">
                        <Car className="mr-2" /> Bil Detailjer
                      </div>
                      <Button variant="default">
                        {data?.kjoretoydataListe?.[0].kjoretoyId.kjennemerke ?? "Ukjent"}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <Separator />

                  <CardContent className="">
                    <pre>
                      {JSON.stringify(data?.kjoretoydataListe?.[0], undefined, 2)}
                    </pre>
                  </CardContent>
                </Card>

                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                    <FileText className="mr-2" /> Tekniske Detailjer
                    </CardTitle>
                  </CardHeader>
                  
                  <Separator />

                  <CardContent>
                    <pre>
                      {JSON.stringify(data?.kjoretoydataListe?.[0], undefined, 2)}
                    </pre>
                  </CardContent>
                </Card>

                <Card className="h-fit md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="mr-2" /> Hvem eier bilen?
                    </CardTitle>
                  </CardHeader>

                  <Separator />

                  <CardContent className="py-5 flex items-center">
                    <p>Du er ikke logget inn</p>
                    <Button className="ml-2">Logg inn for å se eier</Button>
                  </CardContent>
                </Card>
              </div>
            ): (
              <Card>
                <CardHeader>
                  <CardTitle>Søk etter kjøretøy</CardTitle>
                  <CardDescription>Skriv inn registreringsnummeret for å hente kjøretøydetaljer</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="regNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registreringsnummer</FormLabel>
                            <FormControl>
                              <Input placeholder="CF 1111" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={loading}>
                        {loading ? "Søker..." : "Send inn"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
          )}
        </div>
      )}
    </div>
  );
}