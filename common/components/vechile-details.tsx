import { Badge } from "@/components/ui/badge"
import { Calendar, Car, CarFront, FileText, Info, LifeBuoy, Ruler, Shield, User, Weight } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export function VehicleDetails({ data }: { data: any }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
            <Card className="h-fit">
                <CardHeader className="flex flex-row justify-between">
                    <div className="flex items-center">
                        <Car className="mr-2"/>
                        Kjøretøydetaljer
                    </div>
                    <Badge>
                        {data.kjoretoyId.kjennemerke}
                    </Badge>
                </CardHeader>
                <Separator />
                <CardContent className="flex flex-col gap-2 py-2">

                    <Card className="p-6 !shadow-none">
                        <div className="flex items-center gap-2 mb-4">
                            <Info className="h-5 w-5" />
                            <h2 className="text-lg font-semibold">kjøretøyopplysninger</h2>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Registreringsnummer:</span>
                                <span>{data.kjoretoyId.kjennemerke}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">VIN:</span>
                                <span>{data.kjoretoyId.understellsnummer}</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 !shadow-none">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="h-5 w-5" />
                            <h2 className="text-lg font-semibold">Registreringsinformasjon</h2>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="grid gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Første registreringsdato:</span>
                                    <span>{data.forstegangsregistrering.registrertForstegangNorgeDato}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Gjeldende registreringsdato:</span>
                                    <span>{new Date(data.registrering.fomTidspunkt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Registreringsstatus:</span>
                                    <span>{data.registrering.registreringsstatus.kodeBeskrivelse}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Brukstype:</span>
                                    <span>{data.registrering.kjoringensArt.kodeBeskrivelse}</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 !shadow-none">
                        <div className="flex items-center gap-2 mb-4">
                            <Car className="h-5 w-5" />
                            <h2 className="text-lg font-semibold">Kjøretøydetaljer</h2>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="grid gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Lag:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.merke[0].merke}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Modell:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0]}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Typebetegnelse:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.typebetegnelse}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <span className="text-gray-600">Kjøretøyskategori:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.tekniskKode.kodeBeskrivelse}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Spesielle egenskaper:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.spesielleKjennetegn}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </CardContent>
            </Card>
            
            <Card className="h-fit">
                <CardHeader className="flex flex-row justify-between">
                    <div className="flex items-center">
                        <User className="mr-2"/>
                        Eierinformasjon
                    </div>
                </CardHeader>

                <Separator />

                <CardContent className="flex flex-col gap-2 py-2">
                    <span>Du er ikke logget inn <Button className="ml-2">Logg inn for å se eier</Button></span>
                   
                </CardContent>
            </Card>
        </div>

      <Card className="h-fit">
        <CardHeader className="flex flex-row justify-between">
                <div className="flex items-center">
                    <FileText className="mr-2"/>
                    Tekniske Detaljer
                </div>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col gap-2 py-2">
                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Ruler className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Dimensjoner</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Length:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.dimensjoner.lengde} mm</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Width:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.dimensjoner.bredde} mm</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Weight className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Weight</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Curb Weight:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.egenvekt} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Minimum Curb Weight:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.egenvektMinimum} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Gross Vehicle Weight:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.tillattTotalvekt} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Payload:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.nyttelast} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Max Vertical Coupling Load:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.tillattVertikalKoplingslast} kg</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <CarFront className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Axles</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Number of Axles:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.akslinger.antallAksler}</span>
                            </div>
                            {data.godkjenning.tekniskGodkjenning.tekniskeData.akslinger.akselGruppe.map((group: any, index: number) => (
                                <div key={index} className="grid gap-2">
                                    <span className="font-medium">Axle Group {group.plasseringAkselGruppe}</span>
                                    {group.akselListe.aksel.map((axle: any) => (
                                    <div key={axle.id} className="flex justify-between ml-4">
                                        <span className="text-gray-600">Max Load Axle {axle.plasseringAksel}:</span>
                                        <span>{axle.tekniskTillattAkselLast} kg</span>
                                    </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <LifeBuoy className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Tires and Wheels</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2 ml-4">
                            {data.godkjenning.tekniskGodkjenning.tekniskeData.dekkOgFelg.akselDekkOgFelgKombinasjon.map(
                                (combo: any, index: number) => combo.akselDekkOgFelg.map((tire: any) => (
                                    <div key={`${index}-${tire.akselId}`} className="grid gap-2">
                                        <span className="font-medium">Axle {tire.akselId}</span>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">Tire Dimension:</span>
                                            <span>{tire.dekkdimensjon}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">Rim Dimension:</span>
                                            <span>{tire.felgdimensjon}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">Load Index:</span>
                                            <span>{tire.belastningskodeDekk}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">Speed Rating:</span>
                                            <span>{tire.hastighetskodeDekk}</span>
                                        </div>
                                    </div>
                                )),
                            )}
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Approval Information</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">Approval ID:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.godkjenningsId}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">Approval Type:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.godkjenningsundertype.kodeVerdi}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">Valid From:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.gyldigFraDato}</span>
                            </div>
                            {data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.efTypegodkjenning && (
                                <>
                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-600">EU Type Approval:</span>
                                            <span>
                                                {
                                                data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.efTypegodkjenning
                                                    .typegodkjenningNrTekst
                                                }
                                            </span>
                                        </div>
                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-600">Variant:</span>
                                        <span>{data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.efTypegodkjenning.variant}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </Card>

            </CardContent>
      </Card>
    </div>
  )
}

