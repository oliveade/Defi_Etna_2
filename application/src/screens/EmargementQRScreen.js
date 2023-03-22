import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from 'axios';


const EmargementQRScreen = () => {
    const [confirmation, setConfirmation] = useState("");
    const [hasPermission, setHasPermission] = useState (null);
    const [scanned, setScanned] = useState (false);
    const [text, setText] = useState ()

    const handleQRCodeScanned = async ({ data }) => {
        /*  On parse les données du QRCode pour extraire le login,
         *  le numdero de carte et l'id de la promo */
        const [login, numeroCarte, idPromo] = data.split("|");


        // On envoie les données à l'API pour enregistrer l'émargement
        try {
            const response = await axios.post("http://172.16.31.91:1998/Emargement", {
                login,
                numero_carte: numeroCarte,
                id_promo: idPromo,
            });

            // Si l'enregistrement a réussi, on affiched une confirmation visuelle
            setConfirmation("Emargement enregistré avec succès");
        } catch (error) {
            console.error(error);
            setConfirmation("Une erreur est survenue, veuillez réessayer.")
        }
    };

    return (
        <>
        <View>
            <Text style={{ color: 'blue', alignItems: 'center', fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic', marginLeft: 100, marginTop: 60 }}>Veuillez scannez votre carte</Text></View><View style={styles.container}>

                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
                        style={{ height: 300, width: 300, alignSelf: 'center', }} />
                </View>
                <Text style={styles.maintext}>{confirmation}</Text>
                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} />}
            </View>
            </>
    )
}

export default EmargementQRScreen;
const styles = StyleSheet.create({
    container:{

    }
})
