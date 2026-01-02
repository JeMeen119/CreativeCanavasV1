import { Navbar } from "@/components/Navbar";
import { Mail, Lock, Google, Apple, Facebook, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Dummy redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto'] flex items-center justify-center p-8">
      <Navbar />
      <div className="max-w-md w-full space-y-8 bg-[#252426] p-12 rounded-3xl">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#F2CB55]/20 rounded-2xl flex items-center justify-center">
            <Mail className="w-12 h-12 text-[#F2CB55]" />
          </div>
          <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-4">Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
        
        <div className="space-y-4">
          <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3">
            <Google className="w-5 h-5" /> Continue with Google
          </Button>
          <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3">
            <Apple className="w-5 h-5" /> Continue with Apple
          </Button>
          <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3">
            <Facebook className="w-5 h-5" /> Continue with Facebook
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#252426]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-4 bg-[#252426] text-[#DDDAE5]">or</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Input placeholder="Email" className="bg-[#19181A] border-[#252426] text-[#DDDAE5] h-12" />
          </div>
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="bg-[#19181A] border-[#252426] text-[#DDDAE5] h-12 pr-12" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#DDDAE5]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Button onClick={handleLogin} className="w-full h-12 bg-[#F2CB55] text-[#19181A] font-['Poppins'] text-lg">
            Sign In
          </Button>
        </div>

        <p className="text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-[#F2CB55] font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
