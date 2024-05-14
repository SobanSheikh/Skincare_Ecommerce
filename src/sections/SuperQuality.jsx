import { a9,a8, shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about us"
    className="flex justify-between items-center
    max-lg:flex-col 
    gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
      
        <h2 className='mt-10 font-palanquin
        text-4xl capitalize  font-bold
        lg:max-w-lg'>
          We provide you <span 
          className="text-coral-red">
            Super </span>
          <span 
          className="text-coral-red">
            Quality
            </span> Products
        </h2>
        <p className='mt-4  text-justify
        lg:max-w-lg info-text'>Delivering unparalleled care and luxury, our expertly formulated
         skincare products are designed to enhance your beauty routine,
          offering exceptional quality, innovative ingredients, and a touch of indulgence..
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your
          satisfaction
        </p>

        <div className="mt-11">

        <Button label="View Details"/>

        </div>
      </div>
      <div className="flex-1 flex
      justify-center items-center">
        <img 
        src={a8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain rounded-xl" />
      </div>

    </section>
  )
}

export default SuperQuality