import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Keyboard, Button } from "react-native";
import OTPInput from "./OTP/OTPInput";
import { ButtonContainer, ButtonText } from "./OTP/styles";

export default function OtpContainer(props) {
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <OTPInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady} />
            {/* <ButtonContainer disabled={!isPinReady}
                style={{ backgroundColor: !isPinReady ? "white" : "#000000",
                }}>
                <ButtonText style={{ color: !isPinReady ? "black" : "#EEEEEE", fontWeight: '700' }}>Submit >>>
                </ButtonText>
            </ButtonContainer> */}
            <StatusBar style="auto" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '30%',
        backgroundColor: "#243D88",
        alignItems: "center",
        justifyContent: "center",
        // margin: '0'
    },
});
