import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import DiagnosticHistory from "./DiagnosticHistory";
import Patients from "./Patients";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";

export default function Dashboard() {
  // state to manage user data
  const [usersData, setUsersData] = useState([]);
  const [jessicaData, setJessicaData] = useState("");

  // TODO:  don't forget to store the auth keys in .env
  let username = "coalition";
  let password = "skills-test";

  let auth = btoa(`${username}:${password}`);

  const API_URL = `https://fedskillstest.coalitiontechnologies.workers.dev/`;

  const getData = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setUsersData(data);
      if (data.length > 0) {
        // index 3 contains Jessica Taylor data
        setJessicaData(data[3]);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex gap-6 p-4 bg-gray-100">
      {/* patients */}
      <div className="bg-white rounded-md w-[370px] pt-4">
        {usersData && <Patients patients={usersData} />}
      </div>

      {/* diagnostic history */}
      <div className="w-[760px] p-2 rounded-md space-y-4">
        <DiagnosticHistory />
        <DiagnosticList diagnosticList={jessicaData?.diagnostic_list} />
      </div>

      {/* profile */}
      <div className="w-[370px] space-y-4 p-2 rounded-md">
        <ProfileCard user={jessicaData} />
        <LabResults labResults={jessicaData?.lab_results} />
      </div>
    </div>
  );
}
