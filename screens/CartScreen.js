import {StatusBar, statusbar} from 'expo-status-bar';
import {Button, Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, use} from 'react';

const {width, height} = Dimensions.get('window');

const CartScreen = ({route}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const product = route.params?.product;
        if (product && !cart.some(item => item.id === product.id)) {
            setCart((prevCart) => [...prevCart, product]);
        }
    }, [route.params?.product]);

    const placeOrder = () => {
        alert('Order placed');
    }
    return (
        <View style={styles.container}>
               <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                                <View style={ styles.itemContainer }>
                                    <Image source={{uri: item.image}} style={styles.image}/>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.text}>${item.price.toFixed(2)}</Text>
                                </View>
                    )}
                    ListEmptyComponent={<Text style={styles.text}>Your cart is empty</Text>}
                />
                    <Button
                            title="Place order"
                            onPress={ placeOrder}
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

export default CartScreen;