import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {

    const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        // This will be executed every time when Index screen is loaded
        // Make sure you are clearing the listeners if you are removing the component from ur app
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        // This is invoked when this Index Screen is completely not shown in the app
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon}></Feather>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}>

            </FlatList>
        </>
        
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 20
    }
});

export default IndexScreen;