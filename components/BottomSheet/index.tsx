import { View, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import styles from "./mixins";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoint = useMemo(() => ["50%"], []);
  const { dismiss } = useBottomSheetModal();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={styles.modal}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoint}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Envios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>Retiros</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.subheader}>Tu ubicacion</Text>
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <View style={styles.options}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={Colors.medium}
                />
                <Text style={styles.optionsText}>Ubicacion actual</Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.primary}
                />
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <View>
          <Text style={styles.subheader}>Tiempo de entrega</Text>
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <View style={styles.options}>
                <Ionicons
                  name="stopwatch-outline"
                  size={20}
                  color={Colors.medium}
                />
                <Text style={styles.optionsText}>Inmediata</Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.primary}
                />
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
