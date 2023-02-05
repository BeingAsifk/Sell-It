import React from "react";
import { View, Image, StyleSheet } from "react-native-web";

import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Varsity Jacket for Sale</AppText>
        <AppText style={styles.price}>₹4999-/</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logopic.png")}
            title="Asif Khan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
