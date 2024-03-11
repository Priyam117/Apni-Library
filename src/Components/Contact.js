
const Contact = () => {
  return (
    <>
      {/* <section className="bg-gray-50 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Swapnil Singh
              <br className="hidden lg:inline-block" />
            </h1>
            <p classNameName="text-2xl font-medium mb-6">Director/Owner of Apni Library</p>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Get in touch</button>

            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Priyam Gautam
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="text-2xl font-medium mb-6">Software Engineer/Creature of this website</p>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Get in touch</button>

            </div>
          </div>
        </div>
      </section> */}

      <div className="w-full pb-20  ">
        <p className="mt-12 text-center text-gray-400 text-3xl ">Frequently  Asked Questions(FAQ)</p>

        <ul class="max-w-4xl p-11 mx-auto mt-8 divide-y shadow-gray-200 rounded-md">
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span>What resources does the library provide?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Our library offers a diverse collection of books, including fiction, non-fiction, academic, and reference materials. We strive to cater to the varied interests and needs of our readers.
                </p>
              </article>
            </details>
          </li>
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span>Is Wi-Fi available at the library?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Yes, we provide free Wi-Fi for our members. Feel free to bring your devices and enjoy a conducive environment for both work and study.</p>
              </article>
            </details>
          </li>
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span> How can I borrow books from the library?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Borrowing books is easy! Simply visit our library, register for a membership, and start borrowing books. Our staff will guide you through the process, and you can enjoy reading at your convenience.</p>
              </article>
            </details>
          </li>
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span>Are there any special events or programs at the library?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Absolutely! We organize various events, book clubs, and educational programs throughout the year. Keep an eye on our events calendar or subscribe to our newsletter to stay updated on upcoming activities.</p>
              </article>
            </details>
          </li>
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span>Can I access digital newspapers or magazines through the library?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Yes, we offer access to a variety of digital newspapers and magazines through our online platforms. Members can enjoy reading the latest news and articles on a wide range of topics.</p>
              </article>
            </details>
          </li>
          <li className="my-2">
            <details class="group bg-gray-100 rounded-lg">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span> How can I become a member of the library?</span>
              </summary>

              <article class="px-4 pb-4">
                <p className="ml-9">
                  Becoming a member is simple! Visit the library, fill out a membership form, and provide the necessary identification. Once registered, you can start borrowing books and accessing various library services.</p>
              </article>
            </details>
          </li>
        </ul>
      </div>


      {/* form Setion  */}


      <div className="relative flex items-top justify-center min-h-screen bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-white dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-green-600 dark:text-green-600 font-extrabold tracking-tight">
                  Get in <span className="text-gray-800">touch</span>
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">

                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 7067205017
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <p>apnilibrary32@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l3 3"></path>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <p>Open 24/7</p>
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 2C8.69 2 6 4.69 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.31-2.69-6-6-6z"
                    ></path>
                    <circle cx="12" cy="8" r="2.4"></circle>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <p>Chanakyapuri Rd Satna, MP 485001</p>
                  </div>
                </div>
              </div>

              <form action="/" method="post" className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label for="name" className="hidden">Full Name</label>
                  <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="message" className="hidden">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"></textarea>
                </div>

                <button type="submit" className="md:w-32 bg-green-600  text-white font-bold py-3 px-6 rounded-lg mt-3 ml-1 hover:bg-green-800 transition ease-in-out duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Contact;