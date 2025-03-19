"use client"

import { BarChart2, FileEdit, File, Settings, Share, User, Copy } from "lucide-react";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { WithAuthProps } from "./wrappers/withAuth";
import Button from "./ui/button";
import Link from "next/link";
import SharePanel from "./molecules/share-panel";

export default function AccountSummary({ user }: WithAuthProps) {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            <Card className="h-fit">
            <CardHeader className='flex flex-row gap-2'>
              <BarChart2 />
              API Requsts
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: `${(200 / 1000) * 100}%` }}></div>
              </div>
              <p className="text-sm mt-2">200 / 1000 API requests used</p>
              <Link href="/account">
                <Button>
                  Kjøp flere API-kall
                </Button>
              </Link>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader className='flex flex-row gap-2'>
              <User />
              Bruker
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <span className="flex justify-between">
                  <p>E-post</p>
                  <p className="font-bold text-black">{user.email}</p>
                </span>
                <span className="flex justify-between">
                  <p>Bekreftet</p>
                  <p className="font-bold text-black">{user.confirmation_sent_at ? "Bekreftet" : "Ikke bekreftet"}</p>
                </span>
                <span className="flex justify-between">
                  <p>Siste innlogging</p>
                  <p className="font-bold text-black">{user.identities?.[0]?.last_sign_in_at && new Date(user.identities[0].last_sign_in_at).toLocaleString("nb", { dateStyle: "medium"})}</p>
                </span>
              </div>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader className='fkex flex-row gap-2'>
              <FileEdit />
              Tilbakemeling
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
              Vi bruker tilbakemelding til å forbedre våre tjenester. 
              <Link href="/feedback">
                <Button>
                  Gi tilbakemelding
                </Button>
              </Link>
            </CardDescription>
          </Card>

         <SharePanel />

          <Card>
            <CardHeader className="flex flex-row gap-2">
              <Settings />
              Innstillinger
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
              <p>
                Endre innstillinger for din konto.
              </p>
              <div className="flex flex-row gap-2">
                <Button>
                  Endre innstillinger
                </Button>
              </div>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader className="flex flex-row gap-2">
              <File />
              Vilkår
            </CardHeader>

            <Separator />

            <CardDescription className="p-4 flex flex-col gap-3">
              <p>
                Våre vilkår og betingelser.
              </p>
              <div className="flex flex-row gap-2">
                <Button>
                  Les vilkår
                </Button>
              </div>
            </CardDescription>
          </Card>
        </div>
    )
}