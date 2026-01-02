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
          <p>{step === "signup" ? "Join Milieu AI today" : "Enter the 6-digit code sent to your email"}</p>
        </div>

        {step === "signup" ? (
          <>
            <div className="space-y-4">
              <Button variant="outline" className="w-full border-[#F2CB55] text-[#F2CB55] gap-
