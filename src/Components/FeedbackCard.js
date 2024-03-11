const feedbackData = [
  {
    text: "Exploring the library felt like embarking on a literary adventure. The carefully curated collection caters to various interests, making it a haven for both casual readers and avid learners. A truly enriching experience!",
    imageUrl: "https://images.pexels.com/photos/9490421/pexels-photo-9490421.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Vikash Pandey"
  },
  {
    text: "The library's atmosphere is conducive to deep focus and exploration. It's not just a place for books; it's a sanctuary for ideas and creativity. The diverse range of literature ensures there's something for everyone.",
    imageUrl: "https://images.pexels.com/photos/8500273/pexels-photo-8500273.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Prashant Dwivedi"
  },
  {
    text: "As an avid reader, I appreciate the dedication to maintaining a tranquil environment. The library's commitment to fostering a love for reading is evident in its extensive collection and welcoming ambiance. Truly a gem!",
    imageUrl: "https://images.pexels.com/photos/9159038/pexels-photo-9159038.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Nishika Garg"
  },
  {
    text: "The library's diverse collection provides a plethora of knowledge. It caters to both scholars and enthusiasts, creating an environment where learning is not just encouraged but celebrated.",
    imageUrl: "https://lh3.googleusercontent.com/-A3Qq6MFXrHA/AAAAAAAAAAI/AAAAAAAAAAA/qQKXEqHDSuA/w56-h56-p/photo.jpg",
    name: "Arjun Sharma"
  },
  {
    text: "The library is a treasure trove of wisdom, and its serene ambiance enhances the reading experience. Aishwarya Gupta recommends this haven for anyone passionate about expanding their knowledge.",
    imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVzVvpAzDXfcWHnn52QOdgvCyY6x8Bv9HlzEFmBMFp9jgEr=w60-h60-p-rp-mo-br100",
    name: "Nikita Soni"
  },
  {
    text: "The library's commitment to inclusivity is commendable. It provides resources for all age groups, ensuring a holistic learning experience. Rajeev Kapoor applauds the library's dedication to education.",
    imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVU06nYTaxrtfElC6iiwyzfrB4LY95ZsAcW7ZAmeaNO4Q=s40-w40-c-h40-rp-br100",
    name: "Swati Singh"
  },

];

const FeedbackCard = () => {
  return (
    <div>
      <p className="text-center font-bold text-pretty text-4xl my-8 pb-8">Honest Review 💕😍✔</p>
      <div className="flex flex-wrap p-6 m-6">
        {feedbackData.map((review, index) => (
          <div key={index} className="max-w-xs mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden m-6">
            <div className="p-4 text-center">
              <div className="mt-2">
                <p className="text-gray-700">{review.text}</p>
              </div>
              <div className="mt-4 bg-blue-500 rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                <img src={review.imageUrl} alt="User Profile" className="rounded-full h-full w-full" />
              </div>
              <p className="mt-4 text-lg font-semibold">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeedbackCard;