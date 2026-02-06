"use client";

import { useState } from "react";

export default function Home() {
  const [orgName, setOrgName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [duration, setDuration] = useState("");
  const [summary, setSummary] = useState("");
  const [output, setOutput] = useState("");

  const generateReport = () => {
    if (!orgName || !projectName || !duration || !summary) {
      alert("कृपया सभी फील्ड भरें (Please fill all fields).");
      return;
    }

    const report = `
CSO REPORT
---
