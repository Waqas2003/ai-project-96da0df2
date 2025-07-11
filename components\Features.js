function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Natural Beauty</h3>
              <p className="text-gray-600">Pakistan is home to some of the most beautiful natural landscapes in the world.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Rich Culture</h3>
              <p className="text-gray-600">Pakistan has a rich cultural heritage, with a history dating back thousands of years.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Adventure Tourism</h3>
              <p className="text-gray-600">From hiking to trekking, Pakistan offers a range of adventure activities for tourists.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features