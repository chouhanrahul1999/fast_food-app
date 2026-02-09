import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import { Link, router } from "expo-router";

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.password)
      return Alert.alert("Error", "Plese enter valid email addess & password");

    setIsSubmitting(true);

    try {
      Alert.alert("Success", "User signed up successfully");

      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <InputBox
        placeholder="Enter Your Full Name"
        label="Full Name"
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        value={form.name}
      />

      <InputBox
        placeholder="Enter Your email"
        label="Email"
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        value={form.email}
        keyboardType="email-address"
      />

      <InputBox
        placeholder="Enter Your Password"
        label="Password"
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        value={form.password}
        keyboardType="email-address"
      />
      <Button title="Sign In" onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don't have an account?{" "}
        </Text>
        <Link href={"/sign-in"} className="text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default Signup;
