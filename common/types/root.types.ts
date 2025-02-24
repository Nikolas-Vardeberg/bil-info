// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type RichtTextType = any[];

export type BilImage = {
    _type: "image";
    alt: string;
}

export type Nullable<T> = T | null;

export interface ICar {
    kjoretoydataListe: {
        kjoretoyId: {
            kjennemerke: string;
            understellsnummer: string;
        };
        forstegangsregistrering: {
            registrertForstegangNorgeDato: string;
        };
        kjennemerke: {
            fomTidspunkt: string;
            kjennemerke: string;
            kjennemerkekategori: string;
            kjennemerketype: {
                kodeBeskrivelse: string;
                kodeNavn: string;
                kodeVerdi: string;
                tidligereKodeVerdi: any[];
            };
        }[];
        registrering: {
            fomTidspunkt: string;
            kjoringensArt: {
                kodeBeskrivelse: string;
                kodeNavn: string;
                kodeVerdi: string;
                tidligereKodeVerdi: any[];
            };
            registreringsstatus: {
                kodeBeskrivelse: string;
                kodeNavn: string;
                kodeVerdi: string;
                tidligereKodeVerdi: any[];
            };
            registrertForstegangPaEierskap: string;
        };
        godkjenning: {
            forstegangsGodkjenning: {
                forstegangRegistrertDato: string;
                fortollingOgMva: {
                    fortollingsreferanse: string;
                };
                godkjenningsId: string;
                godkjenningsundertype: {
                    kodeNavn: string;
                    kodeVerdi: string;
                    tidligereKodeVerdi: any[];
                };
                gyldigFraDato: string;
                gyldigFraDatoTid: string;
                unntak: any[];
            };
            kjoretoymerknad: {
                merknad: string;
                merknadtypeKode: string;
            }[];
            registreringsbegrensninger: {
                registreringsbegrensning: any[];
            };
            tekniskGodkjenning: {
                godkjenningsId: string;
                godkjenningsundertype: {
                    kodeNavn: string;
                    kodeVerdi: string;
                    tidligereKodeVerdi: any[];
                };
                gyldigFraDato: string;
                gyldigFraDatoTid: string;
                kjoretoyklassifisering: {
                    beskrivelse: string;
                    efTypegodkjenning: {
                        typegodkjenningNrTekst: string;
                        typegodkjenningnummer: {
                            direktiv: string;
                            land: string;
                            serie: string;
                            utvidelse: string;
                        };
                        variant: string;
                        versjon: string;
                    };
                    kjoretoyAvgiftsKode: {
                        kodeBeskrivelse: string;
                        kodeNavn: string;
                        kodeVerdi: string;
                        tidligereKodeVerdi: any[];
                    };
                    nasjonalGodkjenning: {
                        nasjonaltGodkjenningsAr: string;
                        nasjonaltGodkjenningsHovednummer: string;
                        nasjonaltGodkjenningsUndernummer: string;
                    };
                    spesielleKjennetegn: string;
                    tekniskKode: {
                        kodeBeskrivelse: string;
                        kodeNavn: string;
                        kodeVerdi: string;
                        tidligereKodeVerdi: any[];
                    };
                    tekniskUnderkode: {
                        kodeVerdi: string;
                        tidligereKodeVerdi: any[];
                    };
                    iSamsvarMedTypegodkjenning: boolean;
                };
                krav: {
                    kravomrade: {
                        kodeBeskrivelse: string;
                        kodeVerdi: string;
                        tidligereKodeVerdi: any[];
                    };
                    kravoppfyllelse: {
                        kodeBeskrivelse: string;
                        kodeVerdi: string;
                        tidligereKodeVerdi: any[];
                    };
                }[];
                tekniskeData: {
                    akslinger: {
                        akselGruppe: {
                            akselListe: {
                                aksel: {
                                    antallHjul: number;
                                    avstandTilNesteAksling: number;
                                    drivAksel: boolean;
                                    id: number;
                                    plasseringAksel: string;
                                    sporvidde: number;
                                    styreAksel: boolean;
                                    tekniskTillattAkselLast: number;
                                }[];
                            };
                            id: number;
                            plasseringAkselGruppe: string;
                            tekniskTillattAkselGruppeLast: number;
                        }[];
                        antallAksler: number;
                    };
                    bremser: {
                        abs: boolean;
                        tilhengerBremseforbindelse: any[];
                    };
                    dekkOgFelg: {
                        akselDekkOgFelgKombinasjon: {
                            akselDekkOgFelg: {
                                akselId: number;
                                belastningskodeDekk: string;
                                dekkdimensjon: string;
                                felgdimensjon: string;
                                hastighetskodeDekk: string;
                                innpress: string;
                                tvilling: boolean;
                            }[];
                        }[];
                    };
                    dimensjoner: {
                        bredde: number;
                        hoyde: number;
                        lengde: number;
                    };
                    generelt: {
                        fabrikant: {
                            fabrikantNavn: string;
                        }[];
                        handelsbetegnelse: string[];
                        merke: {
                            merke: string;
                            merkeKode: string;
                        }[];
                        tekniskKode: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        typebetegnelse: string;
                    };
                    karosseriOgLasteplan: {
                        antallDorer: number[];
                        dorUtforming: any[];
                        karosseritype: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        kjennemerketypeBak: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        kjennemerkestorrelseBak: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        kjennemerketypeForan: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        kjennemerkestorrelseForan: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        kjoringSide: string;
                        oppbygningUnderstellsnummer: string;
                        plasseringAvDorer: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        plasseringFabrikasjonsplate: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        }[];
                        plasseringUnderstellsnummer: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        }[];
                        rFarge: {
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        }[];
                    };
                    miljodata: {
                        euroKlasse: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        miljoOgdrivstoffGruppe: {
                            drivstoffKodeMiljodata: {
                                kodeBeskrivelse: string;
                                kodeNavn: string;
                                kodeTypeId: string;
                                kodeVerdi: string;
                                tidligereKodeVerdi: any[];
                            };
                            forbrukOgUtslipp: {
                                co2BlandetKjoring: number;
                                forbrukBlandetKjoring: number;
                                malemetode: {
                                    kodeBeskrivelse: string;
                                    kodeNavn: string;
                                    kodeTypeId: string;
                                    kodeVerdi: string;
                                    tidligereKodeVerdi: any[];
                                };
                                utslippCOmgPrKm: number;
                                utslippNMHCmgPrKm: number;
                                utslippNOxMgPrKm: number;
                                utslippTHCmgPrKm: number;
                            }[];
                            lyd: {
                                kjorestoy: number;
                                standstoy: number;
                                vedAntallOmdreininger: number;
                            };
                        }[];
                        okoInnovasjon: boolean;
                    };
                    motorOgDrivverk: {
                        girkassetype: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        girutvekslingPrGir: any[];
                        hybridKategori: {
                            kodeBeskrivelse: string;
                            kodeNavn: string;
                            kodeTypeId: string;
                            kodeVerdi: string;
                            tidligereKodeVerdi: any[];
                        };
                        maksimumHastighet: number[];
                        maksimumHastighetMalt: any[];
                        motor: {
                            antallSylindre: number;
                            arbeidsprinsipp: {
                                kodeBeskrivelse: string;
                                kodeNavn: string;
                                kodeTypeId: string;
                                kodeVerdi: string;
                                tidligereKodeVerdi: any[];
                            };
                            drivstoff: {
                                drivstoffKode: {
                                    kodeBeskrivelse: string;
                                    kodeNavn: string;
                                    kodeTypeId: string;
                                    kodeVerdi: string;
                                    tidligereKodeVerdi: any[];
                                };
                                maksNettoEffekt: number;
                            }[];
                            motorKode: string;
                            partikkelfilterMotor: boolean;
                            slagvolum: number;
                            sylinderArrangement: {
                                kodeBeskrivelse: string;
                                kodeNavn: string;
                                kodeTypeId: string;
                                kodeVerdi: string;
                                tidligereKodeVerdi: any[];
                            };
                        }[];
                        obd: boolean;
                    };
                    ovrigeTekniskeData: any[];
                    persontall: {
                        sitteplassListe: {
                            sitteplass: {
                                beltestrammer: boolean;
                            }[];
                        };
                        sitteplasserForan: number;
                        sitteplasserTotalt: number;
                    };
                    tilhengerkopling: {
                        kopling: any[];
                    };
                    vekter: {
                        egenvekt: number;
                        egenvektMinimum: number;
                        nyttelast: number;
                        tillattTilhengervektMedBrems: number;
                        tillattTilhengervektUtenBrems: number;
                        tillattTotalvekt: number;
                        tillattVertikalKoplingslast: number;
                        tillattVogntogvekt: number;
                        vogntogvektAvhBremsesystem: any[];
                    };
                };
                unntak: any[];
            };
            tilleggsgodkjenninger: any[];
        }[];
    }
}