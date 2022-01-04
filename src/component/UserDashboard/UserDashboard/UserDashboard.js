import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import UserBloodRequest from "../UserBloodRequest/UserBloodRequest";
import UserDashboardHome from "../UserDashboardHome/UserDashboardHome";
import UserDonateBlood from "../UserDonateBlood/UserDonateBlood";
import UserDonationHistory from "../UserDonationHistory/UserDonationHistory";
import UserRequestHistory from "../UserRequestHistory/UserRequestHistory";
import "./UserDashboard.css";
const UserDashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="mx-3 mt-5">
      {/* User Dashboard Heding start */}
      <div className=" head-line">
        <p className="blood-heading">
          {" "}
          <i class="fab fa-gratipay love"></i>Blood Bank Management System
        </p>
        <button className="log-out-btn">
          Logout <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
      {/* User Dashboard Heding end */}
      <div className="row dashbord-fild ">
        <div className="col-lg-2 col-sm-12 dashbord-list">
          <div>
            <Link className="link-style" to={`${url}`}>
              <li className="list-item">
                <i class="fas fa-home list-icon"></i>Home
              </li>
            </Link>
            <Link className="link-style" to={`${url}/donateBlood`}>
              <li className="list-item">
                <i class="fas fa-hand-holding-medical"></i> Donate Blood
              </li>
            </Link>
            <Link className="link-style" to={`${url}/donationHistory`}>
              <li className="list-item">
                <i class="fas fa-history"></i> Donation History
              </li>
            </Link>

            <Link className="link-style" to={`${url}/bloodRequests`}>
              <li className="list-item">
                <i class="fas fa-sync-alt  list-icon"></i>Blood Requests
              </li>
            </Link>

            <Link className="link-style" to={`${url}/requestHistory`}>
              <li className="list-item">
                <i class="fas fa-history list-icon"></i>Request History
              </li>
            </Link>
          </div>
        </div>

        <div className="col-lg-10 col-sm-12 p-3">
          <Switch>
            <Route exact path={`${path}`}>
              <UserDashboardHome></UserDashboardHome>
            </Route>
            <Route exact path={`${path}/donateBlood`}>
              <UserDonateBlood></UserDonateBlood>
            </Route>
            <Route exact path={`${path}/donationHistory`}>
              <UserDonationHistory></UserDonationHistory>
            </Route>
            <Route exact path={`${path}/bloodRequests`}>
              <UserBloodRequest></UserBloodRequest>
            </Route>
            <Route exact path={`${path}/requestHistory`}>
              <UserRequestHistory></UserRequestHistory>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
