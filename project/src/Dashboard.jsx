import { useState, useEffect } from "react";
import {
  getUserData,
  getPullRequests,
  getIssues,
  getPullRequests1,
  getIssues1,
  getPullRequests2,
  getIssues2,
  getPullRequests3,
  getIssues3,
  getPullRequests4,
  getIssues4,
  getPullRequests5,
  getIssues5,
  getPullRequests6,
  getIssues6,
} from "./callback/callback";
import UserDashboard from "./UserInformation";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  //sayan
  const [pullRequests, setPullRequests] = useState([]);
  const [issues, setIssues] = useState([]);
  //bidisha
  const [pullRequests1, setPullRequests1] = useState([]);
  const [issues1, setIssues1] = useState([]);
  //ankit
  const [pullRequests2, setPullRequests2] = useState([]);
  const [issues2, setIssues2] = useState([]);
  //debangan
  const [pullRequests3, setPullRequests3] = useState([]);
  const [issues3, setIssues3] = useState([]);
  //sayandip
  const [pullRequests4, setPullRequests4] = useState([]);
  const [issues4, setIssues4] = useState([]);
  //sahil
  const [pullRequests5, setPullRequests5] = useState([]);
  const [issues5, setIssues5] = useState([]);
  //muskaan
  const [pullRequests6, setPullRequests6] = useState([]);
  const [issues6, setIssues6] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    navigate("/");
    //sayan
    setPullRequests([]);
    setIssues([]);
    //bidisha
    setPullRequests1([]);
    setIssues1([]);
    //ankit
    setPullRequests2([]);
    setIssues2([]);
    //debangan
    setPullRequests3([]);
    setIssues3([]);
    //sayandip
    setPullRequests4([]);
    setIssues4([]);
    //sahil
    setPullRequests5([]);
    setIssues5([]);
    //Muskaan
    setPullRequests6([]);
    setIssues6([]);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token !== null && user === null) {
      async function fetchUserData() {
        const data = await getUserData(token);
        setUser(data);

        // Fetch pull requests after user data is retrieved
        const prData = await getPullRequests(token);
        setPullRequests(prData);
        const issueData = await getIssues(token);
        setIssues(issueData);
        //bidisha
        const prData1 = await getPullRequests1(token);
        setPullRequests1(prData1);
        const issueData1 = await getIssues1(token);
        setIssues1(issueData1);
        //ankit
        const prData2 = await getPullRequests2(token);
        setPullRequests2(prData2);
        const issueData2 = await getIssues2(token);
        setIssues2(issueData2);
        //debangan
        const prData3 = await getPullRequests3(token);
        setPullRequests3(prData3);
        const issueData3 = await getIssues3(token);
        setIssues3(issueData3);
        //sayandip
        const prData4 = await getPullRequests4(token);
        setPullRequests4(prData4);
        const issueData4 = await getIssues4(token);
        setIssues4(issueData4);
        //sahil
        const prData5 = await getPullRequests5(token);
        setPullRequests5(prData5);
        const issueData5 = await getIssues5(token);
        setIssues5(issueData5);
        //Muskaan
        const prData6 = await getPullRequests6(token);
        setPullRequests6(prData6);
        const issueData6 = await getIssues6(token);
        setIssues6(issueData6);
      }

      fetchUserData();
    }
  }, [user]);

  return (
    <>
      {user !== null ? (
        //<button onClick={handleLogin}>Log in With Github</button> //add landing page here
        <UserDashboard
          userData={user}
          pullRequests={pullRequests}
          issues={issues}
          pullRequests1={pullRequests1}
          issues1={issues1}
          pullRequests2={pullRequests2}
          issues2={issues2}
          pullRequests3={pullRequests3}
          issues3={issues3}
          pullRequests4={pullRequests4}
          issues4={issues4}
          pullRequests5={pullRequests5}
          issues5={issues5}
          pullRequests6={pullRequests6}
          issues6={issues6}
          handleLogout={handleLogout}
        />
      ) : null}
    </>
  );
}

export default Dashboard;
