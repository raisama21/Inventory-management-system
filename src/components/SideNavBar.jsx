import { Link } from "react-router-dom";
import NavItem from "./UI/NavItem";
import { MdDashboardCustomize, MdOutlineInventory2 } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { BsCart4, BsShopWindow, BsBag } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";

export default function SideNavBar() {
  return (
    <>
      <nav className="flex flex-col min-h-screen bg-dark-bg">
        <ul>
          <Link to="/Dashboard">
            <NavItem name="Dashboard" dashBoardSvg={<MdDashboardCustomize />} />
          </Link>
          <Link to="/items">
            <NavItem name="Items" dashBoardSvg={<MdOutlineInventory2 />} />
          </Link>
          <div className="divider"></div>
          <NavItem name="Customer" dashBoardSvg={<CiUser />} />
          <NavItem name="Sales order" dashBoardSvg={<BsCart4 />} />
          <NavItem name="Packages" dashBoardSvg={<BiPackage />} />
          <NavItem name="Invoices" dashBoardSvg={<AiOutlineFileAdd />} />
          <NavItem name="Payment Received" dashBoardSvg={<MdPayment />} />
          <div className="divider"></div>
          <NavItem name="Vendors" dashBoardSvg={<BsShopWindow />} />
          <NavItem name="Purchase order" dashBoardSvg={<BsBag />} />
          <NavItem name="Bills" dashBoardSvg={<RiBillLine />} />
        </ul>
        <div className="flex flex-col gap-2 w-[15rem] mt-auto">
          <Link to="/login-or-singup">
            <button className="w-full flex items-center justify-center gap-2  py-4 mb-4 bg-accent text-white font-semibold">
              <BiUserPlus className="h-5 w-5" />
              Login / Singup
            </button>
          </Link>
          <button className="py-4 bg-dark text-white">
            <FaAngleLeft className="mx-auto text-2xl" />
          </button>
        </div>
      </nav>
    </>
  );
}
