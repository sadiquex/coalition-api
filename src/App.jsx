import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-lightGray min-h-screen p-2 space-y-2">
      <Header />
      <Dashboard />
    </div>
  );
}
