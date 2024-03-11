import libBg from '../Assets/logo-bg.jpeg';
import FeedbackCard from './FeedbackCard';
import DescriptionSection from "./DescriptionSection";

const Body = () => {
  return (
    <>
      <div className="relative flex justify-center items-center bg-cover bg-center h-screen	" style={{ backgroundImage: `url(${libBg})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className='text-center max-w-4xl px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 relative z-10'>
          <p className='text-center py-12 sm:py-16 lg:py-20'>
            <b className='text-4xl sm:text-6xl lg:text-8xl text-green-600 px-3'>Apni</b>
            <b className='text-4xl sm:text-6xl lg:text-8xl text-white'>Library</b>
          </p>
          <p className='text-white text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl leading-relaxed'>
            "Libraries are portals to worlds of knowledge, creativity, and innovation. They house the dreams of countless minds, providing a timeless sanctuary where every page turns into a new adventure, and every shelf whispers the wisdom of the ages."
          </p>

        </div>
      </div>

      <FeedbackCard />
      <DescriptionSection />
    </>
  )
}
export default Body;