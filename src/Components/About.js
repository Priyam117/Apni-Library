import '../styles/style.css';
import SuccessStories from './SuccessStory';
import SuccessStories2 from './SuccessStories2';

import swapnilImg from '../Assets/apniLibAssets/swapnilImg.jpg';
import priyamImg from '../Assets/apniLibAssets/priyamImg.jpg';
import shivaImg from '../Assets/apniLibAssets/shivaImg.jpg';

const teamData = [

  {
    img: swapnilImg,
    title: 'Swapnil Singh',
    id: 30,
    role: 'Founder & CEO',
    description: "Under the diligent stewardship of our library's owner and director, a nurturing environment has been cultivated, fostering knowledge and community engagement. Their steadfast leadership ensures a haven for learning and exploration, enriching the lives of all patrons",
    socialLinks: {
      facebook: 'https://www.facebook.com/swapnil.parihar.14',
      instagram: 'https://www.instagram.com/swapnil.parihar/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    img: priyamImg,
    title: 'Priyam Gautam',
    id: 31,
    role: 'Technology and Innovation Specialist',
    description: 'Software Engineer at Salesforce. This website has been created and introduced to the digital realm by Priyam Gautam, ensuring seamless experiences for all. Explore this digital sanctuary meticulously crafted by Priyam Gautam for an unparalleled online journey.',
    socialLinks: {
      facebook: 'https://www.facebook.com/priyam.gautam.75',
      instagram: 'https://www.instagram.com/priyam_gautam/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    img: "",
    title: 'Shikha Singh',
    id: 32,
    role: 'Assistant Director / UPSC Aspirants',
    description: "An integral part of our library's journey, our Assistant Director of Operations brings vision and expertise to every endeavor. With her guidance, we chart new paths of success, ensuring a vibrant and enriching experience for all",
    socialLinks: {
      facebook: 'https://www.facebook.com/priyam.gautam.75',
      instagram: 'https://www.instagram.com/priyam_gautam/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    img: shivaImg,
    title: 'Shiva Balmeek',
    id: 33,
    role: 'Fee Manager / Instructor',
    description: "At the helm of our financial strategies, our Fee and Discount Manager orchestrates seamless operations, ensuring our patrons receive the best value. With a keen eye for detail, he navigates through various offers and discounts, making our services accessible to user",
    socialLinks: {
      facebook: 'https://www.facebook.com/priyam.gautam.75',
      instagram: 'https://www.instagram.com/priyam_gautam/',
      twitter: 'https://twitter.com/'
    }
  },
];

const About = () => {
  return (
    <>
      <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-green-700">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                  <h1 className="mt-2 text-3xl font-black text-green-700 md:text-5xl dark:text-green-700">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Embodying a legacy of knowledge, our library is a cherished community hub fostering a love for reading and learning. With an extensive collection, passionate staff, and a commitment to accessibility, we provide a welcoming space for individuals of all ages. Explore the world of literature, engage in intellectual pursuits, and be part of our vibrant community dedicated to the joy of discovery. Welcome to a place where stories unfold, minds expand, and the pursuit of knowledge knows no boundaries.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-green-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                          fill="currentColor" classNameName="bi bi-file-earmark-text" viewBox="0 0 16 16">
                          <path
                            d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                          <path
                            d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">600+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">Books & Magzine </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-green-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                          fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                          <path
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">200 +
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">Students</h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-green-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                          fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path
                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">10+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">Staff Members</h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-green-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                          fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                          <path
                            d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">24/7
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">Open</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                className="relative z-40 object-cover w-full h-full rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-gray-700 mb-12">Our Goals</h2>

          <div className="flex flex-wrap items-center justify-center">
            {/* Goal 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-md p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Promote Literacy</h3>
                <p className="text-gray-700">
                  Foster a community of readers by promoting literacy and a love for reading among people of all ages.
                </p>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-md p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Curate Diverse Collections</h3>
                <p className="text-gray-700">
                  Curate diverse collections to ensure accessibility to a wide range of knowledge and perspectives.
                </p>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-md p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                <p className="text-gray-700">
                  Engage with the community through events, workshops, and programs to enrich the learning experience.
                </p>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-md p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Embrace Technology</h3>
                <p className="text-gray-700">
                  Embrace technology to enhance access to information, creating a modern and efficient library experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-4xl title-font mb-4 text-gray-700">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team is a dynamic ensemble of dedicated individuals committed to excellence. With a shared passion for our mission, we collaboratively work towards creating a positive and enriching environment.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={priyamImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Swapnil Singh </h2>
                  <p className="text-gray-500">Founder / Director</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={priyamImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Priyam Gautam</h2>
                  <p className="text-gray-500">Technology and Innovation Specialist</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={priyamImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Ashutosh Kumar Verma</h2>
                  <p className="text-gray-500">Facilities and Operations Coordinator</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={vipImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Vipendra Gautam</h2>
                  <p className="text-gray-500">Creator-in-Residence</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={shikhaImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Shikha Singh</h2>
                  <p className="text-gray-500">Curator of Collections</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={priyamImg} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Shri Nivas</h2>
                  <p className="text-gray-500">Community Engagement Manage</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4" src={team[0].img} />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">{team[0].title}</h2>
                  <h3 class="text-blue-700 mb-3">{team[0].title}</h3>
                  <p class="mb-4">{team[0].description}</p>
                  <span class="inline-flex">
                    <a href="https://www.facebook.com/priyam.gautam.75" class="ml-2 mr-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/priyam_gautam/' target="_blank" rel="noopener noreferrer" class="text-gray-500 mr-2 ">
                      <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 8 2 C 4.6910301 2 2 4.6910301 2 8 L 2 16 C 2 19.30897 4.6910301 22 8 22 L 16 22 C 19.30897 22 22 19.30897 22 16 L 22 8 C 22 4.6910301 19.30897 2 16 2 L 8 2 z M 8 4 L 16 4 C 18.773 4 21 6.227 21 9 L 21 16 C 21 18.773 18.773 21 16 21 L 8 21 C 5.227 21 3 18.773 3 16 L 3 9 C 3 6.227 5.227 4 8 4 z M 12 6 C 9.243 6 7 8.243 7 11 C 7 13.757 9.243 16 12 16 C 14.757 16 17 13.757 17 11 C 17 8.243 14.757 6 12 6 z M 12 8 A 3 3 0 0 1 12 14 A 3 3 0 0 1 12 8 z"></path>
                      </svg>

                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4" src={shikhaImg} />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Shikha Singh</h2>
                  <h3 class="text-blue-700 mb-3">Assistant Director / UPSC Aspirants</h3>
                  <p class="mb-4">An integral part of our library's journey, our Assistant Director of Operations brings vision and expertise to every endeavor. With her guidance, we chart new paths of success, ensuring a vibrant and enriching experience for all</p>
                  <span class="inline-flex">
                    <a href="https://www.facebook.com/priyam.gautam.75" class="ml-2 mr-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/priyam_gautam/' target="_blank" rel="noopener noreferrer" class="text-gray-500 mr-2 ">
                      <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 8 2 C 4.6910301 2 2 4.6910301 2 8 L 2 16 C 2 19.30897 4.6910301 22 8 22 L 16 22 C 19.30897 22 22 19.30897 22 16 L 22 8 C 22 4.6910301 19.30897 2 16 2 L 8 2 z M 8 4 L 16 4 C 18.773 4 21 6.227 21 9 L 21 16 C 21 18.773 18.773 21 16 21 L 8 21 C 5.227 21 3 18.773 3 16 L 3 9 C 3 6.227 5.227 4 8 4 z M 12 6 C 9.243 6 7 8.243 7 11 C 7 13.757 9.243 16 12 16 C 14.757 16 17 13.757 17 11 C 17 8.243 14.757 6 12 6 z M 12 8 A 3 3 0 0 1 12 14 A 3 3 0 0 1 12 8 z"></path>
                      </svg>

                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4" src={priyamImg} />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Priyam Gautam</h2>
                  <h3 class="text-blue-700 mb-3">Technology and Innovation Specialis</h3>
                  <p class="mb-4">Software Engineer at Salseforce.This website has been created and introduced to the digital realm by Priyam Gautam, ensuring seamless experiences for all. Explore this digital sanctuary meticulously crafted by Priyam Gautam for an unparalleled online journey</p>
                  <span class="inline-flex">
                    <a href="https://www.facebook.com/priyam.gautam.75" class="ml-2 mr-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/priyam_gautam/' target="_blank" rel="noopener noreferrer" class="text-gray-500 mr-2 ">
                      <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 8 2 C 4.6910301 2 2 4.6910301 2 8 L 2 16 C 2 19.30897 4.6910301 22 8 22 L 16 22 C 19.30897 22 22 19.30897 22 16 L 22 8 C 22 4.6910301 19.30897 2 16 2 L 8 2 z M 8 4 L 16 4 C 18.773 4 21 6.227 21 9 L 21 16 C 21 18.773 18.773 21 16 21 L 8 21 C 5.227 21 3 18.773 3 16 L 3 9 C 3 6.227 5.227 4 8 4 z M 12 6 C 9.243 6 7 8.243 7 11 C 7 13.757 9.243 16 12 16 C 14.757 16 17 13.757 17 11 C 17 8.243 14.757 6 12 6 z M 12 8 A 3 3 0 0 1 12 14 A 3 3 0 0 1 12 8 z"></path>
                      </svg>

                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Abhishek Singh</h2>
                  <h3 class="text--500 mb-3 text-blue-700"> Fee Manager / Instructor </h3>
                  <p class="mb-4">At the helm of our financial strategies, our Fee and Discount Manager orchestrates seamless operations, ensuring our patrons receive the best value. With a keen eye for detail, he navigates through various offers and discounts, making our services accessible to a</p>
                  <span class="inline-flex">
                    <a href="https://www.facebook.com/priyam.gautam.75" class="ml-2 mr-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/priyam_gautam/' target="_blank" rel="noopener noreferrer" class="text-gray-500 mr-2 ">
                      <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 8 2 C 4.6910301 2 2 4.6910301 2 8 L 2 16 C 2 19.30897 4.6910301 22 8 22 L 16 22 C 19.30897 22 22 19.30897 22 16 L 22 8 C 22 4.6910301 19.30897 2 16 2 L 8 2 z M 8 4 L 16 4 C 18.773 4 21 6.227 21 9 L 21 16 C 21 18.773 18.773 21 16 21 L 8 21 C 5.227 21 3 18.773 3 16 L 3 9 C 3 6.227 5.227 4 8 4 z M 12 6 C 9.243 6 7 8.243 7 11 C 7 13.757 9.243 16 12 16 C 14.757 16 17 13.757 17 11 C 17 8.243 14.757 6 12 6 z M 12 8 A 3 3 0 0 1 12 14 A 3 3 0 0 1 12 8 z"></path>
                      </svg>

                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {teamData.map((member) => (
              <div key={member.id} className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4" src={member.img} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{member.title}</h2>
                    <h3 className="text-blue-700 mb-3">{member.
                      role}</h3>
                    <p className="mb-4">{member.description}</p>
                    <span className="inline-flex">
                      <a href={member.socialLinks.facebook} className="ml-2 mr-2 text-gray-500" target="_blank" rel="noopener noreferrer">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a href={member.socialLinks.instagram} className="text-gray-500 mr-2 " target="_blank" rel="noopener noreferrer">
                        <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                          <path d="M 8 2 C 4.6910301 2 2 4.6910301 2 8 L 2 16 C 2 19.30897 4.6910301 22 8 22 L 16 22 C 19.30897 22 22 19.30897 22 16 L 22 8 C 22 4.6910301 19.30897 2 16 2 L 8 2 z M 8 4 L 16 4 C 18.773 4 21 6.227 21 9 L 21 16 C 21 18.773 18.773 21 16 21 L 8 21 C 5.227 21 3 18.773 3 16 L 3 9 C 3 6.227 5.227 4 8 4 z M 12 6 C 9.243 6 7 8.243 7 11 C 7 13.757 9.243 16 12 16 C 14.757 16 17 13.757 17 11 C 17 8.243 14.757 6 12 6 z M 12 8 A 3 3 0 0 1 12 14 A 3 3 0 0 1 12 8 z"></path>
                        </svg>
                      </a>
                      <a href={member.socialLinks.twitter} className="ml-2 text-gray-500" target="_blank" rel="noopener noreferrer">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SuccessStories2 />

      <SuccessStories />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-full text-gray-700 font-bold title-font text-3xl text-center mb-2 sm:mb-0">All Branches</h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 transition duration-00 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.jdmagicbox.com/comp/satna/q2/9999p7672.7672.200804122516.z1q2/catalogue/apni-library-satna-city-satna-libraries-jladqbftb6-250.jpg?w=1920&q=75" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Central Library: Bus Stand</h2>
              <p className="text-base leading-relaxed mt-2">
                The Central Library, a bustling intellectual hub, offers a vast collection of books, dynamic programs, and a welcoming atmosphere for diverse minds to connect, learn, and grow.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.jdmagicbox.com/comp/satna/q2/9999p7672.7672.200804122516.z1q2/catalogue/apni-library-satna-city-satna-libraries-dxozjv7s0f.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Branch Library - Circuit Hosue</h2>
              <p className="text-base leading-relaxed mt-2">
                Nestled in the vibrant East community, our Branch Library is a local haven, providing a carefully curated selection of resources and a warm space for personal and educational exploration.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.jdmagicbox.com/comp/satna/q2/9999p7672.7672.200804122516.z1q2/catalogue/apni-library-satna-city-satna-libraries-luj3vi3xgv.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Branch Library - Utaily</h2>
              <p className="text-base leading-relaxed mt-2">Serving the vibrant East community, our Branch Library is a local haven for readers and learners.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;