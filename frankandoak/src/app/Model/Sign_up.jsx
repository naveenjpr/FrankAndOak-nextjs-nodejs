"use client";
import React, { useState } from "react";
import { auth } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Sign_up({ singUpshow, setsingUpshow }) {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";

  let [showOTP, setShowOTP] = useState(false);
  let [formdatavalue, setformdatavalue] = useState(null);
  let [otpValues, setOtpValues] = useState(["", "", "", ""]);

  let SingUptoLogin = () => {
    if (setsingUpshow) {
      setsingUpshow(false);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    let obj = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      Email: e.target.Email.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
    };
    setformdatavalue(obj);

    // Send OTP for registration
    fetch(`${baseUrl}api/fronted/user/sendotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: obj.Email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("OTP sent to your email!");
          setShowOTP(true);
        }
      })
      .catch((err) => {
        toast.error("Failed to send OTP. Please try again.");
      });
  };

  let checkOTPandSaveData = () => {
    const otp = otpValues.join("");
    if (otp.length == 4) {
      fetch(`${baseUrl}api/fronted/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formdatavalue,
          otp: otp,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            toast.success("Account created successfully!");
            setShowOTP(false);
            setsingUpshow(false);
            setOtpValues(["", "", "", ""]);
          } else {
            toast.error(data.message || "Registration failed");
          }
        })
        .catch((err) => {
          toast.error("Invalid OTP. Please try again.");
        });
    } else {
      toast.error("Please enter complete OTP");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.querySelector(
          `input[name="otp-${index + 1}"]`
        );
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleConfirmOTP = () => {
    checkOTPandSaveData();
  };

  const handleResendOTP = () => {
    if (formdatavalue) {
      fetch(`${baseUrl}api/fronted/user/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formdatavalue.Email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            toast.success("OTP resent successfully!");
            setOtpValues(["", "", "", ""]);
          }
        })
        .catch((err) => {
          toast.error("Failed to resend OTP");
        });
    }
  };

  // Show OTP component
  if (showOTP == true) {
    return (
      <div
        className={`w-[700px] duration-500 bg-white h-screen fixed left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] z-[999] overflow-auto`}
      >
        <div className="relative">
          <span
            className="absolute right-4 top-4 text-[25px] cursor-pointer hover:text-[red] z-10"
            onClick={() => setShowOTP(false)}
          >
            x
          </span>
        </div>

        <div className="my-[15px]">
          <p className="text-[26px] font-bold text-center">Welcome!</p>
          <p className="text-[16px] font-semibold text-center text-gray-600">
            Sign up to enjoy your perks
          </p>
        </div>

        {/* Perks Section */}
        <div className="grid grid-cols-3 justify-between items-center px-8 my-6">
          <div className="flex flex-col justify-center items-center leading-[20px]">
            <Image src="/download.svg" alt="" width={24} height={24} />
            <p className="text-[13px]">Frank's Club</p>
            <p className="text-[13px]">Earn points, get rewards</p>
          </div>
          <div className="flex flex-col justify-center items-center leading-[20px]">
            <Image src="/whichlist.svg" alt="" width={24} height={24} />
            <p className="text-[13px]">Wishlist</p>
            <p className="text-[13px]">Save your favourites</p>
          </div>
          <div className="flex flex-col justify-center items-center leading-[20px]">
            <Image src="/earn.svg" alt="" width={24} height={24} />
            <p className="text-[13px]">Early access</p>
            <p className="text-[13px]">Exclusive sale perks</p>
          </div>
        </div>

        {/* OTP Input Section */}
        <div className="px-[50px] my-[30px]">
          <div className="flex gap-3 justify-center mb-6">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                name={`otp-${index}`}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength="1"
                className="w-16 h-16 text-2xl font-bold text-center rounded-lg border-2 border-gray-300 focus:border-black focus:outline-none"
                placeholder=""
              />
            ))}
          </div>

          <button
            onClick={handleConfirmOTP}
            className="w-full bg-black text-white font-bold py-[15px] mb-4 rounded-lg hover:bg-gray-800"
          >
            Confirm OTP
          </button>

          <button
            type="button"
            onClick={handleResendOTP}
            className="w-full text-sm text-center text-blue-600 underline"
          >
            Didn't receive code? Resend OTP
          </button>
        </div>

        {/* Promotional Footer */}
        <div className="px-[50px] mt-8">
          <p className="mb-2 text-lg font-bold text-center">
            Get 15% off and Free Delivery on your first order!
          </p>
          <p className="text-sm text-center text-gray-600">
            Limited time offer. Shop now and enjoy exclusive discounts on our
            best-sellers! Sign up today and be the first to hear about new
            arrivals, promotions, and more.
          </p>
        </div>
      </div>
    );
  }

  // Show signup form
  return (
    <div
      className={`w-[700px] duration-500 bg-white h-screen fixed left-[50%] top-[-60%] translate-x-[-50%] translate-y-[-50%] z-[999] overflow-auto ${
        singUpshow ? "top-[60%]" : ""
      }`}
    >
      <div className="relative">
        <span
          className="absolute right-4 top-4 text-[25px] cursor-pointer hover:text-[red] z-10"
          onClick={() => setsingUpshow && setsingUpshow(false)}
        >
          x
        </span>
      </div>

      <div className="my-[15px]">
        <p className="text-[26px] font-bold text-center">Create your account</p>

        <p className="text-[20px] font-semibold text-center">
          Sign up and enjoy member benefits.
        </p>
      </div>
      <div className="grid grid-cols-3 justify-between items-center my-3">
        <div className=" flex flex-col justify-center items-center leading-[20px]">
          <Image
            src="/download.svg" // public फोल्डर से image
            alt=""
            width={24}
            height={24}
          />
          <p className="text-[13px]">Frank's Club</p>
          <p className="text-[13px]">Earn points, get rewards</p>
        </div>
        <div className=" flex flex-col justify-center items-center leading-[20px]">
          <Image
            src="/whichlist.svg" // public फोल्डर से image
            alt=""
            width={24}
            height={24}
          />
          <p className="text-[13px]">Wishlist</p>
          <p className="text-[13px]">Save your favourites</p>
        </div>
        <div className=" flex flex-col justify-center items-center leading-[20px]">
          <Image
            src="/earn.svg" // public फोल्डर से image
            alt=""
            width={24}
            height={24}
          />
          <p className="text-[13px]">Early access</p>
          <p className="text-[13px]">Exclusive sale perks</p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="flex gap-1 items-center">
          Already have an account?
          <u
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => SingUptoLogin()}
          >
            Log in
            <Image src="/arrow.svg" alt="" width={10} height={10} />
          </u>
        </p>
      </div>

      <hr />
      <form
        className="grid grid-cols-2 gap-3 px-[50px] my-[50px]"
        onSubmit={handleSignUp}
      >
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="border border-[solid] border-[black] p-[10px]"
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          className="border border-[solid] border-[black] p-[10px]"
        />
        <input
          type="email"
          placeholder="email"
          name="Email"
          className="border border-[solid] border-[black] p-[10px] col-span-2"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="border border-[solid] border-[black] p-[10px] col-span-2"
        />
        <p className="flex col-span-2 gap-3 justify-start">
          I shop for
          <input type="radio" name="gender" value="Men" /> Men
          <input type="radio" name="gender" value="Women" /> Women
        </p>

        <div className="flex col-span-2 gap-2 items-start font-bold whitespace-nowrap">
          <input type="checkbox" className="mt-1" />
          <span>
            Yes, sign me up to the Frank And Oak newsletter to never miss out on
            product
            <br />
            launches and exclusive promotions.
          </span>
        </div>
        <button
          className="bg-black text-white font-bold col-span-2 py-[10px]"
          type="submit"
        >
          Sign up
        </button>
        <div className="col-span-2">
          <div className="flex justify-center items-center pt-4 pb-4 text-center border-b">
            <hr className="flex-grow" />

            <span> Social login</span>
            <hr className="flex-grow" />
          </div>
        </div>
        <div className="flex col-span-2 gap-3">
          <button className="border-[2px] border-[black] flex gap-3 w-[100%] items-center py-[10px] px-[10px]">
            <FaFacebook /> Sign in with Facebook
          </button>
          <button className="border-[2px] border-[black] flex gap-3 w-[100%] items-center py-[10px] px-[10px]">
            <FaFacebook /> Sign in with Facebook
          </button>{" "}
        </div>
        <hr />
        <p className="col-span-2 text-[10px]">
          By joining, you agree to Frank And Oak's Terms & Conditions and
          Privacy Policy and to receive Frank And Oak's electronic
          communications.
        </p>
      </form>
    </div>
  );
}
