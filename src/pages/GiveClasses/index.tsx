import React from 'react'
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './style';




function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateGoBack(){
        goBack();
    };

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content} >
                <Text style={styles.title} >Quer ser um proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma Web.
                </Text> 
            </ImageBackground>

            <RectButton onPress={handleNavigateGoBack} style={styles.okButton} > 
                <Text style={styles.okButtonText}>Tudo Bem!</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;