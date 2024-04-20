import { getCallingCode, getCountryByName, getCurrencies } from '@/helpers/api'
import { notFound } from 'next/navigation'
import BackToHome from '@/app/country/[name]/partials/BackToHome'
import SegmentHeader from '@/app/country/[name]/partials/SegmentHeader'
import SegmentDetail from '@/app/country/[name]/partials/SegmentDetail'
import SegmentTooltip from '@/app/country/[name]/partials/SegmentTooltip'

const CountryPage = async ({ params }: { params: { name: string } }) => {
  try {
    const countryName = params.name.replace(/-/g, ' ')
    const country = await getCountryByName(countryName)
    const currency = Object.keys(country.currencies)[0]
    const currencies = await getCurrencies(currency)
    const callingCodes = await getCallingCode(country.cca2)
    const callingCode = callingCodes[0].callingCodes[0]

    return (
      <main className='mx-auto mt-[90px] max-w-[1105px]'>
        <BackToHome />
        <div className='mt-[50px]'>
          <SegmentHeader country={country} />
          <SegmentDetail country={country} />
          <SegmentTooltip
            {...{ currency, currencies, callingCode, callingCodes }}
          />
        </div>
      </main>
    )
  } catch (e) {
    return notFound()
  }
}

export default CountryPage
