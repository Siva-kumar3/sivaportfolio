"use client";
import React, { useEffect } from "react";

const FormSelect = () => {
  useEffect(() => {
    import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
      new NiceSelect(document.getElementById("conService"));
      //   NiceSelect.bind(document.getElementById("conService"));
    });
  }, []);
  return (
    <select name="subject"  id="conService" className="tj-nice-select">
      <option defaultValue={"Choose Service"} disabled>
        Choose Service
      </option>
      <option defaultValue="Sitecore">Sitecore</option>
      <option defaultValue="web">Web Design</option>
      <option defaultValue="React">React</option>
      <option defaultValue="next js">netx js</option>
    </select>
  );
};

export default FormSelect;
