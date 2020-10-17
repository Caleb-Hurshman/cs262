import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        </View>
    );
};

// The header and headerText styles were used in the tutorial but aren't implemented in the example pic for Lab05
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        bottom: 8,  // using absolute positioning makes the icon move up and down in unpredictable ways, finetuned for appearance on iOS
        left: 16,
    }
});

