const libraryData = [
  {
    imageSrc: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Discover a professional approach to learning with our library, offering books at all proficiency levels. Our curated collection ensures a tailored reading experience, providing resources that cater to both beginners and seasoned professionals. Stay ahead in your field with our comprehensive range of high-quality literature."
  },
  {
    imageSrc: "https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Embark on a journey of knowledge with our library, where excellence meets exploration. Our meticulously curated collection invites enthusiasts and experts alike to delve into a world of top-notch literature, fostering continuous learning and professional growth. Elevate your understanding, stay inspired, and make our library the cornerstone of your intellectual pursuits"
  },
  {
    imageSrc: "https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Immerse yourself in a realm of intellectual enrichment at our library, where a thoughtfully curated selection of books awaits. Catering to diverse interests and proficiency levels, our collection ensures that both beginners and seasoned professionals find the perfect resources to fuel their curiosity and expertise. Explore, learn, and grow with the wealth of knowledge our library has to offer."
  },
  {
    imageSrc: "https://images.pexels.com/photos/3847646/pexels-photo-3847646.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Step into a haven of learning where our library stands as a beacon for those seeking excellence. Our extensive and carefully chosen bookshelf spans various subjects, making it a go-to resource for enthusiasts at every stage of their professional journey. Discover the joy of continuous education with a collection designed to inspire and empower lifelong learners."
  },
  {
    imageSrc: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Step into a haven of learning where our library stands as a beacon for those seeking excellence. Our extensive and carefully chosen bookshelf spans various subjects, making it a go-to resource for enthusiasts at every stage of their professional journey. Discover the joy of continuous education with a collection designed to inspire and empower lifelong learners."
  }
];

const DescriptionSection = () => {
  return (
    <div className="bg-gray-100 py-4">
    <p className="text-center font-bold text-pretty text-4xl my-8 pb-8">Why should you join...🥰✨ </p>
    {libraryData.map((item, index) => (
      <div key={index} className="max-w-5xl mx-auto bg-white shadow-md rounded-md overflow-hidden my-8 relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/6 relative">
            <img
              src={item.imageSrc}
              alt={`Left Image ${index}`}
              className="w-full h-full object-cover absolute inset-0 rounded-tl-md rounded-bl-md" // Set image to cover entire container on mobile
            />
            <div className="md:hidden bg-black absolute inset-0 opacity-60 rounded-tl-md rounded-bl-md"></div> {/* Overlay for mobile */}
          </div>
          <div className="w-full md:w-4/6 flex items-center justify-center p-4 ml-2 mr-2">
            <p className="text-center text-gray-700">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>



  );
}
export default DescriptionSection;