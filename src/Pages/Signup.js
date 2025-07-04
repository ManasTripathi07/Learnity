import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/authSlice";
import { ACCOUNT_TYPE } from "../utils/constants";
import Tab from "../Components/common/Tab"

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.USER)
  const [previewImage, setImagePreview] = useState("");

  // for user input
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  // function to set the signup data
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  // function to handle the image upload
  const getImage = (event) => {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];

    // if image exists then getting the url link of it
    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage,
        role: accountType,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setImagePreview(this.result);
      });
    }
  };

  // function to create account
  const createNewAccount = async (event) => {
    event.preventDefault();

    // checking the empty fields
    if (
      !signupData.avatar ||
      !signupData.email ||
      !signupData.fullName ||
      !signupData.password
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // checking the name field length
    if (signupData.fullName.length < 5) {
      toast.error("Name should be atleast of 5 characters");
      return;
    }

    // email validation using regex
    if (
      !signupData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid email id");
      return;
    }

    // password validation using regex
    if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
      toast.error(
        "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
      );
      return;
    }

    // creating the form data from the existing data
    const formData = new FormData();
    formData.append("fullName", signupData.fullName);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("avatar", signupData.avatar);
    formData.append("role",signupData.role);
    
    // calling create account action
    const res = await dispatch(createAccount(formData));

    // redirect to login page if true
    if (res.payload.success) navigate("/login");

    // clearing the signup inputs
    setSignupData({
      fullName: "",
      email: "",
      password: "",
      avatar: "",
    });
    setImagePreview("");
  };

  
  const tabData = [
    {
      id: 1,
      tabName: "USER",
      type: ACCOUNT_TYPE.USER,
    },
    {
      id: 2,
      tabName: "ADMIN",
      type: ACCOUNT_TYPE.ADMIN,
    },
  ]

  return (
    
    <Layout>
     
      <div className="flex items-center justify-center h-[100vh]">
        
        <form
          onSubmit={createNewAccount}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-500"
        >
          
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>

          {/* input for image file */}
          <label className="cursor-pointer label-style" htmlFor="image_uploads">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto"
                src={previewImage}
                alt="preview image"
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            onChange={getImage}
            className="hidden"
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
          />
          <div className=" flex justify-center">
            <Tab tabData={tabData} field={accountType} setField={setAccountType} />
          </div>
          
          {/* input for name */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold label-style" htmlFor="fullName">
              Name
            </label>
            <input
              required
              type="name"
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border form-style"
              value={signupData.fullName}
              onChange={handleUserInput}
            />
          </div>

          {/* input for email */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold label-style" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border form-style"
              value={signupData.email}
              onChange={handleUserInput}
            />
          </div>

          {/* input for password */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold label-style" htmlFor="password">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-transparent px-2 py-1 border form-style"
              value={signupData.password}
              onChange={handleUserInput}
            />
          </div>

          {/* registration button */}
          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Create Account
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/login"} className="link text-accent cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
