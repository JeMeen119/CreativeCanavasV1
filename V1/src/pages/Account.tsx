import { Navbar } from "@/components/Navbar";
export default function Account() {
  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] p-8">
      <Navbar /><div className="max-w-2xl mx-auto mt-20 bg-[#252426] p-12 rounded-3xl">
        <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-8">Account Settings</h1>
        <div className="space-y-6 text-lg">
          <div>Name: John Doe</div>
          <div>Username: @johndoe</div>
          <div>Email: john@example.com</div>
          <div>Other settings stub...</div>
        </div>
      </div>
    </div>
  );
}
