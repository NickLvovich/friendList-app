import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {
  Text,
  FAB,
  List,
  Colors,
  Provider,
  Button,
  Portal,
  Modal,
} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {addNewNote, deletenote, fetchNotes} from '../../redux/actions';

import Header from '../../components/Header';

function ViewNotes({navigation}) {
  const [visible, setVisible] = useState(false);
  const noteData = useSelector((state) => state.note.noteData.noteData);
  const dispatch = useDispatch();
  const [formErrorMessage, setFormErrorMessage] = useState(
    'ok, we receive data',
  );
  useEffect(() => {
    dispatch(fetchNotes())
      .then((response) => response.data)
      .catch((err) => {
        setFormErrorMessage('There is no data, or problems with receiving it');
        setTimeout(() => {
          setFormErrorMessage('');
        }, 1000);
      });
  }, []);

  return (
    <>
      <Header titleText="Simple Friend list" />
      <View style={styles.container}>
        {noteData === undefined ? (
          <View style={styles.titleContainer}>
            <ActivityIndicator size="large" color="#60DBC5" />
          </View>
        ) : (
          <FlatList
            data={noteData}
            renderItem={({item}) => (
              <List.Section>
                <List.Accordion
                  title={`${item.name} ${item.lastname}`}
                  left={(props) => <List.Icon {...props} icon="account" />}>
                  <List.Item
                    left={(props) => <List.Icon {...props} icon="phone" />}
                    title={`+${item.phone}`}
                  />
                  <List.Item
                    left={(props) => <List.Icon {...props} icon="email" />}
                    title={item.email}
                  />
                  <List.Item
                    left={(props) => <List.Icon {...props} icon="cake" />}
                    title={item.birthday}
                  />
                </List.Accordion>
                <View style={styles.inlineBlock}>
                  <Button
                    icon="rename-box"
                    mode="contained"
                    style={styles.buttonUpdate}
                    onPress={() => console.log('Pressed')}>
                    Edit
                  </Button>
                  <Button
                    icon="delete"
                    mode="contained"
                    style={styles.buttonDelete}
                    onPress={() => console.log('Pressed')}>
                    Delete
                  </Button>
                </View>
              </List.Section>
            )}
            keyExtractor={(item) => item._id.toString()}
          />
        )}
        <FAB
          icon="plus"
          style={styles.fab}
          small
          color={Colors.white}
          onPress={() => navigation.navigate('AddNotes')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
  iconStyle: {
    zIndex: 10,
  },
  mainBlock: {
    flex: 1,
  },
  buttonDelete: {
    backgroundColor: 'rgb(219, 96, 96)',
    width: '33%',
    margin: 10
  },
  buttonUpdate: {
    backgroundColor: 'rgb(219, 217, 96)',
    width: '33%',
    margin: 10
  },
  inlineBlock:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ViewNotes;
