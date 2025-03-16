import { Badge } from "@/components/ui/badge"
import { Calendar, Car, CarFront, FileText, Info, LifeBuoy, Ruler, Shield, User, Weight } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import Button from "./ui/button"
import { useTranslations } from "next-intl"

export function VehicleDetails({ data }: { data: any }) {
    const t = useTranslations()
    console.log(data);
    
  return (
    <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
            <Card className="h-fit">
                <CardHeader className="flex flex-row justify-between">
                    <div className="flex items-center">
                        <Car className="mr-2"/>
                        {t("vehicle.details")}
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
                            <h2 className="text-lg font-semibold">{t("vehicle.information")}</h2>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.registration.number")}:</span>
                                <span>{data.kjoretoyId.kjennemerke}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.registration.vin")}:</span>
                                <span>{data.kjoretoyId.understellsnummer}</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 !shadow-none">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="h-5 w-5" />
                            <h2 className="text-lg font-semibold">{t("vehicle.registration.title")}</h2>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="grid gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.registration.first_date")}:</span>
                                    <span>{data.forstegangsregistrering.registrertForstegangNorgeDato}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.registration.current_date")}:</span>
                                    <span>{new Date(data.registrering.fomTidspunkt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.registration.status")}:</span>
                                    <span>{data.registrering.registreringsstatus.kodeBeskrivelse}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.registration.usage_type")}:</span>
                                    <span>{data.registrering.kjoringensArt.kodeBeskrivelse}</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                  

                    <Card className="p-6 !shadow-none">
                        <div className="flex items-center gap-2 mb-4">
                            <Car className="h-5 w-5" />
                            <h2 className="text-lg font-semibold">{t("vehicle.details_section.title")}</h2>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="grid gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.details_section.make")}:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.merke[0].merke}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.details_section.model")}:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0]}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("vehicle.details_section.type")}:</span>
                                    <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.generelt.typebetegnelse}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <span className="text-gray-600">{t("vehicle.details_section.category")}:</span>
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
                        {t("vehicle.owner.title")}
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
                {t("vehicle.technical.title")}
            </div>
        </CardHeader>

        <Separator />

        <CardContent className="flex flex-col gap-2 py-2">
                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Ruler className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">{t("vehicle.technical.dimensions.title")}</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.dimensions.length")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.dimensjoner.lengde} {t("units.mm")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.dimensions.width")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.dimensjoner.bredde} {t("units.mm")}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Weight className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">{t("vehicle.technical.weight.title")}</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.weight.curb")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.egenvekt} {t("units.kg")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.weight.min_curb")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.egenvektMinimum} {t("units.kg")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.weight.gross")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.tillattTotalvekt} {t("units.kg")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.weight.payload")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.nyttelast} {t("units.kg")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.weight.max_coupling")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.vekter.tillattVertikalKoplingslast} {t("units.kg")}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 !shadow-none">
                    <div className="flex items-center gap-2 mb-4">
                        <CarFront className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">{t("vehicle.technical.axles.title")}</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">{t("vehicle.technical.axles.count")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.tekniskeData.akslinger.antallAksler}</span>
                            </div>
                            {data.godkjenning.tekniskGodkjenning.tekniskeData.akslinger.akselGruppe.map((group: any, index: number) => (
                                <div key={index} className="grid gap-2">
                                    <span className="font-medium">Axle Group {group.plasseringAkselGruppe}</span>
                                    {group.akselListe.aksel.map((axle: any) => (
                                    <div key={axle.id} className="flex justify-between ml-4">
                                        <span className="text-gray-600">Max Load Axle {axle.plasseringAksel}:</span>
                                        <span>{axle.tekniskTillattAkselLast} {t("units.kg")}</span>
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
                        <h2 className="text-lg font-semibold">{t("vehicle.technical.tires.title")}</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2 ml-4">
                            {data.godkjenning.tekniskGodkjenning.tekniskeData.dekkOgFelg.akselDekkOgFelgKombinasjon.map(
                                (combo: any, index: number) => combo.akselDekkOgFelg.map((tire: any) => (
                                    <div key={`${index}-${tire.akselId}`} className="grid gap-2">
                                        <span className="font-medium">Axle {tire.akselId}</span>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">{t("vehicle.technical.tires.dimension")}:</span>
                                            <span>{tire.dekkdimensjon}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">{t("vehicle.technical.tires.rim")}:</span>
                                            <span>{tire.felgdimensjon}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">{t("vehicle.technical.tires.load_index")}:</span>
                                            <span>{tire.belastningskodeDekk}</span>
                                        </div>
                                        <div className="grid grid-cols-2 ml-4">
                                            <span className="text-gray-600">{t("vehicle.technical.tires.speed_rating")}:</span>
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
                        <h2 className="text-lg font-semibold">{t("vehicle.approval.title")}</h2>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="grid gap-2">
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">{t("vehicle.approval.id")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.godkjenningsId}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">{t("vehicle.approval.type")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.godkjenningsundertype.kodeVerdi}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-600">{t("vehicle.approval.valid_from")}:</span>
                                <span>{data.godkjenning.tekniskGodkjenning.gyldigFraDato}</span>
                            </div>
                            {data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.efTypegodkjenning && (
                                <>
                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-600">{t("vehicle.approval.eu_type")}:</span>
                                            <span>
                                                {
                                                data.godkjenning.tekniskGodkjenning.kjoretoyklassifisering.efTypegodkjenning
                                                    .typegodkjenningNrTekst
                                                }
                                            </span>
                                        </div>
                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-600">{t("vehicle.approval.variant")}:</span>
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


