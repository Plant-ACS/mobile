import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "@components/Header";
import { textsStyle } from "@styles/texts";
import { colors } from "@styles/colors";
import { viewsStyle } from "@styles/views";
import ListView from "@components/ListView";
import Card from "@components/Card";
import { IACS } from "../types";
import FloatButton from "@components/FloatButton";

export default function Home() {
  const [hours, setHours] = useState<number>(0);
  const [acs, setAcs] = useState<Array<IACS>>();

  useEffect(() => {
    setAcs([
      { id: 1, name: "tio zé", type: "greenhouse", isConnected: false },
      { id: 1, name: "tio zé", type: "greenhouse", isConnected: true },
      { id: 1, name: "tio zé", type: "vegetable-garden", isConnected: true },
    ]);
    setHours(new Date().getHours());
  }, [new Date().getHours() != hours]);

  return (
    <>
      <Header style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View>
          <Text style={textsStyle.title_2}>
            {hours >= 18 ? "Boa noite" : hours >= 12 ? "Boa tarde" : "Bom dia"},
          </Text>
          <Text style={textsStyle.subtitle}>{"Sr. Usuário"}</Text>
        </View>
        <MaterialIcons name="settings" size={30} color={colors["black-900"]} />
      </Header>

      <ListView style={[viewsStyle.content, { marginTop: 5, paddingTop: 20 }]}>
        {acs?.flatMap((obj, key) => (
          <Card
            key={key}
            style={[
              {
                padding: 10,
                justifyContent: "space-between",
                marginBottom: 20,
              },
              !obj.isConnected && { backgroundColor: colors["yellow-300"] },
            ]}
          >
            <MaterialIcons
              name={
                !obj.isConnected
                  ? "signal-wifi-off"
                  : obj.type === "greenhouse"
                  ? "house-siding"
                  : "local-florist"
              }
              size={32}
              color={
                obj.isConnected ? colors["gray-700"] : colors["yellow-900"]
              }
            />
            <Text style={[textsStyle.subtitle_2, textsStyle.bold]}>
              {obj.name}
            </Text>
            <View
              style={{
                backgroundColor: obj.isConnected
                  ? colors["gray-500"]
                  : colors["yellow-500"],
                paddingVertical: 2,
                paddingHorizontal: 4,
                borderRadius: 5,
              }}
            >
              <Text>CPT</Text>
            </View>
          </Card>
        ))}
      </ListView>

      <FloatButton icon="add" />
    </>
  );
}
