import React, { useState } from "react";
import { View, Text, TextInput, Button, CheckBox, StyleSheet, Image, KeyboardAvoidingView } from "react-native";

const Login = (props) => {

    const [isChecked, setIsChecked] = useState(false)
    const [phoneNumber, setphoneNumber] = useState();

    const onChangePhone = (number) => { setphoneNumber(number) }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',width:'100%', }}>

            <Image source={require("../assets/Images/my-iocn.png")} style={{ width: '85%', height: 250 }} />

            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={'padding'} style={styles.containerAvoid}>

                <View style={{ backgroundColor: "#243D88", height: 357, width: '95%', alignItems: "center", borderTopLeftRadius: 30,marginRight:'-5px', }}>


                    <Text style={styles.Head1}>Let's Travel with us</Text>
                    <Text style={styles.Head2}>Verify your account using otp</Text>

                    <View style={styles.child}>
                        <Text style={styles.ftext}>+91</Text>
                        <TextInput style={styles.input} placeholder="Enter phone number" keyboardType='number' value={phoneNumber} onChangeText={onChangePhone} />
                    </View>

                    <View style={{ marginTop: 50, height: 50, marginLeft: 0, marginRight: 0, borderRadius: 2, width: '80%' }}>
                        <Button title="Proceed" color="#00000033" onPress={() => props.navigation.navigate("OTP")} />
                    </View>

                    <View style={styles.checkboxContainer}>
                        <Text style={styles.textcheck}>By Continuing,you agree to our Terms of Service & Privacy Policy</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>

        </View>
    )
}

const styles = StyleSheet.create({
    Head1: {
        fontSize: 23,
        fontWeight:'bold',
        color: "white",
        marginTop: 40,
        fontFamily: 'sans-serif'
    },
    Head2: {
        fontSize: 12,
        color: "white",
        fontFamily: 'sans-serif',
        lineHeight:'30px',
        fontWeight:600
    },child: {
        display:'flex',
        flexDirection: "row",
        border:'0.5px solid white',
        alignItems:"center",
        width: '85%',
        borderRadius: 10,
        marginTop: 30,
        color: "white",
    },
    ftext: {
        fontSize: 16,
        marginLeft: 8,
        color: "white",
        fontWeight:600
    },
    
    input: {
        height: 26,
        margin: 12,
        padding: 10,
        width: 200,
        marginLeft: 5,
        color: "white",
        flex: 1,
        color:'rgba(255, 255, 255, 0.4);',
        border:"none"
    },
    containerAvoid: {
        flex: 1,
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    textcheck: {
        fontSize: 9,
        marginLeft: 20,
        width:'80%',
        color:'rgba(255, 255, 255, 0.6)'
    }
});

export default Login;