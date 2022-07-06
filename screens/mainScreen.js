import React from 'react';
import { Text, View, Image, Icon } from 'react-native';




const MainScreen = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', textAlign: 'left', marginLeft: 25, marginTop: 20 }}>
                <Image style={{ width: 60, height: 60, borderRadius: 400 / 2 }} source={require('../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg')} />
                <Text style={{ alignSelf: "center", marginLeft: 20, fontSize:20, color:'black' }}>Hola,</Text>
                <Text style={{alignSelf: "center",fontWeight: "bold",marginBottom:3, fontSize:25, color:'black' }}> Fernando</Text>
            </View>

            <View style={{
                justifyContent: 'flex-start',

            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    fontFamily: 'Graduate-Regular',
                    color: 'black',
                    paddingLeft: 30,
                    marginTop: 5

                }}
                >Login
                </Text>



                <Text style={{
                    fontSize: 16,
                    color: '#138BFA',
                    textAlign: 'right',
                    marginTop: 10,
                    marginEnd: 36

                }}
                >Forgot Password?
                </Text>


                <Text style={{
                    fontSize: 16,
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 25,
                }}>
                    New to inventart?
                    <Text style={{ color: '#138BFA' }}>  Register</Text>
                </Text>

            </View>
        </View>

    );
}

export default MainScreen;