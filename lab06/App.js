import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=jrr%20tolkein/AIzaSyBPM0GWhavxZzbsKEVEXRB4EqUBdZ0y-po')
        .then((response) => response.json())
        .then((json) => setData(json.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, []);

  return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                      <Text>{item.volumeInfo.title}, {item.volumeInfo.authors}, {item.volumeInfo.publishedDate} </Text>
                )}
            />
        )}
      </View>
  );
};
