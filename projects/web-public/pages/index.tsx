import React from "react";
import { sum } from "@felipemarinhodev/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        Importando modulo local: @felipemarinhodev/utils/math/sum sum(2,2):{" "}
        {sum(2, 2)}
      </p>
    </main>
  );
}
