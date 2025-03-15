interface AllCountires {
  countries: Country[];
}

interface Country {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;

  capital: string[];
  region: string;
  population: string;
  area: string;
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  continents: string[];

  coatOfArms: {
    png: string;
  };
  flags: {
    png: string;
  };
  maps: {
    googleMaps: string;
  };
}

interface CountryDetails {
  country: Country[];
}

interface SearchParamProps {
  params?: Promise<SegmentParams>;
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}
