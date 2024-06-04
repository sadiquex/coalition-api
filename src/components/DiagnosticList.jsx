export default function DiagnosticList({ diagnosticList }) {
  return (
    <div className="p-4 font-manrope bg-white">
      <h3 className="text-darkBlue text-2xl pb-4 font-extrabold">
        Diagnostic List
      </h3>

      <table className="min-w-full bg-white font-manrope text-sm">
        <thead>
          <tr className="text-darkBlue bg-lightGray rounded-full">
            <th className="py-2 px-4 border-b text-left">Problem/Diagnosis</th>
            <th className="py-2 px-4 border-b text-left">Description</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList?.map((item, index) => (
            <tr key={index} className="">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
