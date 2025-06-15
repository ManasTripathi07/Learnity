import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { getUserData } from "../../Redux/authSlice";
import { cancelCourseBundle } from "../../Redux/razorpaySlice";
import "./Profile.css"
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.data);

  // function to handle the cancel subscription of course
  const handleCourseCancelSubscription = async () => {
    await dispatch(cancelCourseBundle());
    await dispatch(getUserData());
    navigate("/");
  };

  useEffect(() => {
    // getting user details
    dispatch(getUserData());
  }, []);
  return (
    <Layout>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div className="min-h-[90vh] flex items-center justify-center wrapper">
        {/* className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200' */}
        <div className="my-10 bg-black  flex card-wrapper flex-col gap-4 rounded-lg font-semibold p-4 text-white w-160 shadow-[10px_-5px_50px_-5px] shadow-blue-500">
          <img
            className="w-40 rounded-full border translate-x-[155px] border-black"
            src={userData?.avatar?.secure_url}
            alt="user profile image"
          />

          <h3 className="text-xl font-semibold text-center capitalize ">
            {userData.fullName}
          </h3>

          <div className="grid grid-cols-2">
            <p>Email :</p>
            <p>{userData?.email}</p>
            <p>Role :</p>
            <p>{userData?.role}</p>
            <p>Subscription :</p>
            <p>
              {userData?.subscription?.status === "active"
                ? "Active"
                : "Inactive"}
            </p>
          </div>

          {/* button to change the password */}
          <div className="flex items-center justify-between gap-2">
            <Link
              to={
                userData?.email === "test@gmail.com"
                  ? "/denied"
                  : "/changepassword"
              }
              className="btn-pink"
            >
              <button>Change Password</button>
            </Link>

            <Link
              to={
                userData?.email === "test@gmail.com"
                  ? "/denied"
                  : "/user/editprofile"
              }
              className="btn-pink"
            >
              <button>Edit Profile</button>
            </Link>
          </div>

          {userData?.subscription?.status === "active" && (
            <button
              onClick={handleCourseCancelSubscription}
              className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center"
            >
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
