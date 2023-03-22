import React ,{useEffect, useState}from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native'

export const EmployScreen = () => {

  const [emargements, setEmargements] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEmargements = async () => {
    try {
      const response = await fetch("http://172.16.31.91:1998/Emargement");
      const json = await response.json();
      setEmargements(json);
      setLoading(false);
    } catch (error) {
      console.error(error)
    }
    }

    useEffect(() => {
      fetchEmargements()
    }, [])

    const filteredEmargements = emargements.filter((emargement) =>
    emargement.login.includes(search)
    );

    if (loading) {
      return <ActivityIndicator />
    }

    return (
        <View>
    
        <TextInput style= {{fontSize: 20, borderBottomWidth: 1, marginTop: 20}}
        placeholder="Recherche par login ou promo"
        value={search}
        onChangeText={setSearch}
        />
        <FlatList
        data={filteredEmargements}
        keyExtractor={(emargement) => emargement.id.toString()}
        renderItem={({ item }) => (
          <View>
          <View style ={{backgroundColor: "#B0E0E6", borderBottomLeftRadius: 1, marginBottom: 20, marginTop: 20}}>
          <Text style = {{fontSize: 15}}> Etudiant : {item.login}</Text>
          </View>
          <View>
          <Text> Date Matin: {item.date_morning}</Text>
          </View>
          <View>
          <Text> Date Soir: {item.date_evening}</Text>
          </View>
          <View>
          <Text style = {{}}> Presence: {item.status}</Text>
          </View>
          <View>
          <Text> Motif d'absence : {item.absence}</Text>
          </View>
          <View>
          <Text> Motif de retard: {item.retard}</Text>
          </View>
          </View>
        )}
          />
        </View>
    )
  }


export default EmployScreen
