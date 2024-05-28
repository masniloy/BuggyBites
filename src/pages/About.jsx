// import image from "../assets/img1.jpg"
export default function About() {

    const images = [
        'https://source.unsplash.com/random/300x300/?food',
        'https://source.unsplash.com/random/301x301/?food',
        'https://source.unsplash.com/random/302x302/?food',
        'https://source.unsplash.com/random/303x303/?food',
        'https://source.unsplash.com/random/304x304/?food',
        'https://source.unsplash.com/random/305x305/?food',
        'https://source.unsplash.com/random/306x306/?food',
        'https://source.unsplash.com/random/307x307/?food',
        'https://source.unsplash.com/random/308x308/?food',
    ];


    return (

        <div className="App">
            {/* Header */}
            <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1200x800/?restaurant)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl">About Us</h1>
                </div>
            </header>

            {/* About Us Section */}
            <section className="bg-black text-white text-center py-16">
                <h2 className="text-3xl mb-4">ULTIMATE DINING EXPERIENCE LIKE NO OTHER</h2>
                <p className="mb-8">
                    One of the most exciting eateries to open in St Kilda in years – These guys have years of experience and it shows, from the decor to the presentation – perfect!
                </p>
                <p className="font-signature text-xl">Jonathan Crater</p>
            </section>

            {/* Image Grid */}
            <section className="py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 flex items-center justify-center">
                        <div className="bg-white text-black p-8 rounded shadow-md text-center">
                            <h3 className="text-2xl mb-4">Visit Our RESTAURANT</h3>
                            <p className="mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            <a href="#" className="btn btn-primary">Get Locations</a>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="Restaurant" className="w-full h-full object-cover rounded" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-cover bg-center py-16" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1200x800/?dinner)' }}>
                <div className="bg-black bg-opacity-50 py-16">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-4xl mb-4">Subscribe to our Newsletter</h2>
                        <form className="flex justify-center mt-8">
                            <input type="email" className="input input-bordered w-1/3 p-4" placeholder="Enter your email" />
                            <button type="submit" className="btn btn-primary ml-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl mb-4">Paragon Branch</h3>
                        <address>
                            732/21 Second Street, Manchester, King Street, Kingston United Kingdom
                            <br />
                            1-800-456-6756
                        </address>
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Center Branch</h3>
                        <address>
                            732/21 Second Street, Manchester, King Street, Kingston United Kingdom
                            <br />
                            1-800-456-6756
                        </address>
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Zen Branch</h3>
                        <address>
                            732/21 Second Street, Manchester, King Street, Kingston United Kingdom
                            <br />
                            1-800-456-6756
                        </address>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; Copyright Grand Restaurant Theme Demo – Theme by ThemeGoods</p>
                    <nav className="flex justify-center space-x-4 mt-4">
                        <a href="#">About Us</a>
                        <a href="#">Menus</a>
                        <a href="#">Blog</a>
                        <a href="#">Find Us</a>
                    </nav>
                </div>
            </footer>
        </div>


    )
}
