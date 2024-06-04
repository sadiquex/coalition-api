const DetailCard = ({ detail }) => {
  return (
    <div className="w-full flex items-center gap-2 font-manrope">
      {/* left */}
      <div className="rounded-full p-2 w-12 h-12 bg-lightGray flex items-center justify-center">
        <img src={detail.iconSrc} alt={detail.title} />
      </div>

      {/* right */}
      <div className="text-sm">
        <p className="">{detail?.title}</p>
        <p className="font-bold">{detail.value}</p>
      </div>
    </div>
  );
};

export default function ProfileCard({ user }) {
  const {
    name,
    age,
    gender,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  } = user;

  // details we need - map over them
  const details = [
    {
      title: "Date of Birth",
      value: date_of_birth,
      iconSrc: "../../assets/icons/schedule_icon.svg",
    },
    {
      title: "Gender",
      value: gender,
      iconSrc: "../../assets/icons/female_icon.svg",
    },
    {
      title: "Contact Info.",
      value: phone_number,
      iconSrc: "../../assets/icons/PhoneIcon.svg",
    },
    {
      title: "Emergency Contacts",
      value: emergency_contact,
      iconSrc: "../../assets/icons/PhoneIcon.svg",
    },
    {
      title: "Insurance Provider",
      value: insurance_type,
      iconSrc: "../../assets/icons/InsuranceIcon.svg",
    },
  ];

  return (
    <div className="p-4 flex flex-col items-center gap-4 bg-white rounded-md">
      <img src={profile_picture} alt="jessica" width={160} height={160} />
      <h3 className="font-bold text-xl font-manrope">{name}</h3>
      {/* show person details - from API */}
      {details.map((detail, i) => (
        <DetailCard detail={detail} key={i} />
      ))}

      <button className="bg-mintGreen font-semibold text-sm py-2 px-8 rounded-full w-full">
        Show All Information
      </button>
    </div>
  );
}
