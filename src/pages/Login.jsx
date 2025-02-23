import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import appLogo from "../assets/app_logo.svg";

function Login({ setUserLoggedIn }) {
  const [isLogin, setIsLogin] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const isInvalidPhone = phone.length !== 10;
  const hardcodedOtp = "1234";

  const handleContinue = () => {
    if (!isInvalidPhone) {
      setShowOtp(true);
    }
  };

  const handleSubmitOtp = () => {
    if (otp === hardcodedOtp) {
      setUserLoggedIn(true); 
      localStorage.setItem("isLoggedIn", "true"); 
      navigate("/");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="text-xl font-medium" onClick={() => setIsLogin(!isLogin)}>
        Login
      </div>
      {isLogin && (
        <div className="absolute top-[0%] right-[0%] bg-white/30 backdrop-blur-xs w-full h-full flex justify-center items-center">
          <div className="w-2/4 h-1/2 border rounded-xl p-3 flex flex-col">
            <div className="flex justify-between items-center">
              <RxCross1 size={20} className="cursor-pointer" onClick={() => setIsLogin(false)} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={appLogo} alt="appLogo" />
              <p className="text-2xl font-medium">India Last Minute App</p>
              <p className="text-xl font-light">{showOtp ? "Enter OTP" : "Log in or Sign up"}</p>

              {!showOtp ? (
                <>
                  <div className="border rounded-lg px-3 py-2 w-1/2 mt-6 flex gap-2">
                    <p>+91</p>
                    <input
                      type="number"
                      placeholder="Enter your No."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="outline-none focus:not-disabled w-full"
                    />
                  </div>
                  {isInvalidPhone && <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit number</p>}
                  <button
                    className="bg-green-700 w-1/2 px-4 py-3 rounded-xl mt-4"
                    onClick={handleContinue}
                    disabled={isInvalidPhone}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <div className="border rounded-lg px-3 py-2 w-1/2 mt-6 flex gap-2">
                    <input
                      type="password"
                      placeholder="Enter 4-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="outline-none focus:not-disabled w-full text-center"
                      maxLength={4}
                    />
                  </div>
                  <button className="bg-green-700 w-1/2 px-4 py-3 rounded-xl mt-4" onClick={handleSubmitOtp}>
                    Submit OTP
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
