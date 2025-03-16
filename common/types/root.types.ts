/**
 * Code description type
 * @description: Code description type
 */
type CodeDescription = {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: string[];
}

/**
 * Vehicle identification type
 * @description: Vehicle identification type
 */
type VehicleId = {
  kjennemerke: string;
  understellsnummer: string;
}

/**
 * Registration type
 * @description: Registration type
 */
type Registration = {
  fomTidspunkt: string;
  kjoringensArt: CodeDescription;
  registreringsstatus: CodeDescription;
  registrertForstegangPaEierskap: string;
}

/**
 * First registration type
 * @description: First registration type
 */
type FirstRegistration = {
  registrertForstegangNorgeDato: string;
}


/**
 * Dimensions type
 * @description: Dimensions type
 */
type Dimensions = {
  bredde: number;  
  hoyde: number;   
  lengde: number;  
}

/**
 * Weights type
 * @description: Weights type
 */
type Weights = {
  egenvekt: number;          
  egenvektMinimum: number;    
  nyttelast: number;         
  tillattTilhengervektMedBrems: number;    
  tillattTilhengervektUtenBrems: number;   
  tillattTotalvekt: number;  
  tillattVertikalKoplingslast: number;    
  tillattVogntogvekt: number;              
  vogntogvektAvhBremsesystem: any[];      
}

/**
 * Axle type
 * @description: Axle type
 */
type Axle = {
  antallHjul: number;
  avstandTilNesteAksling?: number;
  drivAksel: boolean;
  id: number;
  plasseringAksel: string;
  sporvidde: number;
  styreAksel?: boolean;
  tekniskTillattAkselLast: number;
}


/**
 * Axle group type
 * @description: Axle group type
 */
type AxleGroup = {
  akselListe: {
    aksel: Axle[];
  };
  id: number;
  plasseringAkselGruppe: string;
  tekniskTillattAkselGruppeLast: number;
}

/**
 * Axles type
 * @description: Axles type
 */
type Axles = {
  akselGruppe: AxleGroup[];
  antallAksler: number;
}

/**
 * Tire and wheel type
 * @description: Tire and wheel type
 */
type TireAndWheel = {
  akselId: number;
  belastningskodeDekk: string;
  dekkdimensjon: string;
  felgdimensjon: string;
  hastighetskodeDekk: string;
  innpress: string;
  tvilling: boolean;
}

/**
 * Tire and wheel combination type
 * @description: Tire and wheel combination type
 */
type TireAndWheelCombination = {
  akselDekkOgFelg: TireAndWheel[];
}

/**
 * Tires and wheels type
 * @description: Tires and wheels type
 */
type TiresAndWheels = {
  akselDekkOgFelgKombinasjon: TireAndWheelCombination[];
}

/**
 * Technical approval type
 * @description: Technical approval type
 */
type TechnicalApproval = {
  godkjenningsId: string;
  godkjenningsundertype: CodeDescription;
  gyldigFraDato: string;
  kjoretoyklassifisering: VehicleClassification;
  tekniskeData: TechnicalData;
}

/**
 * Vehicle classification type
 * @description: Vehicle classification type
 */
type VehicleClassification = {
  beskrivelse: string;
  efTypegodkjenning?: {
    typegodkjenningNrTekst: string;
    variant: string;
    versjon: string;
  };
  tekniskKode: CodeDescription;
  spesielleKjennetegn: string;
}

/**
 * Technical data type
 * @description: Technical data type
 */
type TechnicalData = {
  akslinger: Axles;
  dimensjoner: Dimensions;
  vekter: Weights;
  dekkOgFelg: TiresAndWheels;
  generelt: {
    merke: Array<{ merke: string }>;
    handelsbetegnelse: string[];
    typebetegnelse: string;
  }
}

/**
 * Periodic control type
 * @description: Periodic control type
 */
type PeriodicControl = {
  kontrollfrist: string;
  sistGodkjent: string;
}

/**
 * Vehicle type
 * @description: Vehicle type
 */
export type Vehicle = {
  kjoretoyId: VehicleId;
  forstegangsregistrering: FirstRegistration;
  registrering: Registration;
  godkjenning: {
    tekniskGodkjenning: TechnicalApproval;
  };
  periodiskKjoretoyKontroll: PeriodicControl;
}