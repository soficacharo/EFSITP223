const tasks = [];

const chequear = (evento) => {
    let pepito = document.getElementsByClassName("form-check-input")
    let elemento2 = document.getElementById("labelCheckbox");
    for (let index = 0; index < pepito.length; index++) {
        let padre = pepito[index].parentNode
        if(pepito[index].checked == true){
            padre.lastChild.previousSibling.classList.add('chequeado')
            tasks[index].tFin = evento.timeStamp
            console.log(tasks[index])
        }else{
            padre.lastChild.previousSibling.classList.remove('chequeado')
            tasks[index].tFin = -1
        }
    }
  }

  const tareaRápida = () => {
    let taskRapida = "ninguna"
    var viejaTask = 0
    var tiempoDesarrollo1 = 0
    var tiempoDesarrollo2 = 0
        for (let index = 0; index < tasks.length; index++) {
            console.log("1", tasks[index])
            console.log("2", tasks[index].tFin, tasks[index].tInicio)
            console.log("3", viejaTask.tFin, viejaTask.tInicio)
            tiempoDesarrollo1 = tasks[index].tFin - tasks[index].tInicio 
            if(viejaTask != 0){
                tiempoDesarrollo2 = viejaTask.tFin - viejaTask.tInicio }
            console.log(tiempoDesarrollo1)
            console.log(tiempoDesarrollo2)
            if (tiempoDesarrollo1>tiempoDesarrollo2) {
                taskRapida = tasks[index].texto
                viejaTask = tasks[index]
            }
            console.log(taskRapida)
        }
        const element = document.getElementById("resultadoRapidez");
        element.innerHTML = `La tarea resuelta más rápidamente fue ${taskRapida}`
  }


  const subirTask = (e) => {
    let duplicado = false
    let elemento1 = document.getElementById("nuevoTask").value;
    for (let index = 0; index < tasks.length; index++) {
        if (elemento1 == tasks[index].texto){
            duplicado = true
            index = tasks.length
        }
    }
    if (elemento1.length > 0 && !duplicado) {
    var nuevoObjeto = new Object()
    nuevoObjeto.texto = elemento1
    nuevoObjeto.tInicio = e.timeStamp
    nuevoObjeto.tFin = -1
    nuevoObjeto.tardeza = null
    let hola = tasks.length-1
    console.log(tasks[hola])

    const newElement = document.createElement("tr");
    newElement.innerHTML = `<td><div class="form-check" id="elementos"> <input class="form-check-input" type="checkbox" onclick="chequear(event)" value="" id="flexCheckDefault"> <label class="form-check-label labelElementoLista" for=""flexCheckDefault"" id="labelCheckbox"> ${elemento1} </label> </div> </td>`
    document.getElementById("laLista").appendChild(newElement) 
    nuevoObjeto.html = newElement
    tasks.push(nuevoObjeto);
    } else {
        alert("Debe ingresar una task válida")
    } 
  }
