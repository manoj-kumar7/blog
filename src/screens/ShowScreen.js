import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

    const {state} = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </>
        
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    console.log(navigation.getParam('id'));
    return {
        headerRight: () => (
            <TouchableOpacity 
                onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    
});

export default ShowScreen;