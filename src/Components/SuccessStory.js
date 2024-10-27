import '../styles/style.css';

import abhishekImg from '../Assets/apniLibAssets/abhishekmishraImg.jpg';
import ajayImg from '../Assets/apniLibAssets/ajaysatnamiImg.jpg';
import akarshImg from '../Assets/apniLibAssets/akarshshuklaImg.jpg';
import anjliPayashiImg from '../Assets/apniLibAssets/anjliPayashiImg.jpg';
import ankitImg from '../Assets/apniLibAssets/ankitguptaImg.jpg';
import prabhakrImg from '../Assets/apniLibAssets/prabhakarImg.jpg';
import sagarImg from '../Assets/apniLibAssets/sagarSinghImg.jpg';
import anuragImg from '../Assets/anurag.jpg';
import deepakImg from '../Assets/apniLibAssets/deepakTripathiImg.jpg';
import gunjanImg from '../Assets/apniLibAssets/gunjantolwaniImg.jpg';
import jaylishImg from '../Assets/jaylish.jpg';
import krishnaImg from '../Assets/krishna.jpg';
import richaImg from '../Assets/Richa.jpg';

const successStories = [
  {
    id: 101,
    name: 'Abhishek Mishra',
    designation: 'SA-IMD/ADEo (M.P.)',
    imageUrl: abhishekImg,
  },
  {
    id: 102,
    name: 'Ajay Satnami',
    designation: 'LIC ADO',
    imageUrl: ajayImg,
  },
  {
    id: 103,
    name: 'Akarsh Shukla',
    designation: 'NET JRF History',
    imageUrl: akarshImg,
  },
  {
    id: 104,
    name: 'Anjli Payashi',
    designation: 'TISS Mumbai',
    imageUrl: anjliPayashiImg,
  },
  {
    id: 105,
    name: 'Ankit Gupta',
    designation: 'Indian Air Force',
    imageUrl: ankitImg,
  },
  {
    id: 106,
    name: 'Prabhakar Tiwari',
    designation: 'Ifficer Scale-1(MGB)',
    imageUrl: prabhakrImg,
  },
  {
    id: 107,
    name: 'Gunjan Tolwani',
    designation: 'Chartered Accountant',
    imageUrl: gunjanImg,
  },
  {
    id: 108,
    name: 'Shivani Mishra',
    designation: 'Patwari , Satna',
    imageUrl: anuragImg
  },
  {
    id:109,
    name: 'Sagar Singh',
    designation: 'MS Surgery(GMC Bhopal)',
    imageUrl: sagarImg,
  },
  {
    id: 110,
    name: 'Deepak Tripathi',
    designation: 'BSF',
    imageUrl: deepakImg
  },
  {
    id: 111,
    name: 'Jailish Gupta',
    designation: 'UPSC Mains',
    imageUrl: jaylishImg,
  },
  {
    id: 112,
    name: 'Krishna Agrawal',
    designation: 'Sub Engg Ministry of Public Health',
    imageUrl: krishnaImg
  },
];

const SuccessStory = () => {
  return (
    <section className="bg-gray-100 py-2 overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 overflow-hidden animate-scroll">
          {successStories.map((story) => (
            <div key={story.id} className="flex-shrink-0">
              <div className="slide-container-two">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${story.imageUrl})`,
                  }}
                ></div>
                <div className="content">
                  <h3 className="text-xl font-semibold">{story.name}</h3>
                  <p className="text-gray-700">{story.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default SuccessStory;