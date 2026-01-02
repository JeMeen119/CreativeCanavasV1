import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
export default function Storage() {
  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] p-8">
      <Navbar /><div className="max-w-2xl mx-auto mt-20 bg-[#252426] p-12 rounded-3xl">
        <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-8">Storage</h1>
        <div className="space-y-6 mb-8">
          <div className="text-3xl font-bold">2GB / 2GB used</div>
          <Button className="w-full bg-[#F2CB55] text-[#19181A]">Upgrade</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline">Tier 1: 5GB/yr</Button>
          <Button variant="outline">Tier 2: 50GB/yr</Button>
          <Button variant="outline">Contact for more</Button>
        </div>
      </div>
    </div>
  );
}
