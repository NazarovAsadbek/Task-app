import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import {ScrollView} from "react-native-gesture-handler";

const globalStyles = require('./assets/style');

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.wrapper}>
                <View style={styles.head}>
                    <MaterialCommunityIcons name="text" size={30} style={styles.head.icon}/>
                    <View style={styles.head.nav}>
                        <MaterialCommunityIcons name="bell-outline" size={30} style={styles.head.icon}/>
                        <AntDesign name="user" size={30} style={styles.head.icon}/>
                    </View>
                </View>
                <View style={styles.head.title}>
                    <Text style={styles.head.title.text}>{"Hello,\nBenjamin"}</Text>
                    <View style={styles.head.body}>
                        <MaterialCommunityIcons name="magnify" size={30} style={styles.head.body.icon}/>
                        <View style={styles.head.body.search}>
                            <MaterialCommunityIcons name="microphone" size={30} style={styles.head.body.icon}/>
                            <MaterialCommunityIcons name="tune" size={30} style={styles.head.body.icon}/>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text>Tasks</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.themeColor,
    },
    statusBar: {
        backgroundColor: globalStyles.colors.themeColor,
    },
    wrapper: {
        backgroundColor: globalStyles.colors.themeColor
    },
    head: {
        paddingVertical: 40,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        icon: {
            color: globalStyles.colors.white
        },
        nav: {
            flexDirection: "row"
        },
        title: {
            padding: 16,
            text: {
                color: globalStyles.colors.white,
                fontSize: 30
            }
        },
        body: {
            paddingHorizontal: 16,
            paddingVertical: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: globalStyles.colors.tint,
            borderRadius: 20,
            marginVertical: 20,
            alignItems: "center",
            icon: {
                color: globalStyles.colors.white
            },
            search: {
                flexDirection: "row"
            }
        }
    },
});