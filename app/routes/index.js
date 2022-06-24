import React from "react";
import { useAuth } from "../contexts/auth";

import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  const { signed, loading } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
