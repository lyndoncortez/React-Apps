import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
