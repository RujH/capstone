import React from 'react';
import './testimonial.css';

function Testimonial() {
    return (
      <section className="testimonial">
        <div className='textTestimonial'>
          <h3>WHAT PEOPLE SAY</h3>
          <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
             
                <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                </blockquote>
                <figcaption class="mt-10">
                  <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div class="font-semibold text-gray-900">Judith Black</div>
                    <div class="text-gray-600">CEO of Workcation</div>
                  </div>
                </figcaption>
           
            </div>
          </section>

       
        </div>
        
      </section>
    );
};

export default Testimonial;
