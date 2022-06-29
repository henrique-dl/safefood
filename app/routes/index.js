import React from "react";
import { useAuth } from "../contexts/auth";

import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import Favorite from "../contexts/favorite";

const Routes = () => {
  const { signed, loading } = useAuth();

  return signed ? (
    <Favorite>
      <AppRoutes />
    </Favorite>
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
