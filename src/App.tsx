import * as React from 'react'
import nodes from './nodes.json'
import { checkInfura } from './statuses'

function App() {
  React.useEffect(() => {
    checkInfura().then(status => {
      document.getElementById('infura-status')!.innerHTML = status ? '✅' : '❌'
    })
  }, [])
  const onHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event)
  }
  return (
    <main className="text-[#f7f7f7] pt-8 p-4">
      <section className="flex w-full  h-full justify-center items-center text-center justify-items-center p-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Node
                </th>
                <th scope="col" className="px-6 py-3">
                  URL
                </th>
                <th scope="col" className="px-6 py-3">
                  Cost
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {nodes.map(({ name, url, displayUrl, free }, idx) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={idx}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {name}
                  </th>
                  <td className="px-6 py-4 text-blue-400">
                    <a href={url} ping={url} target="_blank">
                      {displayUrl}
                    </a>
                  </td>
                  <td className="px-6 py-4">{free}</td>
                  <td className="px-6 py-4" id={`infura-status`}>
                    ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default App
