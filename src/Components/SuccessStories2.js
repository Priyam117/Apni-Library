
import krishnaTarvaniImg from '../Assets/apniLibAssets/krishnaTarvaniImg.jpg';
import gauravImg from '../Assets/apniLibAssets/gauravImg.jpg';
import vidyaNandImg from '../Assets/apniLibAssets/vidyanandImg.jpg';
import umaImg from '../Assets/apniLibAssets/umashuklaImg.jpg';
import vivekaNandImg from '../Assets/apniLibAssets/vivekanandDwivediImg.jpg';
import vibhaImg from '../Assets/apniLibAssets/vibhaPandeyImg.jpg';
import prashantImg from '../Assets/apniLibAssets/prashantmishraImg.jpg';
import richaImg from '../Assets/apniLibAssets/richaShuklaImg.jpg';
import shubhamguptaImg from '../Assets/apniLibAssets/shubhamGuptaImg.jpg';
import nitinImg from '../Assets/apniLibAssets/nitinImg.jpg';
import anuragguptaImg from '../Assets/apniLibAssets/anuragguptaImg.jpg';
import marshalImg from '../Assets/apniLibAssets/marshalSinghImg.jpg';



const successStories = [
  {
    id: 1,
    name: 'Krishna Tarvani',
    designation: 'IIT BHU',
    imageUrl: krishnaTarvaniImg,
  },
  {
    id: 2,
    name: 'Gaurav Singh',
    designation: 'Patwari , Satna',
    imageUrl: gauravImg,
  },
  {
    id: 3,
    name: 'Vidyanand Mishra',
    designation: 'Station Master',
    imageUrl: vidyaNandImg,
  },
  {
    id: 4,
    name: 'Uma Shukla',
    designation: 'NET - Hindi',
    imageUrl: umaImg,
  },
  {
    id: 5,
    name: 'Vivekanand Dwivedi',
    designation: 'Sub. Engg. PWD',
    imageUrl: vivekaNandImg,
  },
  {
    id: 6,
    name: 'Vibha Pandey',
    designation: 'Teacher Group-3',
    imageUrl: vibhaImg,
  },
  {
    id: 7,
    name: 'Prashant Mishra',
    designation: 'NET JRF History',
    imageUrl: prashantImg,
  },
  {
    id: 8,
    name: 'Richa Shukla',
    designation: 'Sub. Engg. Water Resource',
    imageUrl: richaImg,
  },
  {
    id: 9,
    name: 'Shubham Gupta',
    designation: 'SSC JE MES',
    imageUrl: shubhamguptaImg,
  },
  {
    id: 10,
    name: 'Nitin Pandey',
    designation: 'Sub. Engg. RES',
    imageUrl: nitinImg,
  },
  {
    id: 11,
    name: 'Anurag Gupta',
    designation: 'Sub. Engg. Water Resource',
    imageUrl: anuragguptaImg, // Replace with actual image URL
  },
  {
    id: 12,
    name: 'Marshal Pratap Singh',
    designation: 'SDO (U.P. Govt.)',
    imageUrl: marshalImg,
  },
];

const SuccessStories2 = () => {
  return (
    <section className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>

        <div className="flex items-center justify-center space-x-4 overflow-hidden animate-scroll">
          {/* Render success stories */}
          {successStories.map((story) => (
            <div key={story.id} className="flex-shrink-0">
              <div className="slide-container">
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
export default SuccessStories2;