import Link from 'next/link';

const Carousel = () => {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4">About Us</h1>
              <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
              <Link href="contact.html" to="first" style={{ textDecoration: 'none' }}>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Us</button>
              </Link>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300">
                <rect width="100%" height="100%" fill="#fff" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="#000">SVG Image 1</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-dar border-0 my-0.5" style={{ height: '0.5px' }} />

      <div className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300">
                <rect width="100%" height="100%" fill="#fff" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="#000">SVG Image 2</text>
              </svg>
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Experiences</h2>
              <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
              <Link href="contact.html" to="first" style={{ textDecoration: 'none' }}>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row">
      <hr className="bg-dar border-0 my-0.5" style={{ height: '0.5px' }} />

        <div className="column bg-dark">
          <div className="card bg-dark text-light">
            <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column bg-dark">
          <div className="card bg-dark text-light">
            <img src="img2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column bg-dark">
          <div className="card bg-dark text-light">
            <img src="img3.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column bg-dark">
          <div className="card bg-dark text-light">
            <img src="img4.jpg" alt="Sarah" style={{ width: '100%' }} />
            <div className="container">
              <h2>Sarah Smith</h2>
              <p className="title">Marketing Manager</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact</button></p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Four columns side by side */
        .column {
            float: left;
            width: 25%; /* Adjusted width to accommodate 4 members in one line */
            margin-bottom: 16px;
            padding: 0 8px;
            text-align: center; /* Added text-align center */
          }

        /* Display the columns below each other instead of side by side on small screens */
        @media screen and (max-width: 650px) {
          .column {
            width: 100%;
            display: block;
          }
        }

        /* Add some shadows to create a card effect */
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        /* Some left and right padding inside the container */
        .container {
          padding: 0 16px;
        }

        /* Clear floats */
        .container::after,
        .row::after {
          content: "";
          clear: both;
          display: table;
        }

        .title {
          color: grey;
        }

        .button {
          border: none;
          outline: 0;
          display: inline-block;
          padding: 8px;
          color: white;
          background-color: #000;
          text-align: center;
          cursor: pointer;
          width: 100%;
        }

        .button:hover {
          background-color: #555;
        }
      `}</style>
    </>
  );
};

export default Carousel;
