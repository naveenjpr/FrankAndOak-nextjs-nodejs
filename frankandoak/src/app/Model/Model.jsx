import React, { useState } from "react";
import loginlogo from "../../../public/loginlogo.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Login from "../Common/Login";
import Sign_up from "./Sign_up";

export default function Model({ setloginModelStatus, loginModelStatus }) {
  const [singUpshow, setsingUpshow] = useState(false);

  let SingUpClick = () => {
    setsingUpshow(!singUpshow);
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
        onClick={() => setloginModelStatus(false)}
      ></div>

      <div
        className={`w-[700px] duration-500 bg-white h-[500px] fixed left-[50%] top-[-1000px] translate-x-[-50%] translate-y-[-50%] z-[999] ${
          loginModelStatus == true ? "top-[50%]" : ""
        } `}
      >
        <div className="w-[100%] h-[100%] overflow-auto px-[12px] relative">
          <span
            className="absolute right-0 top-0 text-[25px] cursor-pointer hover:text-[red]"
            onClick={() => setloginModelStatus(false)}
          >
            x
          </span>
          <p className="text-[26px] text-center font-[400]">
            Welcome Back navenn
          </p>
          <p className="mt-[10px] text-[16px] font-[400] text-center">
            Log in to get access to your member perks.
          </p>
          <div className="grid grid-cols-3 py-[30px]">
            <div className="flex flex-col items-center leading-[25px]">
              <div>
                <img src={loginlogo} className="w-[30px] h-[30px]" />
              </div>
              <div className="font-[500] text-[12px]">Frank Rewards</div>
              <div className="font-[400] text-[12px]">
                Earn points. Get rewarded.
              </div>
            </div>
            <div className="flex flex-col items-center leading-[25px]">
              <div>
                <img src={loginlogo} className="w-[30px] h-[30px]" />
              </div>
              <div className="font-[500] text-[12px]">Frank Rewards</div>
              <div className="font-[400] text-[12px]">
                Earn points. Get rewarded.
              </div>
            </div>
            <div className="flex flex-col items-center leading-[25px]">
              <div>
                <img src={loginlogo} className="w-[30px] h-[30px]" />
              </div>
              <div className="font-[500] text-[12px]">Frank Rewards</div>
              <div className="font-[400] text-[12px]">
                Earn points. Get rewarded.
              </div>
            </div>
          </div>
          {/* login logic start */}
          <Login setloginModelStatus={setloginModelStatus} />
          {/* login logic end */}

          <p className="text-center py-[30px] font-[400]">Social login</p>
          <div className="grid grid-cols-2 justify-between items-center gap-[20px] px-[12px]">
            <div className="border-[2px] border-[solid] border-black flex justify-between items-center text-[#000000]">
              <div className="px-[12px]">
                <FaFacebookF />
              </div>
              <div className="px-[12px] font-[500] py-[15px]">
                Sign in with Facebook
              </div>
            </div>

            <div className="border-[2px] border-[solid] border-black flex justify-between items-center text-[#000000]">
              <div className="px-[12px]">
                <FaGoogle />
              </div>
              <div className="px-[12px] font-[500] py-[15px]">
                Sign in with Google
              </div>
            </div>
          </div>
          <p className="text-center py-[30px] font-[400]">Create an account</p>
          <p className="flex justify-center items-center pb-[30px]">
            Don't have an account? &nbsp;{" "}
            <button className="relative" onClick={() => SingUpClick()}>
              Sign up
              <span className="absolute top-[100%] h-[1px] bg-black left-0 w-[100%] "></span>
            </button>
          </p>
        </div>

        {singUpshow == true ? (
          <Sign_up singUpshow={singUpshow} setsingUpshow={setsingUpshow} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
