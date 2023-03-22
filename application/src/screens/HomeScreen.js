import React ,{useEffect}from "react";
import { Text,  View, TouchableOpacity, Image, Button } from "react-native";

const HomeScreen = ({navigation}) =>{
     
return(
<View style = {{display: "flex", justifyContent: 'center', alignSelf :"center" , alignItems : "center",}}>
        <Image source={require('../../assets/photo.png')}/>
 {
}
        <TouchableOpacity onPress={() =>navigation.navigate('Pedagogie')} style = {{borderWidth : 1 , height : 50 , width : 200, justifyContent : "center" ,
                 alignItems: "center", borderRadius: 40 ,
                 backgroundColor: "blue" , alignSelf : "center", textAlign :"center"}}>
                <Text style = {{color : "white"}}>Etudiant</Text>
      
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('Login')} style = {{borderWidth : 1 , height : 50 , width : 200, justifyContent : "center" ,
                 alignItems: "center", borderRadius: 40 , marginTop: 40,
                 backgroundColor: "blue" , alignSelf : "center", textAlign :"center"}}>
        <Text style = {{ color : "white"}}>Pedagogie</Text>
        </TouchableOpacity>
    </View>
)
};
export default HomeScreen;