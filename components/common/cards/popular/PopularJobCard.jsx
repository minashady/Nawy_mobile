import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
const images = {
  apartment1: require("../../../../assets/images/apartment1.jpg"),
  apartment2: require("../../../../assets/images/apartment3.jpg"),
  apartment3: require("../../../../assets/images/apartment2.jpg"),
  apartment4: require("../../../../assets/images/apartment5.jpg"),
  apartment5: require("../../../../assets/images/apartment4.jpg"),
  apartment6: require("../../../../assets/images/apartment3.jpg"),
  apartment7: require("../../../../assets/images/apartment2.jpg"),
  apartment8: require("../../../../assets/images/apartment1.jpg"),
};
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={
            images[item.image.replace("/assets/images/", "").replace(".jpg", "")]
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.price.$numberDecimal.toString()}
        </Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
