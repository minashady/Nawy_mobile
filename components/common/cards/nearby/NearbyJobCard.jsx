import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
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
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            images[job.image.replace("/assets/images/", "").replace(".jpg", "")]
          }
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.name}
        </Text>

        <Text style={styles.jobType}>{job?.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
