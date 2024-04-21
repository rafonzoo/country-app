import { CallingCodes, Countries, Country, Currencies } from '@/helpers/type'
import { getApiUrl } from '@/helpers/utils'

export async function getQueriedCountries(query: string) {
  const endpoint = getApiUrl(`name/${query}`, '3.1')
  const response = await fetch(endpoint, { method: 'GET' })

  if (!response.ok) {
    throw new Error('Data not found')
  }

  return ((await response.json()) as any[]).slice(0, 5) as Countries
}

export async function getCountryByName(countryName: string) {
  const endpoint = getApiUrl(`name/${countryName}?fullText=true`, '3.1')
  const response = await fetch(endpoint, { method: 'GET' })

  if (!response.ok) {
    throw new Error('Data not found')
  }

  return ((await response.json()) as any[])[0] as Country
}

export async function getCountryByCode(code: string) {
  const endpoint = getApiUrl(`alpha/${code}`, '2')
  const response = await fetch(endpoint, { method: 'GET' })

  if (!response.ok) {
    throw new Error('Data not found')
  }

  return (await response.json()) as Country
}

export async function getCurrencies(currencyCode: string, countryName: string) {
  const endpoint = getApiUrl(`currency/${currencyCode}`, '2')
  const response = await fetch(endpoint, { method: 'GET' })

  if (!response.ok) {
    // In v2 ZWL currency is return error but available in v3.1, instead querying
    // new api, we just return the current country that show the currency earlier
    // See: https://restcountries.com/v2/currency/zwl
    return [{ name: countryName }]
  }

  return (await response.json()) as any[] as Currencies
}

export async function getCallingCode(countryCode: string) {
  // Get country in v3.1 returning `callingCodes` as object with root and suffix.
  // Instead, calling v2 /alpha/<countryCode> as array is more guarantee.
  const countryV2 = await getCountryByCode(countryCode)
  const endpoint = getApiUrl(`callingcode/${countryV2.callingCodes?.[0]}`, '2')
  const response = await fetch(endpoint, { method: 'GET' })

  if (!response.ok) {
    return []
  }

  return (await response.json()) as any[] as CallingCodes
}
