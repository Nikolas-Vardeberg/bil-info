"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Car, CaseSensitive, Check, Info } from "lucide-react"
import Image from "next/image"
import { Card, CardDescription } from "../ui/card"


export default function HomeView() {
    const renderHero = () => (
        <div className="bg-green-100 py-12 sm:py-20">
            <div className="flex mx-auto max-w-[1200px] px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full gap-8">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-3xl sm:text-5xl">Få Full Kontroll Over Bilen Din 🚗💡</h1>
                        <p>Sjekk bilens historikk, spesifikasjoner og verdi på sekunder. Enkelt, raskt og nøyaktig – alt du trenger på ett sted.</p>
                        <Link href="/bil" className="max-w-fit">
                            <Button className="">
                                Søk opp bilen din nå
                                <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                <div>
                <Image
                    src="/bilde.png"
                    height={600}
                    quality={100}
                    width={600}
                    alt="Bilde"
                />
                </div>
            </div>
        </div>
    </div>
    )

    const renderFeatures = () => (
        <div className="bg-white w-full">
        <div className="py-10 flex flex-col max-w-[1200px] mx-auto gap-8 px-8">
            <h2 className="text-2xl sm:text-4xl">Slik fungerer det</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-4 gap-8 justify-between">
                <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
                    <div className="bg-yellow-100 p-4 rounded-full border-none">
                        <Car />
                    </div>
                    <CardDescription>
                        <p className="text-black text-base group-hover:underline">Skriv inn registreringsnummer</p>
                    </CardDescription>
                </Card>

                <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
                    <div className="bg-blue-100 p-4 rounded-full border-none">
                        <CaseSensitive />
                    </div>
                    <CardDescription>
                        <p className="text-black text-base group-hover:underline">Få detaljer om bilen</p>
                    </CardDescription>
                </Card>

                <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
                    <div className="bg-green-100 p-4 rounded-full border-none">
                        <Info />
                    </div>
                    <CardDescription>
                        <p className="text-black text-base group-hover:underline">Sjekk bilens verdi</p>
                    </CardDescription>
                </Card>

                <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
                    <div className="bg-red-100 p-4 rounded-full border-none">
                        <Check />
                    </div>
                    <CardDescription>
                        <p className="text-black text-base group-hover:underline">Ta smartere beslutninger</p>
                    </CardDescription>
                </Card>
            </div>
        </div>
        </div>
    )

    return(
        <div className="flex flex-col">
            {renderHero()}
            {renderFeatures()}
        </div>
    )
}