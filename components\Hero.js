import Image from 'next/image'

function Hero() {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the Beauty of Pakistan</h1>
        <p className="text-lg mb-8">Discover the hidden gems of Pakistan</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero