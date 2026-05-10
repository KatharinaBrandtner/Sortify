import { View, ScrollView, StyleSheet } from "react-native";

import { globalStyles } from "../../styles/globalStyles";
import HomeHeader from "../../components/Home/HomeHeader";
import CategoryOverview from "../../components/Home/CategoryOverview";
import NextTasks from "../../components/Home/NextTask";
import FloatingAddButton from "../../components/Home/FloatingAddButton";

export default function HomeScreen() {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HomeHeader />
        <CategoryOverview />
        <NextTasks />
      </ScrollView>

      <FloatingAddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  scrollContent: {
    paddingBottom: 130,
  },
});