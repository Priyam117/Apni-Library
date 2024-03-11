

// import React from 'react';

// const Services = () => {
//
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {servicesData.map((service, index) => (
//             <ServiceCard
//               key={index}
//               title={service.title}
//               image={service.image}
//               flipImage={service.flipImage}
//               description={service.description}
//               additionalInfo={service.additionalInfo}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ServiceCard = ({ title, image, flipImage, description, additionalInfo}) => {
//   const [isFlipped, setIsFlipped] = React.useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="p-4 md:w-1/3">
//       <div
//         className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ${isFlipped ? 'transform rotate-y-180' : ''}`}
//         onClick={flipCard}
//       >
//         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={isFlipped ? flipImage : image} alt={title} />
//         <div className="p-6">
//           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
//           <p className="leading-relaxed mb-3">{description}</p>
//           <p className="leading-relaxed mb-3 text-red-700 font-bold">{additionalInfo}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: 'Books Available for Study',
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore a vast collection of study materials for your academic needs.',
      additionalInfo: 'Access to a diverse collection of textbooks, reference materials, and academic resources.'
    },
    {
      title: 'Peaceful Environment',
      image: 'https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/7790347/pexels-photo-7790347.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience a peaceful and focused study environment to enhance your concentration.',
      additionalInfo: 'Noise-free zones designated for uninterrupted study sessions and concentration.'
    },
    {
      title: 'Proper Lighting for Study',
      image: 'https://images.pexels.com/photos/284951/pexels-photo-284951.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Well-lit spaces to ensure you have the right ambiance for effective studying.',
      additionalInfo: 'Adjustable lighting options to accommodate individual preferences and reading requirements.'
    },
    {
      title: 'Charging Port for Every Seat',
      image: 'https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://preview.redd.it/3osisqf7new01.jpg?width=1080&crop=smart&auto=webp&s=b5f9dc92e81050491a75aa4129e74a8112bedf31',
      description: 'Enjoy the convenience of having a charging port at every seat for your devices.',
      additionalInfo: 'Accessible charging ports for your electronic devices.',
    },
    {
      title: 'Comfortable Seating Arrangement',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/7541174/pexels-photo-7541174.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Relax and study with our comfortable seating arrangements for a pleasant experience.',
      additionalInfo: 'Ergonomically designed seats for maximum comfort.',
    },
    {
      title: 'CCTV Secure Zone',
      image: 'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Study in a secure environment with our CCTV-monitored zones for your safety.',
      additionalInfo: '24/7 surveillance for a secure study environment.',
    },
    {
      title: 'High-Speed Wi-Fi',
      image: 'https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://media.istockphoto.com/id/1420958739/photo/wifi-sign-iconic-background-sunray-realistic-look-symbol-for-social-banner.jpg?b=1&s=612x612&w=0&k=20&c=KoynDq3RaNjSij5WWz6mrLykL3_zEGODiihlrsF7gu8=',
      description: 'Access high-speed Wi-Fi to support your online research and studies.',
      additionalInfo: 'Blazing fast internet connection for seamless online activities.',
    },
    {
      title: 'Fully AC Hall',
      image: 'https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/14086132/pexels-photo-14086132.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Study in a fully air-conditioned hall for a comfortable learning environment.',
      additionalInfo: 'Maintain focus with a cool and pleasant atmosphere.',
    },
    {
      title: 'Fresh Water Purifier',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqVNPo8R3OyhVP5d7SH8NBFrCPTK7E4F3GuWWDp_lqhD-Tn38b5SbPhqcJKfGp3K0-2yWlqdgP6AFhue8dp32wwMnAZ6Dp_icKyV41AmVSRsCOfYhomdUA_7Vf7z-1aQNayC-M5fY&usqp=CAc',
      flipImage: 'https://images.pexels.com/photos/3030316/pexels-photo-3030316.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Stay hydrated with our fresh water purifier available on-site.',
      additionalInfo: 'Filtered and refreshing water for your convenience.',
    },
    {
      title: 'Proper Parking Area',
      image: 'https://images.pexels.com/photos/103601/pexels-photo-103601.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/3349460/pexels-photo-3349460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Convenient and secure parking area for students with vehicles.',
      additionalInfo: 'Ample parking space for hassle-free parking.',
    },
    {
      title: 'Lunch Room & Discussion Room',
      image: 'https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Enjoy a dedicated space for lunch and group discussions.',
      additionalInfo: 'Socialize and collaborate with fellow students during breaks.',
    },
    {
      title: 'Seminar & Event Room with Projector',
      image: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600',
      flipImage: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Participate in seminars and events equipped with a projector for interactive sessions.',
      additionalInfo: 'Engage in informative sessions with advanced audiovisual equipment.',
    },
    // Add more service objects as needed
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              flipImage={service.flipImage}
              description={service.description}
              additionalInfo={service.additionalInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, image, flipImage, description, additionalInfo }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`p-4 md:w-1/3 ${isHovered ? 'transform scale-105 transition-transform duration-700' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-transform ${isFlipped ? 'rotate-y-180' : ''} duration-500 ease-in-out`}
        onClick={flipCard}
      >
        <img className="lg:h-48 md:h-36 w-full object-cover object-center transition-opacity duration-500 ease-in-out" src={isFlipped ? flipImage : image} alt={title} />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <p className="leading-relaxed mb-3 text-red-700 font-bold">{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;


