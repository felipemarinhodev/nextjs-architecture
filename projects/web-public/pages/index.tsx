import React from "react";
import { sum } from "@felipemarinhodev/utils/math/sum";
import { Text } from "@felipemarinhodev/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        Importando modulo local: @felipemarinhodev/utils/math/sum sum(2,2):{" "}
        {sum(2, 2)}
      </Text>
    </main>
  );
}
