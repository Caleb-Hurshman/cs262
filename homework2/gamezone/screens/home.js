import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://cs262-monopoly-service.herokuapp.com/players/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('PlayerDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.id }, {item.email}, {item.name}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
