"use client";
import { useState } from "react";
export const QR_Codes_Generator_ViewModel = () => {
  const [value, setValue] = useState<string>("");
  return { value, setValue };
};
