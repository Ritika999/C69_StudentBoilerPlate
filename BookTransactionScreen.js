import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class TransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        
      }
    }

    getCameraPermissions = async () =>{
     //to take camera permissions from the user
    }

    handleBarCodeScanned = async({type, data})=>{
    //after taking camera persmissions
    }

    render() {
   

        return(
          <View style={styles.container}>

            <Text style={styles.displayText}>
              Issue/Return Screen
            </Text>     

         
        </View>
        );
      
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });
