
export default function Contact() {
    return (
        <div className="">
            <section className="bg-cover bg-center py-16" style={{ backgroundImage: 'url(https://i.ibb.co/8XncG9m/pexels-pixabay-260922.jpg)' }}>
                <div className="bg-black bg-opacity-50 py-16">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-4xl mb-4 uppercase">Contact Us</h2>
                        <form className="flex justify-center mt-8">
                            <input type="email" className="input input-bordered w-1/3 p-4" placeholder="Enter your email" />
                            <button type="submit" className="btn bg-color ml-4 border-color"><svg className="fill-current  text-white p-2.5 h-10 w-10" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
