import React from "react";

import { useSelector } from "react-redux";

export default function First() {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>first component</div>;
}
