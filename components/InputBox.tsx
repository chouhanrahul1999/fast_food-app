import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CustomInputProps } from "@/type";
import cn from 'clsx'
import { Eye, EyeOff } from "lucide-react-native";

const InputBox = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full">
      <Text className="label">{label}</Text>

      <View className="relative">
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#888"
          className={cn('input', isFocused ? 'border-primary' : 'border-gray-300', secureTextEntry && 'pr-12')}
        />
        
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={20} color="#888" />
            ) : (
              <Eye size={20} color="#888" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputBox;
