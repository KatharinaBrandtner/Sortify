import { useState } from "react";
import {Modal,Pressable, StyleSheet,Text,TextInput,View,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";
import PrimaryButton from "../PrimaryButton";

type Props = {visible: boolean; onClose: () => void};

export default function AddCategoryModal({ visible, onClose }: Props) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (!categoryName.trim()) {
      Alert.alert("Kategorie fehlt", "Bitte gib einen Kategorienamen ein.");
      return;
    }

    Alert.alert(
      "Kategorie hinzugefügt",
      `Die Kategorie «${categoryName}» wurde hinzugefügt.`,
      [
        {
          text: "Weitere Kategorie hinzufügen",
          onPress: () => setCategoryName(""),
        },
        {
          text: "Zurück zu Kategorien",
          onPress: () => {
            setCategoryName("");
            onClose();
          },
        },
      ]
    );

    console.log("Dummy Kategorie:", categoryName);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Neue Kategorie</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <Text style={styles.subtitle}>
            Gib einen Namen für deine neue Kategorie ein.
          </Text>

          <TextInput
            value={categoryName}
            onChangeText={setCategoryName}
            placeholder="z. B. Reisen"
            placeholderTextColor={colors.placeholder}
            style={styles.input}
          />
          <View style={styles.primaryButtonWrapper}>
            <PrimaryButton title="Kategorie hinzufügen" onPress={handleSubmit} />
            </View>

          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Abbrechen</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(26, 15, 17, 0.35)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: layout.screenPaddingX,
  },
  modal: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: layout.primaryButtonRadius,
    padding: 22,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.text,
    fontSize: layout.headerTitleSize,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.placeholder,
    fontSize: layout.bodyTextSize - 1,
    marginTop: 10,
    marginBottom: 18,
  },
  input: {
    height: 52,
    borderRadius: layout.cardRadius,
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.light,
    paddingHorizontal: 14,
    color: colors.text,
    fontSize: layout.bodyTextSize,
  },
  primaryButtonWrapper: {
    marginTop: 18,
  },
  cancelButton: {
    alignItems: "center",
    marginTop: 14,
  },
  cancelText: {
    color: colors.purple,
    fontSize: layout.bodyTextSize,
    fontWeight: "700",
  },
});