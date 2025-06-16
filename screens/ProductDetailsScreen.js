import {StatusBar, statusbar} from 'expo-status-bar';
import {Button, Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

const ProductDetailsScreen = (route, navigation) => {

    const { product } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{uri: product.image}} style={styles.image}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                 <Button
                    title="Add to cart"
                    onPress={() => navigation.navigation.navigate('Cart', { product})}
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
        image: {
        width: width * 0.5,
        height: height * 0.3,
        borderRadius: 10,
        marginBottom: 10,
    },
       text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    price: {
        fontSize: 24,
        color: '#666',
        marginBottom: 20,
    },
});
export default ProductDetailsScreen;