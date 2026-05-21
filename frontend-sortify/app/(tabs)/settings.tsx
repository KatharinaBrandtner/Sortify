import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { globalStyles } from "../../styles/globalStyles";
import { layout } from "../../styles/layout";
import Header from "../../components/Header";
import ProfileCard from "../../components/Settings/ProfileCard";
import SettingsSection from "../../components/Settings/SettingsSection";
import SettingsRow from "../../components/Settings/SettingsRow";

export default function SettingsScreen() {
  const [suggestionsEnabled, setSuggestionsEnabled] = useState(true);

  return (
    <View style={[globalStyles.screenContainer, styles.container]}>
      <Header title="Profil" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ProfileCard />

        <SettingsSection title="Konfiguration">
          <SettingsRow
            icon="pricetag-outline"
            title="Kategorien verwalten"
            onPress={() => console.log("Kategorien verwalten")}
          />

          <SettingsRow
            icon="color-palette-outline"
            title="Farben anpassen"
            onPress={() => console.log("Farben anpassen")}
          />

          <SettingsRow
            icon="bulb-outline"
            title="Vorschläge"
            subtitle="Intelligente Kategorie­vorschläge"
            type="switch"
            value={suggestionsEnabled}
            onValueChange={setSuggestionsEnabled}
          />
        </SettingsSection>

        <SettingsSection title="Mehr">
          <SettingsRow
            icon="chatbubble-ellipses-outline"
            title="Feedback geben"
            onPress={() => console.log("Feedback geben")}
          />

          <SettingsRow
            icon="help-circle-outline"
            title="Hilfe & FAQ"
            onPress={() => console.log("Hilfe & FAQ")}
          />
          <SettingsRow
            imageSource={require("../../assets/logo_puzzle.png")}
            title="Über Sortify"
            onPress={() => console.log("Über Sortify")}
          />
        </SettingsSection>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  scrollContent: {
    paddingBottom: layout.tabScreenPaddingTop + layout.screenPaddingBottom,
  },
});