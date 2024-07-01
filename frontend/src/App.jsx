import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddProject from "./components/AddProject";
import ProjectListing from "./components/ProjectListing";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project-listing" element={<ProjectListing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
