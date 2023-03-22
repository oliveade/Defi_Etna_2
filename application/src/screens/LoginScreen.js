import React, {  useState } from "react";
import {Button, Text, TextInput, View, TouchableOpacity } from "react-native";


const LoginScreen = ({navigation}) =>{
    const [name, SetName] = useState (null);
    const [password, setPassword] = useState(null);
  


    const postData = async () => {
        try {
          const response = await axios.post('http://172.16.31.91:1998/employee/', 
          { name : name,
          password : password });

        //   console.log("ça marche mon vieux", response.data, response.status);
            const data = response.data
          if(response.status == 200){
            navigation.navigate("Admin")
          console.log("ça marche mon vieux", response.data, response.status);

          }else{
            setError(data.message)
            console.log(data)
          }
      
        } catch (error) {
          console.error(error);
        }
      };

      const connect = ()=>{
        postData()
      }

return(
    <View>
     
        <View style = {{ width: "100%", height :"100%", justifyContent : "center", alignSelf :"center",
        alignContent : "center", alignItems: "center"}}>
            <TextInput 
                 value={name}
                 placeholder={"Enter your Login"}  style= {{ height : 42, width: "80%", borderBottomWidth: 1}}
                onChangeText={text => SetName(text)}
            />

            <TextInput 
            value={password}
            placeholder={"Enter your password"} style = {{ height : 42, width: "80%", borderBottomWidth: 1}}
            onChangeText= {text => setPassword(text)}
            secureTextEntry />

      
        <View style= {{marginTop: "10%" , width: "80%" }}>
                <TouchableOpacity onPress={() =>navigation.navigate('Admin')}
                style = {{borderWidth : 1 , height : 42 , width : "80%", justifyContent : "center" ,
                 alignItems: "center", borderRadius: 40 ,
                 backgroundColor: "blue" , alignSelf : "center", textAlign :"center"}}>
                       <Button
          title="Login"
       
        />
                </TouchableOpacity>

        </View>
              
                <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
                    <Text style = {{marginTop : "5O%", color : "blue"}}>Accueil</Text>
                </TouchableOpacity>
        <Text style = {{marginTop : "5O%"}}>Mot de passe Oublié ?</Text>
        </View>
    </View>
)


};
export default LoginScreen;
