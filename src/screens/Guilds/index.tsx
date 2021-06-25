//React
import React, { useContext } from "react";
import { StatusBar, FlatList, View } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Components
import Guild from "../../components/Guild";
import ListDivider from "../../components/ListDivider";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container } from "./styles";

export default function Guilds() {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <FlatList
        style={{ width: "100%" }}
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Guild data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
