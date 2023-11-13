import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "../../../theme/themeContext";
import CustomButton from "../../components/CustomButton";

const Login: React.FC = ({ navigation }: any) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handlerInputChange = (name: string, value: string) => {
    setLogin({ ...login, [name]: value });
  };
  const loginHandler = () => {
    console.log("Login button clicked");
    // const { email, password } = login;
    // if (!(password && email)) {
    //   return Alert.alert("Incomplete password or email");
    // } else {
    //   console.log("Email: ", email);
    //   console.log("Password: ", password);
    // }
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearErrors());
  //   } else if (isAuthenticate) {
  //     navigate(`/`);
  //   }
  // }, [dispatch, error, toast, isAuthenticate]);

  const { theme, changeTheme } = useTheme();
  const [isPasswordShown, setPasswordShown] = useState(false);
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-12"
    >
      {/* back icon */}
      <View className="flex flex-row items-center mt-8 mx-4">
        <Ionicons
          name="chevron-back"
          style={{ fontSize: 35, color: theme.textColor }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{ color: theme.textColor }}
          className="ml-4 text-xl font-semibold "
        >
          Login
        </Text>
      </View>
      <View>
        <Text
          className="text-center text-2xl font-bold"
          style={{ color: theme.textColor }}
        >
          Login with your account
        </Text>
      </View>

      {/* inputs */}
      <View className="items-center mx-4">
        <View
          style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
          className="items-center flex-row justify-center focus:border-gray-400
        h-[65px] rounded-lg mb-6"
        >
          <AntDesign
            name="user"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <TextInput
            style={{
              backgroundColor: theme.secondary,
              marginVertical: 10,
              color: theme.textColor,
            }}
            className="flex-1 h-full px-4 focus:outline-none bg-gray-200"
            placeholder="Your name"
            placeholderTextColor={theme.textColor}
            value={login.email}
            onChangeText={(text) => handlerInputChange("email", text)}
          />
        </View>
        <View
          style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
          className="items-center flex-row justify-center focus:border-gray-400
        h-[65px] rounded-lg"
        >
          <Feather
            name="lock"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <TextInput
            style={{
              backgroundColor: theme.secondary,
              marginVertical: 10,
              color: theme.textColor,
            }}
            className="flex-1 h-full px-4 focus:outline-none bg-gray-200"
            placeholderTextColor={theme.textColor}
            placeholder="Password"
            secureTextEntry={true}
            value={login.password}
            onChangeText={(text) => handlerInputChange("password", text)}
          />
        </View>
      </View>

      <View className="flex mx-4">
        <CustomButton
          label={"Login"}
          onPress={loginHandler}
          // onPress={() => navigation.navigate("signup")}
        />
      </View>
    </View>
  );
};

export default Login;
