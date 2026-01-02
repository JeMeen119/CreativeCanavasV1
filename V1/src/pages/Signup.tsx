import { Navbar } from "@/components/Navbar";
import { Mail, Lock, Google, Apple, Facebook, Eye, EyeOff, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState("signup"); // "signup" | "verify"
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");

  const handleSignup = () => setStep("verify");
  const handleVerify = () => navigate("/dashboard");

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto'] flex items-center justify-center p-8">
      <Navbar />
      <div className="max-w-md w-full space-y-8 bg-[#252426] p-12 rounded-3xl">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#F2CB55]/20 rounded-2xl flex items-center justify-center">
            <Mail className="w-12 h-12 text-[#F2CB55]" />
          </div>
          <h1 className="text-4xl font-['Poppins'] text-[#F2CB55] mb-4">
            {step === "signup" ? "Create Account" : "Verify Email"}
          </h1>
          <p>
            {step === "signup" 
              ? "Join Milieu AI today" 
              : "Enter the 6-digit code sent to your email"
            }
          </p>
        </div>

        {step === "signup" ? (
          <>
            {/* Social Logins */}
            <div className="space-y-4">
              <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3 h-12">
                <Google className="w-5 h-5" /> Continue with Google
              </Button>
              <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3 h-12">
                <Apple className="w-5 h-5" /> Continue with Apple
              </Button>
              <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-3 h-12">
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

            {/* Email/Password */}
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
              <Button onClick={handleSignup} className="w-full h-12 bg-[#F2CB55] text-[#19181A] font-['Poppins'] text-lg">
                Create Account
              </Button>
            </div>

            <p className="text-center text-sm">
              Already have an account? <Link to="/login" className="text-[#F2CB55] font-medium">Sign in</Link>
            </p>
          </>
        ) : (
          <>
            {/* Verify Code Popup */}
            <div className="space-y-6">
              <div className="text-center">
                <Input 
                  type="text" 
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="000000"
                  className="w-32 h-20 text-3xl font-mono text-center mx-auto bg-[#19181A] border-2 border-dashed border-[#F2CB55] rounded-xl"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => setStep("signup")} 
                  variant="outline" 
                  className="flex-1 border-[#F2CB55] text-[#F2CB55]"
                >
                  Resend Code
                </Button>
                <Button 
                  onClick={handleVerify} 
                  className="flex-1 bg-[#F2CB55] text-[#19181A] font-['Poppins']"
                  disabled={code.length !== 6}
                >
                  <Check className="w-5 h-5 mr-2" /> Verify
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
