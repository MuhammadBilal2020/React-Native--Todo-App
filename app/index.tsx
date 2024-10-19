import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Pressable, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


const Home = () => {
  // interface todos{
  //   inputs : string
  //  }
  let [input, setInput] = useState("")
  let [todo, setTodo] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  let [update, setUpdate] = useState("")
  const [index, setIndex] = useState(0)

  // add tudo
  function addTodo() {
    if (input === "") {
      alert('input is empty')
      return
    }
    todo.push(input)
    setInput([...todo])
    setInput("")
  }

  // delete todo
  function deleteTodo(index) {
    todo.splice(index, 1)
    setTodo([...todo])

  }

  // edit  todo 
  function editTodo(index) {
    console.log(index);

    todo.splice(index, 1, update)
    setTodo([...todo])

    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder='enter todo '
      />

      <TouchableOpacity style={styles.button} onPress={addTodo} >
        <Text>Add Todo</Text>
      </TouchableOpacity>


      {/* render  */}

      {todo.length > 0 ? <FlatList
        data={todo}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>

              <Text style={styles.title}>
                {item}
              </Text>
              <View style={styles.alignBtns}>

                <TouchableOpacity style={styles.ListBtn} onPress={() => deleteTodo(index)}
                  activeOpacity={0.5}
                >
                  <Text>delete</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListBtn}
                  onPress={() => {
                    setModalVisible(true)
                    setIndex(index)
                  }
                  }
                >
                  <Text>Update Todo</Text>
                </TouchableOpacity>
              </View>

            </View>
          )
        }}

      />
        : <Text style={styles.no} >no data found</Text>
      }

      {/* modal  */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <View style={styles.hide}>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>

                    <Ionicons name="close-outline" size={24} color="white" /> {/* Replace ion-icon with Ionicons */}
                  </Text>
                </Pressable>


              </View>


              <Text style={styles.modalText}>Edit todo</Text>
              <TextInput
                style={styles.upInput}
                placeholder='update value'
                onChangeText={setUpdate}
                

              />



              <Pressable
                style={[styles.button, styles.update]}
                onPress={() => editTodo(index)}>

                <Text style={styles.textStyle}>update</Text>
              </Pressable>



            </View>
          </View>
        </Modal>



      </View>

    </View >


  )
}





// styling 
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  text: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 30

  },

  input: {
    height: 40,
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 120
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 'auto',
    width: 300
  },

  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },
  no: {
    textAlign: 'center',
    marginTop: 20
  },
  alignBtns: {
    marginTop: 20
  },
  ListBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,

  },

  // modal 
  centeredView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  hide: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
  ,
  buttonClose: {
    backgroundColor: 'black',
    width: 25,
    height: 25,
    padding: 0,

    marginHorizontal: 0
  },
  update: {
    backgroundColor: 'black',
    width: 200,

    marginHorizontal: 0
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200
  },
  textStyleClose: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 30,
    // flex: 3,
    alignItems: 'flex-end',
  },

  upInput: {
    width: 220,
    marginVertical: 20,
    borderWidth: 1,
    fontWeight: 'bold',
    textAlign: 'center',

  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



})

export default Home