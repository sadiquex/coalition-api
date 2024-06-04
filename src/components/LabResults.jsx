import Title from "./Title";

export default function LabResults({ labResults }) {
  //   console.log(labResults);

  return (
    <div className="bg-white p-4">
      <Title>Lab Results</Title>

      <ul className="flex flex-col gap-1 font-manrope text-xs">
        {labResults?.map((result, i) => (
          <li
            key={i}
            className="flex justify-between p-2 cursor-pointer hover:bg-lightGray"
          >
            <p>{result}</p>
            <span>
              <img src="/assets/icons/download_icon.svg" alt="download_icon" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
