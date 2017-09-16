var json = require('./husholdings_typer.json')

var alders_grupper = require('./ligninger_alder_inntekt_bydel.json')

console.log(['json', json]);


var area_list = ["Gamle Oslo", "Grünerløkka", "Sagene", "St. Hanshaugen", "Frogner",
"Ullern", "Vestre Aker", "Nordre Aker", "Bjerke", "Grorud", "Stovner", "Alna", "Østensjø",
"Nordstrand", "Søndre Nordstrand", "Sentrum", "Marka", "Uoppgitt bydel Oslo"]

//ligninger_alder_inntekt_bydel: sted, gruppe, aar, kategori
//relevant data: sted, gruppe, 2015, inntekt



function getArea_income(inntekt) {



}










//console.log(json.dataset.dimension.id[]

//console.log(json.dataset.value[json.dataset.dimension.id["120103", "002", "2016", 0]])

//console.log(json.dataset.value[3])

//42 omraader, forholder oss til 0 - 17
//  "030101a": "Gamle Oslo",
//  "030102a": "Grünerløkka",
//  "030103a": "Sagene",
//  "030104a": "St. Hanshaugen",
//  "030105a": "Frogner",
//  "030106a": "Ullern",
//  "030107a": "Vestre Aker",
//  "030108a": "Nordre Aker",
//  "030109a": "Bjerke",
//  "030110a": "Grorud",
//  "030111a": "Stovner",
//  "030112a": "Alna",
//  "030113a": "Østensjø",
//  "030114a": "Nordstrand",
//  "030115a": "Søndre Nordstrand",
//  "030116a": "Sentrum",
//  "030117a": "Marka",
//  "030199a": "Uoppgitt bydel Oslo",

//11 typer
//  "000": "Andre husholdninger",
//  "001": "Aleneboende",
//  "002": "Par uten hjemmeboende barn",
//  "003": "Par med små barn (yngste barn 0-5 år)",
//  "004": "Par med store barn (yngste barn 6-17 år)",
//  "005": "Mor/Far med små barn (yngste barn 0-5 år)",
//  "006": "Mor/Far med store barn (yngste barn 6-17 år)",
//  "007": "Enfamiliehusholdninger med voksne barn (yngste barn 18 år og over)",
//  "008": "Flerfamiliehusholdning uten barn 0-17 år",
//  "009": "Flerfamiliehusholdning med små barn (yngste barn 0-5 år)",
//  "010": "Flerfamiliehusholdning med store barn (yngste barn 6-17 år)"

//2 aar
//2015
//2016

//rekkefolge: omraade, kategori, aar (15, 16) >
  //forholde oss til 2016.
console.log(json.dataset.dimension.Region.category.label["030101a"])
console.log(json.dataset.dimension.Region.category.index[0])


//find an area based on status (alone, with children, grown up children)
function getAreas_status(hushtype) {
    //find three areas with most of the same hushtype as yourself
    var relevant_areas = {"Gamle Oslo":0, "Grünerløkka":0, "Sagene":0,
    "St. Hanshaugen":0, "Frogner":0, "Ullern":0, "Vestre Aker":0, "Nordre Aker":0,
    "Bjerke":0, "Grorud":0, "Stovner":0, "Alna":0, "Østensjø":0,
    "Nordstrand":0, "Søndre Nordstrand":0, "Sentrum":0, "Marka":0, "Uoppgitt bydel Oslo":0}

    //tom array med plass til alle omraadene
    //var relevant_areas = new Array(18)

    //Aleneboende 001 og (000-droppe?).
    if (hushtype == 'alene') {

      var start = 3
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = json.dataset.value[start]
        start = start + 22
      }

    }

    //med barn, 003 og 005 009,  004 og 006 010
    else if (hushtype == 'med_barn') {
      //003
      var start = 7
      for (var i = 0; i < 18; i++) {
        console.log("Area: " + area_list[i] + " " + (relevant_areas[area_list[i]] + json.dataset.value[start]))
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }

      //004
      var start = 9
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }
      //005
      var start = 11
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }
      //006
      var start = 11
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }
      //009
      var start = 19
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }
      //010
      var start = 21
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }

      //her er listen for alle med barn ferdig

    }
    //kategor 007 og 002
    else if (hushtype == 'uten_eller_voksne_barn') {
      //007
      var start = 13
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }
      //002
      var start = 5
      for (var i = 0; i < 18; i++) {
        relevant_areas[area_list[i]] = relevant_areas[area_list[i]] + json.dataset.value[start]
        start = start + 22
      }

    }

    //return list og three areas with highest number of households in your category
}


getAreas_status('alene')

getAreas_status('med_barn')
