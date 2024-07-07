import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center w-full justify-around py-4 bg-white">
      <h1 className="text-[#1D3B4A] font-bold text-[1.5rem]">Acookware</h1>
      <nav>
        <ul className="flex items-center flex-wrap gap-8 *:font-semibold *:text-[#B5B5B5]">
          <Link
            to={"/"}
            className="hover:border-b-2 hover:border-[#3A83A1] hover:text-[#3A83A1]">
            <a href="#">Home</a>
          </Link>
          {/* <li className="hover:border-b-2 hover:border-[#3A83A1] hover:text-[#3A83A1]">
            <a href="#">Home</a>
          </li> */}
          <li className="hover:border-b-2 hover:border-[#3A83A1] hover:text-[#3A83A1]">
            <a href="#">About Us</a>
          </li>
          <Link
            to={"/products"}
            className="hover:border-b-2 hover:border-[#3A83A1] hover:text-[#3A83A1]">
            <a href="#">Our Products</a>
          </Link>
          <li className="hover:border-b-2 hover:border-[#3A83A1] hover:text-[#3A83A1]">
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <form action="#" className="flex">
        <label htmlFor="search" className="border-b-2 bottom-3 flex gap-2">
          <img
            src="search-icon.png"
            alt="Search icon"
            className="object-contain"
          />
          <input type="text" name="search" id="search" placeholder="Search" />
        </label>
      </form>
      <div className="flex gap-2">
        <Link to={"/cart"} className="flex gap-2">
          <img
            src="cart.png"
            alt="Cart icon"
            height={24}
            width={24}
            className="object-contain"
          />

          <span className="text-[#B5B5B5] text-[.75rem]">Cart(2)</span>
        </Link>

        {/* <img
          src="cart.png"
          alt="Cart icon"
          height={24}
          width={24}
          className="object-contain"
        />

        <span className="text-[#B5B5B5] text-[.75rem]">Cart(2)</span> */}
        <img src="login-icon.png" alt="" height={24} width={24} />
      </div>
    </header>
  );
};

export default Header;

/*
<Link to={products}>Products</Link>
*/
