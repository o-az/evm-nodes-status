import axios from 'axios'

const url = 'https://status.infura.io/api/v2/status.json'

type InfuraResponse = {
  page: Record<string, string | number | Date>
  status: { indicator: string; description: string }
}
type CheckInfura = () => Promise<boolean>

export const checkInfura: CheckInfura = async () => {
  try {
    const { data } = await axios.get<InfuraResponse>(url)
    return data.status.indicator === 'none'
  } catch (error) {
    return false
  }
}
