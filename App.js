import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './assets/styles/styles.js';

export default function App() {

  //Definir las variables del estado del componente
  const [identificacion,setidentificacion] = useState('');
  const [nombre,setnombre] = useState('');
  const [asignatura,setasignatura] = useState('');
  const [notaMoment1,setnotaMoment1] = useState('');
  const [notaMoment2,setnotaMoment2] = useState('');
  const [notaMoment3,setnotaMoment3] = useState('');
  const [definitiva,setdefinitiva] = useState('');
  const [observacion,setobservacion] = useState('');
  const [esValido,setesValido] = useState(false);
  const [mensaje, setmensaje] = useState('');
  const [alumnos, setalumnos] = useState([]);

  // Function Calcular
  let calcular = () => {
    if (isNaN(identificacion)!=false) {
      setesValido(false)
      setmensaje("El campo identificacion debe ser númerico...")
    } else if (isNaN(notaMoment1)!=false || isNaN(notaMoment2)!=false || isNaN(notaMoment3)!=false ) {
      setesValido(false)
      setmensaje("Los campos que hacen referencia a las notas deben ser númericos...")
    } else if (notaMoment1<0 || notaMoment2 <0 || notaMoment3<0 ) {
      setesValido(false)
      setmensaje("Los campos que hacen referencia a las notas deben ser positivos...")
    } else if (notaMoment1>5 || notaMoment2 >5 || notaMoment3 >5 ) {
      setesValido(false)
      setmensaje("Recuerde que las notas deben estar entre 0 y 5...")
    } else if (identificacion =="" || nombre =="" || asignatura =="" || notaMoment1=="" || notaMoment2=="" || notaMoment3=="" ) {
      setesValido(false)
      setmensaje("Por favor diligenciar todos los campos...")
    } else{
      let calculoNota = 0;
      calculoNota = ((parseFloat(notaMoment1) +parseFloat(notaMoment2)+parseFloat(notaMoment3))/3).toFixed(2)
      let explicacionNota
      if (calculoNota >= 3) {
        explicacionNota = "Aprueba"
      } else if (calculoNota >= 2 && calculoNota <= 2.99) {
        explicacionNota = "Habilita"
      } else{
        explicacionNota = "Reprueba"
      }

      //cambiar el contenido de la variable de estado resultado con la info de calculoNota
      setesValido(true)
      setdefinitiva(calculoNota);
      setobservacion(explicacionNota);
      setmensaje("Calculo realizado de forma correcta...")
    }
  }

  // Funtion limpiar
  let limpiar = () => {
    setesValido(false)
    setidentificacion('')
    setnombre('')
    setasignatura('')
    setnotaMoment1('')
    setnotaMoment2('')
    setnotaMoment3('')
    setdefinitiva('')
    setobservacion('')
    setmensaje('')
  }

  // Function Guardar
  let guardar = () => {
    if (definitiva == '' || observacion == '') {
      setesValido(false)
      setmensaje('Debe realizar el proceso de calcular...')
    } else {
      let findAlumno = alumnos.find(alumno => alumno.id == identificacion)
      if (findAlumno == undefined) {
        alumnos.push({
          id: identificacion,
          nombre: nombre,
          asignatura: asignatura,
          nota1: notaMoment1,
          nota2: notaMoment2,
          nota3: notaMoment3,
          definitiva: definitiva,
          observacion: observacion
        })
        setesValido(true)
        setmensaje('Se guardo correctamente...')
        console.log(alumnos);
      } else {
        setesValido(false)
        setmensaje('Esta información ya esta registrada')
      }
    }
  }

  //Function Buscar
  let buscar = () => {
    let findId = alumnos.find(alumno => alumno.id == identificacion)
    if (identificacion == '') {
      setesValido(false)
      setmensaje('Debe colocar la identificación')
    } else {
      if (findId == undefined) {
        setesValido(false)
        setmensaje('Alumno no encontrado')
      } else {
        setesValido(true)
        setmensaje('Alumno encontrado')
        setnombre(findId.nombre)
        setasignatura(findId.asignatura)
        setnotaMoment1(findId.nota1)
        setnotaMoment2(findId.nota2)
        setnotaMoment3(findId.nota3)
        setdefinitiva(findId.definitiva)
        setobservacion(findId.observacion)
        console.log(findId);
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={[styles.container, {flex:.5, width:'100%' }]}>
        <Text style={[styles.title, {width:'100%'}]}>SISTEMA DE NOTAS</Text>
      </View>
      <View style={[styles.container, {flex:6,justifyContent:'flex-start', alignItems:'flex-start',padding:20}]}>
       
        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Identificación: </Text>
          <TextInput style={styles.textInput}
          onChangeText={identificacion => setidentificacion(identificacion)}
          value={identificacion}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Nombre: </Text>
          <TextInput style={styles.textInput}
          onChangeText={nombre => setnombre(nombre)}
          value={nombre}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Asignatura: </Text>
          <TextInput style={styles.textInput}
          onChangeText={asignatura => setasignatura(asignatura)}
          value={asignatura}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Nota momento 1 (30%): </Text>
          <TextInput style={styles.textInput}
          onChangeText={notaMoment1 => setnotaMoment1(notaMoment1)}
          value={notaMoment1}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Nota momento 2 (35%): </Text>
          <TextInput style={styles.textInput}
          onChangeText={notaMoment2 => setnotaMoment2(notaMoment2)}
          value={notaMoment2}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Nota momento 3 (35%): </Text>
          <TextInput style={styles.textInput}
          onChangeText={notaMoment3 => setnotaMoment3(notaMoment3)}
          value={notaMoment3}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Definitiva: </Text>
          <Text style={styles.resultado}>
            {definitiva}
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Observación: </Text>
          <Text style={styles.resultado}>
              {observacion}
          </Text>
        </View>

        <Text style={{color: esValido ? 'green' :'red'}}>{mensaje}</Text>

        <View style={styles.buttonsContainer}>

            <TouchableOpacity style={styles.buttons}
            onPress={() => calcular()}>
              <Text style={styles.textButtons}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}
            onPress={() => guardar()}>
              <Text style={styles.textButtons}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}
            onPress={() => limpiar()}>
              <Text style={styles.textButtons}>Limpiar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}
            onPress={() => buscar()}>
              <Text style={styles.textButtons}>Buscar</Text>
            </TouchableOpacity>

        </View>

      </View>

      <View style={[styles.container, {flex:.5, width:'100%' }]}>
        <Text>© Copyright - Victor Alfonso Suárez Aguirre</Text>
      </View>
    </View>
  );
}