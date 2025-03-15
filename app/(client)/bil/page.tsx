"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VehicleDetails } from "@/components/vechile-details"
import { toast } from "sonner"
import { VehicleData } from "@/types/root.types"
import { useTranslations } from "next-intl"

export default function Home() {
  const [regNumber, setRegNumber] = useState("")
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null)
  const [status, setStatus] = useState<'ready' | 'error' | 'submitting' | 'done'>('ready');
  const t = useTranslations();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("submitting");

    try {
      const response = await fetch("/api/vehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regNumber }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (!data.kjoretoydataListe?.length) {
        toast.error("Ingen kjøretøy funnet", {
          description: "Kunne ikke finne kjøretøy med dette registreringsnummeret.",
        })
        return
      }

      setVehicleData(data.kjoretoydataListe[0])
      setStatus("done")
    } catch {
      setStatus("error");
    }
  }

  const handleReset = () => {
    setStatus("ready");
    setRegNumber("")
    setVehicleData(null)
  }

  return (
    <main className="min-h-screen bg-green-100">
      {status === "ready" && (
         <div className="max-w-[1200px] mx-auto flex items-center justify-center min-h-screen p-4">
         <Card className="w-full max-w-md">
           <CardHeader>
             <CardTitle>Søk etter kjøretøy</CardTitle>
             <CardDescription>Skriv inn registreringsnummeret for å hente kjøretøydetaljer</CardDescription>
           </CardHeader>
           <CardContent>
             <form onSubmit={handleSubmit} className="space-y-4">
               <div className="space-y-2">
                 <label htmlFor="regNumber" className="text-sm font-medium">
                   Registreringsnummer
                 </label>
                 <Input
                   id="regNumber"
                   type="text"
                   value={regNumber}
                   onChange={(e) => setRegNumber(e.target.value)}
                   placeholder="F.eks. AB12345"
                   className="w-full"
                 />
               </div>
               <Button type="submit" className="w-full">
                 {t("navigation.submit")}
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </form>
           </CardContent>
         </Card>
       </div>
      )}
      {status === "done" && (
        <div className="max-w-[1200px] mx-auto p-4">
         <Button onClick={handleReset} className="mb-6">
           <ArrowLeft className="w-4 h-4 mr-2" />
           {t("navigation.back")}
         </Button>
        {vehicleData && <VehicleDetails data={vehicleData} />}
       </div>
      )}
      {status === "error" && (
        <div className="max-w-[1200px] mx-auto p-4">
          <p>En feil oppstod under henting av kjøretøydetaljer. Vennligst prøv igjen senere.</p>
        </div>
      )}
      {status === "submitting" && (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="animate-spin h-5 w-5" />
        </div>
      )}
    </main>
  )
}

