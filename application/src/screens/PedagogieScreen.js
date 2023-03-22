
import { BarCodeScanner } from "expo-barcode-scanner";
import React, {useState, useEffect}from "react";
import { Button, Text, View, StyleSheet} from "react-native";


const PedagogieScreen = () =>{

    const [hasPermission, setHasPermission] = useState (null);
    const [scanned, setScanned] = useState (false);
    const [text, setText] = useState ()
    // const [login, setLogin] = useState ("")
    // const [student_qr, setStudent_qr] =useState("")
   const askForCameraPermission = () => {

    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
    })()

   }
   useEffect (() => {
    askForCameraPermission();
   }, []);
   
   const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    const datas = data.split("|")
    const login = datas[0]
    const student_qr = datas[1]
    var d = new Date();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    alert(`emargement reussi ${login} ${student_qr} ${hours}`);

   // getDa(data)
   // alert(text) 
   }


   if (hasPermission === null) {
        return( 
            <View>
                <Text> Requesting for Camera permission</Text>
            </View>
        )
   }
   if (hasPermission === false){
    return(
        <View>
        <Text style ={{margin: 10}}>
        No access to camera 
        </Text>
        <Button title={'Allow Camera'} onPress= {() => askForCameraPermission()}/>
    </View>
    )
   }
 
//    function getDa(login){
//     fetch('http://172.16.31.91:1998/Emargement', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         login: login,
     
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//    }

    return(
        <><View>
            <Text style={{ color: 'blue', alignItems: 'center', fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic', marginLeft: 100, marginTop: 60 }}>Veuillez scannez votre carte</Text></View><View style={styles.container}>

                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 300, width: 300, alignSelf: 'center', }} />
                </View>
                <Text style={styles.maintext}>{text}</Text>
                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} />}
            </View></>
    )
}
export default PedagogieScreen;
const styles = StyleSheet.create({
    container:{

    }
})
