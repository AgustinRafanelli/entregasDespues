import React, { useLayoutEffect } from "react";
import { View, Text, Image, SectionList, ListRenderItem } from "react-native";
import ParallaxScrollView from "@/components/ParalaxScrollView/ParallaxScrollView";
import styles from "./mixins";
import { restaurant } from "@/assets/data/restaurant";
import { Link, useNavigation } from "expo-router";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Separator = () => {
  return <View style={{ height: 1, backgroundColor: Colors.grey }} />;
};

const RestaurantDetail = () => {
  const navigation = useNavigation();

  const foodData = restaurant.food.map((item, i) => ({
    title: item.category,
    data: item.meals,
    i,
  }));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundedButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.roundedButton}>
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const renderItem: ListRenderItem<any> = ({ item, i }) => (
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.itemDescription}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={[styles.itemText, { flex: 1 }]}>{item.info}</Text>
          <Text style={styles.itemText}>$ {item.price}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image source={item.img} style={styles.itemImg} />
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <ParallaxScrollView
      parallaxHeaderHeight={250}
      stickyHeaderHeight={80}
      backgroundColor={"#fff"}
      contentBackgroundColor={Colors.grey}
      style={{ flex: 1 }}
      renderBackground={() => <Image source={restaurant.img} style={{height: 300, width: '100%'}}/>}
      renderStickyHeader={() => (
        <View
          key="sticky-header"
          style={{
            paddingHorizontal: 70,
            paddingBottom: 10,
            height: 80,
            justifyContent: "flex-end",
            borderBlockColor: Colors.grey,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{fontSize: 20, fontWeight: "bold"}}>{restaurant.name}</Text>
        </View>
      )}
    >
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantDescription}>
          {restaurant.delivery} ·{" "}
          {restaurant.tags.map(
            (tag, i) => `${tag}${i < restaurant.tags.length - 1 ? " · " : ""}`
          )}
        </Text>
        <Text style={styles.restaurantDescription}>{restaurant.about}</Text>

        <Text style={[styles.restaurantDescription, { flex: 1 }]}>
          {restaurant.distance}
        </Text>

        <TouchableOpacity style={styles.touchableDescription}>
          <Ionicons
            name="information-circle-outline"
            color={Colors.medium}
            size={20}
          />
          <Text style={[styles.restaurantDescription, { flex: 1 }]}>Info</Text>
          <Ionicons name="chevron-forward" color={Colors.primary} size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableDescription}>
          <Ionicons name="star" color={Colors.green} size={20} />
          <Text style={styles.rating}>
            {restaurant.rating} {restaurant.ratings}
          </Text>
          <Ionicons name="chevron-forward" color={Colors.primary} size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableDescription}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
          <Text style={[styles.restaurantDescription, { flex: 1 }]}>
            Deliver in {restaurant.delivery}
          </Text>
          <Ionicons name="chevron-forward" color={Colors.primary} size={20} />
        </TouchableOpacity>

        <SectionList
          contentContainerStyle={{ paddingBottom: 24 }}
          keyExtractor={(item, i) => `${item.id + i}`}
          scrollEnabled={false}
          sections={foodData}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator />}
          SectionSeparatorComponent={() => <Separator />}
          renderSectionHeader={({ section: { title, i } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        ></SectionList>
      </View>
    </ParallaxScrollView>
  );
};

export default RestaurantDetail;
