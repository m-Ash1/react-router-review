import React from "react";
import { useParams } from "react-router";

export const UserEdit = () => {
  const { id } = useParams();
  return <div>{`User ${id}`}</div>;
};
