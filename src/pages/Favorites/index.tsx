import React, { useState, useEffect } from 'react'
import { View, Image, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';
import TeacherItems, { Teacher } from '../../components/TeacherItem';

import styles from './style'
import { useFocusEffect } from '@react-navigation/native';




function Favorites(){
    const [favorites, setFavorites] = useState([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response){

                const favoritesTeachers = JSON.parse(response)
                setFavorites(favoritesTeachers);
            };
        })
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
    )
    
    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher) =>{
                    return (
                        <TeacherItems 
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
                
            </ScrollView>
        </View>
    )
}

export default Favorites;