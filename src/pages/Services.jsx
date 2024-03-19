import ServicesList from '../components/Services/ServicesList';
import Testimonial from '../components/Testimonial/Testimonial';

const Services = () => {
  return (
    <>
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text__para text-center'>
            World-class care for everyone. Our health system offers unmatched, expert health care.
          </p>
        </div>
        <ServicesList />
      </div>    
    </section>
    <section>
      <div className='container'>
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Whats our patient says</h2>
          <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque laudantium ipsa.</p>
        </div>
        <Testimonial/>
      </div>
    </section>
    </>  
  );
};

export default Services