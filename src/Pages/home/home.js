const Home = () => {
return (
    <div className="App">
<br/>

      <header class="bg-light text-dark text-center py-1">
        <h3>Welcome to Our Website</h3>
    </header>

    <section class="container mt-4">
        
        
        <p>
            Welcome to our website! We specialize in providing high-quality goggles for various purposes.
            Whether you need protective eyewear for sports, stylish sunglasses, or specialized goggles for
            specific activities, we have a wide range of options to suit your needs.

        </p>
        <p>
            Our goggles are designed with the latest technology to ensure maximum comfort, durability, and
            protection for your eyes. Explore our product page to discover the variety of goggles we offer,
            and feel free to contact us if you have any inquiries or need assistance.
        </p>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" class="d-block w-100" alt="Goggles Image 1"></img>
            </div>
        </div>
    </section>
    <footer class="bg-dark text-light text-center py-2">
        <p>&copy; 2023 Goggles - page
      <br></br>
        www.goggles.com
        </p>
    </footer>

      </div>
  );
};

export default Home;