import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { images } from "@/constants";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import { text } from "express";

export default function _layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("screen").height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />

          <Image
            source={images.logo}
            className="self-center size-48 absolute -bottom-16 z-10"
          />
        </View>

        <InputBox
          placeholder="Enter Your email"
          label="Email"
          onChangeText={(text) => {}}
          value=""
          keyboardType="email-address"
        />
        <Button />
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
}
