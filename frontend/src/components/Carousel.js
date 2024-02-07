import React from 'react';


const Carousel = () => {
    return (
        
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.dealsshutter.com/uploads/social_images/stores/myntra-social-12-oct-1539335161.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/4f/57/47/4f57472c0f1f93776cbfbb7e63946ec3.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.unidays.world/i/self-serve/customer/3_rfbMEDs0alCqUAAZ_lat8i-g5FCKZNm7nSbUjbv0c=/header/17651455-f407-48e4-ad04-b06e56e0062d" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carousel;