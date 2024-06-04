import Title from "./Title";
const PatientCard = ({ patient }) => {
  return (
    <div className="flex justify-between font-manrope text-sm p-2 cursor-pointer hover:bg-gray-100">
      {/* left */}
      <div className="flex items-center gap-1">
        <img
          src={patient.profile_picture}
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="">
          <p className="font-bold">{patient.name}</p>
          <p>
            {patient.gender}, {patient.age}
          </p>
        </div>
      </div>
      {/* right */}
      <img src="../../assets/icons/more_horizontal.svg" alt="more icon" />
    </div>
  );
};
export default function Patients({ patients }) {
  return (
    <div className="h-screen overflow-y-auto">
      {/* title */}
      <div className="flex justify-between px-4 mb-4">
        <Title>Patients</Title>
        <img src={"../../assets/icons/search_icon.svg"} alt="search icon" />
      </div>
      <div className="flex flex-col gap-1">
        {patients.map((patient, i) => (
          <PatientCard patient={patient} key={i} />
        ))}
      </div>
    </div>
  );
}
