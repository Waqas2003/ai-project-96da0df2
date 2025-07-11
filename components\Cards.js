import Image from 'next/image'

function Cards() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <Image src="/naran.jpg" alt="Naran" width={300} height={200} />
              <h3 className="text-lg font-bold mb-2">Naran</h3>
              <p className="text-gray-600">A beautiful valley in the Kaghan Valley.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <Image src="/hunza.jpg" alt="Hunza" width={300} height={200} />
              <h3 className="text-lg font-bold mb-2">Hunza</h3>
              <p className="text-gray-600">A breathtakingly beautiful valley in Gilgit-Baltistan.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <Image src="/skardu.jpg" alt="Skardu" width={300} height={200} />
              <h3 className="text-lg font-bold mb-2">Skardu</h3>
              <p className="text-gray-600">The capital of Baltistan, known for its stunning landscapes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards