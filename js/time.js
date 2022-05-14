export default function Times(data, item, item2){
    const d = document
d.querySelector(data).addEventListener('click',traerDatos)

function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'data.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status== 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos[0].title)
            d.querySelector('#w-horas').innerHTML = `${datos[0].timeframes[`${item}`].current}hrs`
            d.querySelector('#p-horas').innerHTML = `${datos[1].timeframes[`${item}`].current}hrs`
            d.querySelector('#s-horas').innerHTML = `${datos[2].timeframes[`${item}`].current}hrs`
            d.querySelector('#e-horas').innerHTML = `${datos[3].timeframes[`${item}`].current}hrs`
            d.querySelector('#sl-horas').innerHTML = `${datos[4].timeframes[`${item}`].current}hrs`
            d.querySelector('#sc-horas').innerHTML = `${datos[5].timeframes[`${item}`].current}hrs`

            d.querySelector('#past-1').innerHTML= `Last ${item2} - ${datos[0].timeframes[`${item}`].previous}hrs`
            d.querySelector('#past-2').innerHTML= `Last ${item2} - ${datos[1].timeframes[`${item}`].previous}hrs`
            d.querySelector('#past-3').innerHTML= `Last ${item2} - ${datos[2].timeframes[`${item}`].previous}hrs`
            d.querySelector('#past-4').innerHTML= `Last ${item2} - ${datos[3].timeframes[`${item}`].previous}hrs`
            d.querySelector('#past-5').innerHTML= `Last ${item2} - ${datos[4].timeframes[`${item}`].previous}hrs`
            d.querySelector('#past-6').innerHTML= `Last ${item2} - ${datos[5].timeframes[`${item}`].previous}hrs`

            d.querySelector('#w-title').innerHTML= `${datos[0].title}`
            d.querySelector('#p-title').innerHTML= `${datos[1].title}`
            d.querySelector('#s-title').innerHTML= `${datos[2].title}`
            d.querySelector('#e-title').innerHTML= `${datos[3].title}`
            d.querySelector('#sl-title').innerHTML= `${datos[4].title}`
            d.querySelector('#sc-title').innerHTML= `${datos[5].title}`
            
            
        }
    }
}

traerDatos()
}