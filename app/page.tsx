import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <BackgroundVideo />
      <div className='text-center p-6 md:p-12 lg:p-24 xl:p-96 relative z-10'>
        <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white custom-shadow">
          Get the AUX every time with <span className="text-green-600 dark:text-green-500">Tuneo</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-white dark:text-white custom-shadow">
          Here at Tuneo, our goal is to give you the best experience when finding new music. We give you the tools to expand your music library
        </p>
      </div>
    </main>
  )
}
