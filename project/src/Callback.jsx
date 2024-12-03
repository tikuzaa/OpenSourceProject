import { getAccessToken } from "./callback/callback";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getAccessToken();
        if (token) {
          localStorage.setItem("access_token", token);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      } catch (error) {
        console.log("err: ", error);
      }
    }
    fetchToken();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#72ff6c] border-solid"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Callback;