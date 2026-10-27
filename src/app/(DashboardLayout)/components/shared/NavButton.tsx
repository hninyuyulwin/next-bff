"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface NavButtonProps {
  label: string;
  href: string;
}
function NavButton({ label, href }: NavButtonProps) {
  return (
    <Button type="button" variant="contained" component={Link} href={href}>
      {label}
    </Button>
  );
}

export default NavButton;
