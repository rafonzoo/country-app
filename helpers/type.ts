export type Country = {
  altSpellings: string[]
  callingCodes?: string[]
  cca2: string
  latlng: number[]
  capital: string
  region: string
  subregion: string
  name: {
    common: string
  }
  flags: {
    [P in 'png' | 'svg']: string
  }
  currencies: {
    [P in string]: {
      name: string
    }
  }
}

export type Currency = {
  name: string
}

export type CallingCode = {
  name: string
  callingCodes: string[]
}

export type Countries = Country[]

export type Currencies = Currency[]

export type CallingCodes = CallingCode[]
