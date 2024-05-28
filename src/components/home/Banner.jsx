// import banner from '../../assets/video3.mp4'
import banner2 from '../../assets/img4.jpg'
export default function Banner() {
    return (
        <div className=' h-full w-full '>
            <div className="border-8  border-color1 absolute w-full h-screen bg-[rgba(0,0,0,0.6)]"></div>
            {/* <video src={banner} className=' w-full h-screen object-cover' autoPlay loop muted /> */}
            <img src={banner2} className=' w-full h-screen object-cover' />
            <div className=' absolute w-full h-full top-16  flex flex-col justify-center items-center'>
                <h1 className='  text-color1 text-center text-sm '>Welcome to BuggyBites</h1>
                <h1 className='  text-white text-7xl font-bold mb-4 sm:text-8xl text-center'>Savor The <br /> Flavor</h1>
                <p className=' text-white text-center sm:w-2/4  '>Embark on a gastronomic journey with us, where each dish is crafted with passion and precision.</p>
                <div className=" mt-10">
                    <button className=' text-white border-y-2 p-3 px-7 border-color1'>OUR MENUS</button>
                </div>
            </div>
        </div >
    )
}
