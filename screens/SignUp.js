import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image source={require('../assets/signup.png')} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Hadi Başlayalım</Text>
                <Text style={styles.textBody}>Hesap oluşturmak için doldurun</Text>
                <Input name="Adınız" icon="user" />
                <Input name="Email" icon="envelope" />
                <Input name="Telefonunuz" icon="phone" />
                <Input name="Şifre" icon="lock" pass={true} />
                <Input name="Şifreyi tekrar giriniz" icon="lock" pass={true} />
                <Submit color="#0251ce" title="OLUŞTUR" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>Zaten hesabın var mı?</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('Home')}> Giriş Yap</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Foundation',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation'
    }
});

export default SignUp;