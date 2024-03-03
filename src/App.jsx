import {
  CustomerReviews, Footer, Subscribe, SpecialOffer,
  SuperQuality, Services, Hero, PopularProdcuts} 
  from "./sections"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>

      </section>
      <section className="padding">
        <PopularProdcuts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App
