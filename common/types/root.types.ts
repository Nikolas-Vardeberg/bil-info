// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type RichtTextType = any[];

export type BilImage = {
    _type: "image";
    alt: string;
}

export type Nullable<T> = T | null;

export interface VehicleData {
    kjoretoyId: {
      kjennemerke: string;
      understellsnummer: string;
    };
    forstegangsregistrering: {
      registrertForstegangNorgeDato: string;
    };
    registrering: {
      registreringsstatus: {
        kodeBeskrivelse: string;
      };
      kjoringensArt: {
        kodeBeskrivelse: string;
      };
      fomTidspunkt: string;
    };
    godkjenning: {
      tekniskGodkjenning: {
        tekniskeData: {
          generelt: {
            merke: Array<{ merke: string }>;
            handelsbetegnelse: string[];
            typebetegnelse: string;
          };
          dimensjoner: {
            lengde: number;
            bredde: number;
          };
          vekter: {
            egenvekt: number;
            egenvektMinimum: number;
            tillattTotalvekt: number;
            nyttelast: number;
            tillattVertikalKoplingslast?: number;
          };
          akslinger: {
            antallAksler: number;
            akselGruppe: Array<{
              plasseringAkselGruppe: string;
              akselListe: {
                aksel: Array<{
                  id: number;
                  plasseringAksel: string;
                  tekniskTillattAkselLast: number;
                }>;
              };
            }>;
          };
          dekkOgFelg: {
            akselDekkOgFelgKombinasjon: Array<{
              akselDekkOgFelg: Array<{
                akselId: number;
                dekkdimensjon: string;
                felgdimensjon: string;
                belastningskodeDekk: string;
                hastighetskodeDekk: string;
              }>;
            }>;
          };
        };
        kjoretoyklassifisering: {
          tekniskKode: {
            kodeBeskrivelse: string;
          };
          spesielleKjennetegn?: string;
        };
        godkjenningsId: string;
        godkjenningsundertype: {
          kodeVerdi: string;
        };
        gyldigFraDato: string;
      };
    };
    kjennemerke: Array<{
      kjennemerke: string;
      kjennemerkekategori: string;
      kjennemerketype: {
        kodeBeskrivelse: string;
      };
      fomTidspunkt: string;
    }>;
  }
  