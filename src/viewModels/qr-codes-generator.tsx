"use client";
import { useState } from "react";
export default function QR_Codes_Generator_ViewModel() {
  const [value, setValue] = useState<string>("");
  return { value, setValue };
}
