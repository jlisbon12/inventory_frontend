import React from "react";
import { FC, useState } from "react";
import { logout } from "../utils/functions";
import { useAuth } from "../utils/hooks";
import { Props } from "../utils/types";
import Layout from "./Layout";

const AuthRoute: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useAuth({
    errorCallBack: () => {
      logout();
    },
    successCallBack: () => {
      setLoading(false);
    },
  });

  if (loading) {
    return <i>loading...</i>;
  }

  return <Layout>{children}</Layout>;
};

export default AuthRoute;
