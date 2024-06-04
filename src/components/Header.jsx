import { useState } from "react";
import Logo from "/assets/images/TestLogo.png";
import Doctor1 from "/assets/images/senior-woman-doctor.png";

const navItems = [
  {
    name: "Overview",
    icon: "/assets/icons/home_icon.svg",
  },
  {
    name: "Patients",
    icon: "/assets/icons/patients_icon.svg",
  },
  {
    name: "Schedule",
    icon: "/assets/icons/schedule_icon.svg",
  },
  {
    name: "Message",
    icon: "/assets/icons/message_icon.svg",
  },
  {
    name: "Transactions",
    icon: "/assets/icons/transaction_icon.svg",
  },
];

export default function Header() {
  // state to handle tab being clicked on
  const [activeTab, setActiveTab] = useState("Patients");

  return (
    <div className="rounded-full w-full bg-white p-2 flex justify-between items-center font-manrope text-xs">
      {/* logo */}
      <div className="flex-1">
        <img src={Logo} alt="Logo" className="" />
      </div>
      {/* middle */}
      <div>
        <ul className="flex-1 flex gap-2">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-center justify-center gap-1 rounded-full p-2 cursor-pointer ${
                item.name === activeTab && "bg-mintGreen"
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              <span>
                <img src={item.icon} alt={item.name} />
              </span>{" "}
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* right */}
      <div className="pr-4 flex-1 flex justify-end items-center space-x-3">
        {/* dr image */}
        <div className="rounded-full">
          <img src={Doctor1} alt="doctor" />
        </div>
        {/* name and title */}
        <div className="">
          <p className="font-semibold">Dr. Jose Simmons</p>
          <p className="text-darkGray">General Practitioner</p>
        </div>

        {/* vertical line */}
        <div className="divide-x-4"></div>
        <img src="../../assets/icons/settings_icon.svg" alt="settings icon" />
        <img src="../../assets/icons/more_icon.svg" alt="more icon" />
      </div>
    </div>
  );
}
