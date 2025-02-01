import { Alert, Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../styles/global";

import Input from "../components/Input";
import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import CloseIcon from "../icons/CloseIcon";


const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({navigation, route}) => {

const [login, setLogin] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isPasswordVisible, setIsPasswordVisible] = useState(true);

// useEffect(() => {
//     console.log(route);
//     Alert.alert(route?.params?.userEmail)
// }, []);

useLayoutEffect(()=> {
    navigation.setOptions({ title: "Hello"})
})

const handleAddAvatar = (value) => {
    console.log("Add avatar");
}

const handleLoginChange = (value) => {
    setLogin(value);
}

const handleEmailChange = (value) => {
    setEmail(value);
};

const handlePasswordChange = (value) => {
    setPassword(value);
};

const showPassword = () => {
    setIsPasswordVisible(prev => !prev)
}

const onLogin = () => {
    // console.log("login")
    navigation.navigate('Login');
};

const onSignUp = () => {
    // console.log("sign up")
    // navigation.navigate('Signup', { userEmail: email })
};

const showButton = (
    <TouchableOpacity
        onPress={showPassword}
    >
        <Text s style={[styles.baseText, styles.passwordButtonText]}>{isPasswordVisible ? "Показати" : "Сховати" }</Text>
    </TouchableOpacity>
);

    return (
        <TouchableWithoutFeedback
        onPress = {() => Keyboard.dismiss()}>
            <>
            <Image 
            source = {require("../assets/images/PhotoBG.jpg")}
            resizeMode="cover"
            style={styles.image}
            />
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style = {styles.container}>
            
            <View
            style={styles.formContainer
            }>
                 <Avatar image={require("../assets/images/avatar.png")} icon={<CloseIcon />} />
            <View style={styles.wrapper}>
                <Text style={styles.title}>Реєстрація</Text>

                <View 
                style={[styles.innerContainer, styles.inputContainer]}>

                    <Input 
                    value = {login}
                    autofocus = {true}
                    placeholder="Логін"
                    onTextChange={handleLoginChange}
                    
                    />
                    <Input 
                    value = {email}
                    placeholder="Адреса електронної пошти"
                    onTextChange={handleEmailChange}
                    
                    />
                    <Input 
                    value = {password}
                    placeholder="Пароль"
                    rightButton={showButton}
                    outerStyles={styles.passwordButton}
                    onTextChange={handlePasswordChange}
                    secureTextEntry={isPasswordVisible}
                    />
                </View>
                <View style={[styles.innerContainer, styles.buttonContainer]}>
                    <Button onPress={onSignUp}>
                        <Text 
                        style={[styles.baseText, styles.loginButtonText]}
                        >
                        Зареєструватися
                        </Text>
                    </Button>

                <View style={styles.signUpContainer}>
                    <Text 
                    style={[styles.baseText, styles.passwordButtonText]}
                    >
                    Вже є аккаунт?
                        <TouchableWithoutFeedback onPress={onLogin}>
                            <Text> Увійти</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                </View>
                </View>
            </View>
            </View>
        </KeyboardAvoidingView>
        </>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;



const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    wrapper: {
        marginTop: 92,
    },
    innerContainer: {
        gap: 16,
    },
    inputContainer: {
        marginTop: 32,
    }, 
    buttonContainer: {
        marginTop: 42,
    },
    image: {
        position: "absolute",
        top: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
    },
    formContainer: {
        width: SCREEN_WIDTH,
        height: "70%",
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 16,
        // paddingTop: 92,
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        lineHeight: 36,
        textAlign: "center",
        color: colors.black_primary,
    },
    showButton: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
        color: colors.blue,
    },
    passwordButton: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    baseText: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
      },
    loginButtonText: {
        color: colors.white,
        textAlign: "center",
      },
    passwordButtonText: {
        color: colors.blue,
      },
    passwordButton: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    signUpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    signUpText: {
        textDecorationLine: "underline",
      }
})