import React from "react";
import Protected from "@/layout/Protected";
import TableProducts from "@/Components/TableProducts/TableProducts";

type Props = {};

export default function Alimentos({}: Props) {
  return (
    <Protected>
      <TableProducts />
    </Protected>
  );
}
