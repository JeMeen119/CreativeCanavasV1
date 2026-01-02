import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
export default function Personalization() {
  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] p-8">
      <Navbar /><div className="max-w-2xl mx-auto mt-20 bg-[#252426] p-12 rounded-3xl">
        <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-8">Personalization</h1>
        <div className="space-y-6">
          <div>Theme: <Button variant="outline">Dark/Light Toggle</Button></div>
          <div>Preferred Language: English</div>
          <div>Output Language: English</div>
        </div>
      </div>
    </div>
  );
}
