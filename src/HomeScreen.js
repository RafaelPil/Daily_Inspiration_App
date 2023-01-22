import {
  View,
  Text,
  Button,
  Share,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { quotes } from "./quotes";
import * as Sharing from "expo-sharing";

const HomeScreen = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const shareQuote = async () => {
    try {
      await Share.share({
        message: currentQuote,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <View
      style={{
        padding: 10,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50%",
        }}
      >
        <Image
          source={require("../assets/Concationation_Logo.png")}
          style={styles.cardImage}
        />
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{currentQuote}</Text>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.shareButton} onPress={randomQuote}>
          <Text style={styles.shareButtonText}>Next Quote</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={shareQuote}
          style={[styles.shareButton, { marginTop: 10 }]}
        >
          <Text style={styles.shareButtonText}>Share on Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    padding: 20,
  },
  authorText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  shareButton: {
    backgroundColor: "#4267B2",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  shareButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 30,
    borderRadius: 10,
    marginBottom: 100,
  },
});

export default HomeScreen;
