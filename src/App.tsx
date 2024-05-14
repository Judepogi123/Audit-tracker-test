import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

import Home from "./home/Home";
import Login from "./auth/login/Login";
import AuditTrackerInfo from "./routes/info/audit/AuditTrackerInfo";
import IndicatorInfo from "./routes/info/audit/IndicatorInfo";
import AddAudit from "./routes/new/new-audit/AddAudit";
import Profile from "./routes/info/profile/Profile";
import DataProvider from "./provider/DataProvider";

import NetworkStatus from "./provider/NetworkStatus";

import Dashboard from "./pages/dashboard/Dashboard";
import Manage from "./pages/manage-users/Manage";
import Municipalities from "./pages/municipalities/Municipalities";
import Compliance from "./pages/compliance/Compliance";
import About from "./pages/about/About";
import UserManual from "./pages/user-manual/UserManual";
import ComplianceList from "./pages/compliance/ComplianceList";
import UpdateField from "./pages/manage-users/_sglg/update/update/UpdateField";


//nested
import ComplyInfo from "./routes/info/audit/_comply/ComplyInfo";
import AuditField from "./pages/manage-users/_sglg/update/AuditField";
import NewField from "./pages/manage-users/_sglg/update/new/NewField";
import NewUser from "./routes/new/users/NewUser";
import Content from "./pages/compliance/_content/Content";
import ComplianceData from "./pages/compliance/_content/ComplianceData";
import NewAudit from "./routes/new/NewAudit";
import AuditInfo from "./pages/manage-users/_sglg/AuditInfo";
import NewAreaField from "./pages/manage-users/_sglg/NewAreaField";
import NewLocale from "./pages/municipalities/NewLocale";
import AllCompliance from "./pages/compliance/AllCompliance";

import ComplianceDataProvider from "./provider/ComlianceDataProvider";

import { Layout } from "antd";
import "./App.css";

function App() {
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Routes>
        <Route path="/auth/login" element={<Login />} />

        <Route element={<AuthOutlet fallbackPath="/auth/login" />}>
          <Route path="/" element={<DataProvider children={<Home />} />}>
            <Route
              path="/manage/audit-info/:auditID/area/:fieldID"
              element={<AuditTrackerInfo />}
            />
            <Route
              path="/audit-info/:fieldID/indicator-info/:firstIndicator"
              element={<IndicatorInfo />}
            />
            <Route
              path="/audit-info/:fieldID/indicator-info/:firstIndicator/:secondIndicator"
              element={<IndicatorInfo />}
            />
            <Route
              path="/audit-info/:fieldID/indicator-info/:firstIndicator/:secondIndicator/:thirdIndicator"
              element={<IndicatorInfo />}
            />
            <Route path="new-audit" element={<AddAudit />} />
            <Route path="profile" element={<Profile />} />
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="manage" element={<Manage />} />

            <Route path="/manage/update-audit" element={<AuditField />} />
            <Route path="/manage/update-field/:fieldID" element={<UpdateField />} />
            <Route
              path="/manage/update-audit/new-field"
              element={<NewField />}
            />
            <Route path="/manage/new-user/:newUserID" element={<NewUser />} />
            <Route path="/manage/new-audit/:newAuditID" element={<NewAudit />} />
            <Route path="/manage/audit/:auditID" element={<AuditInfo />} />
            <Route path="/manage/audit/:auditID/new-area" element={<NewAreaField />} />
            <Route path="/manage/audit/:auditID/new-area/:areaKey" element={<NewField />} />

            <Route path="municipalities" element={<Municipalities />} />
            <Route path="municipalities/new-locale" element={<NewLocale />} />

            <Route path="compliance" element={<ComplianceList />}>
              <Route path="compliance/info" element={<ComplyInfo />} />
              <Route path="/compliance/:municipalID" element={<Content />} />
            </Route>
            <Route
              path="/compliance/:zipCode/:complianceID"
              element={<ComplianceData />}
            />
            <Route path="about" element={<About />} />
            <Route path="user-manual" element={<UserManual />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;