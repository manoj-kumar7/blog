import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <>
            <Text style={styles.label}>Enter title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>
            <Text style={styles.label}>Enter content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}></TextInput>
            <Button 
                title="Save Blog post" 
                onPress={() => onSubmit(title, content)} />
        </>
        
    );
};

BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;