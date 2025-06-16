import {StatusBar, statusbar} from 'expo-status-bar';
import {Button, Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';


const {width, height} = Dimensions.get('window');
const products = [
    { id: '1', name: 'Product 1', price: 10.99, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Product 2', price: 12.99, image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Product 3', price: 15.99, image: 'https://via.placeholder.com/150' },
];
const HomeScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={ styles.itemContainer }>
                        <Image source={{uri: item.image}} style={styles.image}/>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>${item.price.toFixed(2)}</Text>

                        <Button
                            title="View Details"
                            onPress={() => navigation.navigation.navigate('ProductDetails', { product: item})}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: width * 0.5,
        height: height * 0.3,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default HomeScreen;