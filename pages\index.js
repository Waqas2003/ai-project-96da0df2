import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Head>
        <title>Pakistan Tourism</title>
      </Head>
      <Hero />
      <Features />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home