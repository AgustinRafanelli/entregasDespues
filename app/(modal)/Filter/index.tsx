import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./mixins";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Category {
  name: string;
  count: number;
  cheked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContaier}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text style={styles.itemText}>Ordenar</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <Text style={styles.itemText}>Puntuacion de higiene</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <Text style={styles.itemText}>Ofertas</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <Text style={styles.itemText}>Dietetica</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categorias</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWeidth = useSharedValue(0);
  const scaleWeidth = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.cheked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWeidth.value = withTiming(newSelected ? 150 : 0);
      scaleWeidth.value = withTiming(newSelected ? 1 : 0);
    }
    setSelected(selectedItems);
  }, [items]);

  const handleClearAll = () => {
    const updateitems = items.map((item) => {
      item.cheked = false;
      return item;
    });
    setItems(updateitems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      marginRight: flexWeidth.value > 0 ? 10 : 0,
      width: flexWeidth.value,
      opacity: flexWeidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleWeidth.value }],
    };
  });
  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        fillColor={Colors.primary}
        unfillColor="#fff"
        disableBuiltInState
        iconStyle={styles.checkbox}
        innerIconStyle={styles.checkbox}
        onPress={() => {
          const isChecked = items[index].cheked;

          const updateitems = items.map((item) => {
            if (item.name === items[index].name) {
              item.cheked = !isChecked;
            }
            return item;
          });

          setItems(updateitems);
        }}
        isChecked={items[index].cheked}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListHeaderComponent={ItemBox}
      />
      <View style={{ height: 80 }} />
      <View style={styles.footer}>
        <Animated.View style={styles.btnContainer}>
          <Animated.View style={animatedStyles}>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={handleClearAll}
            >
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>
                Borrar filtros
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            style={styles.fillButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.fillButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Filter;
