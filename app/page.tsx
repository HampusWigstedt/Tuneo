import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='text-center p-96'>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get the AUX every time with <span className="text-green-600 dark:text-green-500">Tuneo</span></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at MusicFinder, our goal is to give you the best experience when finding new music. We give you the tools to expand your music library</p>
      </div>
    </main>
  )
}
