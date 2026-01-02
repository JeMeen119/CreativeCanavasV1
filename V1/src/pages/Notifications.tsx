import { Navbar } from "@/components/Navbar";
export default function Notifications() {
  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] p-8">
      <Navbar /><div className="max-w-2xl mx-auto mt-20 bg-[#252426] p-12 rounded-3xl">
        <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-8">Notifications</h1>
        <div className="text-xl opacity-75 text-center py-20">No notifications</div>
      </div>
    </div>
  );
}
