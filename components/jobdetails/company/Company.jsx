import React from 'react'
import { View, Text , Image, DevSettings} from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants'
import { checkImageURL } from '../../../utils'
const images = {
  apartment1: require("../../../assets/images/apartment1.jpg"),
  apartment2: require("../../../assets/images/apartment3.jpg"),
  apartment3: require("../../../assets/images/apartment2.jpg"),
  apartment4: require("../../../assets/images/apartment5.jpg"),
  apartment5: require("../../../assets/images/apartment4.jpg"),
  apartment6: require("../../../assets/images/apartment3.jpg"),
  apartment7: require("../../../assets/images/apartment2.jpg"),
  apartment8: require("../../../assets/images/apartment1.jpg"),
};

const Company = ({companyLogo,jobTitle, companyName,location,details,publisher,compound}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={
            images[
              companyLogo.replace("/assets/images/", "").replace(".jpg", "")
            ]
          }
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>Developer: {publisher}</Text>
        {compound === "true"? <Text style={styles.locationName}>/ compound</Text>:null}
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.locationName}> {details}</Text>
      </View>
      {/* <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>Job Details: {details}</Text>
      </View> */}
    </View>
  );
}

export default Company