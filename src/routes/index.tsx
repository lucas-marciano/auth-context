import React from "react";
import { useAuth } from "contexts/auth";

import SignRoutes from "./sign";
import OtherRoutes from "./others";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
