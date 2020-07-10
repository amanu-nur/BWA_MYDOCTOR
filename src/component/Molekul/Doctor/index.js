import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILDocUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function Doctor() {
    return (
        <View style={styles.container} >
            <ILDocUmum style={styles.ilustration}/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>Dokter Umum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 105,
        height: 130
    },
    ilustration: {
        marginBottom:28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
