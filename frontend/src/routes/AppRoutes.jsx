import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoginPage
from "../pages/LoginPage";

import DashboardPage
from "../pages/DashboardPage";

import UnauthorizedPage
from "../pages/UnauthorizedPage";

import AdminPage
from "../pages/AdminPage";

import AgentPage
from "../pages/AgentPage";

import CustomerPage
from "../pages/CustomerPage";

import ProtectedRoute
from "./ProtectedRoute";

import RoleRoute
from "./RoleRoute";


export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<LoginPage />}
        />


        {/* DASHBOARD */}
        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <DashboardPage />

            </ProtectedRoute>
          }
        />


        {/* ADMIN ROUTE */}
        <Route

          path="/admin"

          element={

            <RoleRoute
              allowedRoles={["admin"]}
            >

              <AdminPage />

            </RoleRoute>
          }
        />


        {/* AGENT ROUTE */}
        <Route

          path="/agent"

          element={

            <RoleRoute
              allowedRoles={["agent"]}
            >

              <AgentPage />

            </RoleRoute>
          }
        />


        {/* CUSTOMER ROUTE */}
        <Route

          path="/customer"

          element={

            <RoleRoute
              allowedRoles={["customer"]}
            >

              <CustomerPage />

            </RoleRoute>
          }
        />


        {/* UNAUTHORIZED */}
        <Route

          path="/unauthorized"

          element={
            <UnauthorizedPage />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}