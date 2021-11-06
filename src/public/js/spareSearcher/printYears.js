const d = document;

export function printYears () {
    var submodelsBox = document.getElementById("formSubmodels");
    const $searchBtn = d.querySelector('#btnSearch')

    document.getElementById('inputSubmodel').addEventListener('input', function () {
        var selectedSubmodel = document.getElementById("inputSubmodel").value;
        let $yearDatalist = d.createElement("datalist")
        let $yearForm = d.querySelector("#formYears")
        let $inputYear = d.querySelector("#inputYear")
        let $inputSubmodel = d.querySelector("#inputSubmodel")
        let url = `/years?submodel=${selectedSubmodel}`

        fetch(url)
        .then(res => res.json())
        .then(data => {

            $yearDatalist.setAttribute("id", "year")

            data.results.forEach(n => {
                let txt = `<option value=${n.fecha} data-id=${n.id}>${n.fecha}</option>`

                $yearDatalist.insertAdjacentHTML("beforeend", txt)
            })
            console.log($yearDatalist)
            console.log("yeardata")
            $inputYear.disabled = false;
            $yearForm.insertAdjacentElement("beforeend", $yearDatalist)
            console.log(data)
            console.log("pic", data)
    
            if (window.localStorage.getItem("submodel") != undefined) {
                window.localStorage.removeItem("submodel")
                window.localStorage.setItem("submodel", data.SubmodelId)
            }
            
           
        })

        $inputSubmodel.disabled = true;
    });
    

/*     submodelsBox.addEventListener("input", function(e){

        let $yearDatalist = d.createElement("datalist")
        let $yearForm = d.querySelector("#formYears")
        let $inputYear = d.querySelector("#inputYear")
        var isInputEvent = (Object.prototype.toString.call(e).indexOf("InputEvent") > -1);
        let selectedSubmodel = e.target.value
        
        let $inputSubmodel = d.querySelector("#inputSubmodel")
        let url = `/years?submodel=${selectedSubmodel}`
        if(!isInputEvent)

            fetch(url)
            .then(res => res.json())
            .then(data => {

                $yearDatalist.setAttribute("id", "year")

                data.results.forEach(n => {
                    let txt = `<option value=${n.fecha} data-id=${n.id}>${n.fecha}</option>`

                    $yearDatalist.insertAdjacentHTML("beforeend", txt)
                })
                console.log($yearDatalist)
                console.log("yeardata")
                $inputYear.disabled = false;
                $yearForm.insertAdjacentElement("beforeend", $yearDatalist)
                console.log(data)
            })

            $inputSubmodel.disabled = true;
            
           
            
    }, false); */
}