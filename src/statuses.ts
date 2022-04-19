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

// export const pingRPCEndpoint = async (endpoint: string) => {
//   try {
//     const { data } = await axios.post(endpoint, { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 })
//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       return error.response?.data
//     }
//     if (error instanceof Error) {
//       return error.message
//     }
//     return false
//   }
// }
