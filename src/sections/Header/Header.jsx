import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="h-full">
      <header className="card  text-center bg-base-200 hover:bg-base-300 hover:shadow-2xl p-4 pb-10 lg:mx-12 mx-4">
        <h1 className=" text-3xl md:text-4xl font-bold tracking-tight mt-0">
          <a href="/">Hi there! I´m Diego and I love technology.</a>
        </h1>
        <h2 className="pt-8 lg:pt-8 text-lg font-medium tracking-tight sm:text-xl">
          Software Developer / Electrical Engineer
        </h2>
        <p className="pt-6">Big fan of software, IoT and electronics. Always learning something new! </p>
        <div className="hidden lg:block pt-8">
          <NavLinks />
        </div>
        <label className="flex justify-center cursor-pointer gap-2 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>

          <input
            type="checkbox"
            value="lofi"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </label>
      </header>
    </div>
  );
};

export default Header;
