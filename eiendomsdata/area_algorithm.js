var json = require('./husholdings_typer.json')

var alders_grupper = require('./ligninger_alder_inntekt_bydel.json')

var alders_grupper_spes = require('./aldersgrupper_bydeler.json')



/*
HOW TO USE:
call function find_area with parameters status, age and income.
valid status': 'med_barn', 'uten_eller_voksne_barn', 'alene'

ex. find_area('med_barn', 37, 800000)
*/


var area_list = ["Gamle Oslo", "Grünerløkka", "Sagene", "St. Hanshaugen", "Frogner",
"Ullern", "Vestre Aker", "Nordre Aker", "Bjerke", "Grorud", "Stovner", "Alna", "Østensjø",
"Nordstrand", "Søndre Nordstrand", "Sentrum", "Marka", "Uoppgitt bydel Oslo"]

//prices sqr.meter
//could be used when calculating size based on loan
//and calculate area based on wished appartmnets size
var area_prices = [75100, 77000, 79700, 83700, 88300,
76500, 68200, 82500, 61600, 51600, 47300, 53200, 58100,
64000, 46200, 72200, 72200, 77200]
//NB! Sentrum og marka og uoppgitt har faatt snittpris for oslo.. ikke helt reelt

//based on loan and wished housing size
function getArea_prices(loan, size) {


}


//finds and returns list of 3 areas w. most ppl in same age-group
function getArea_age(alder) {
  var relevant_ar = {"Gamle Oslo":0, "Grünerløkka":0, "Sagene":0,
  "St. Hanshaugen":0, "Frogner":0, "Ullern":0, "Vestre Aker":0, "Nordre Aker":0,
  "Bjerke":0, "Grorud":0, "Stovner":0, "Alna":0, "Østensjø":0,
  "Nordstrand":0, "Søndre Nordstrand":0, "Sentrum":0, "Marka":0, "Uoppgitt bydel Oslo":0}

  //16-19 aar
  if (alder < 19) {
    var start = 600
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }
  //20-44
  else if (alder < 45) {

    var start = 625
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }

  //45-66
  else if (alder < 67) {
    var start = 650
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }
  //67-79
  else if (alder < 80) {
    var start = 675
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }
  //80-89
  else if (alder < 89) {
    var start = 700
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }
  //90+
  else {
    var start = 725
    for (var i = 0; i < 18; i++) {
      relevant_ar[area_list[i]] = alders_grupper_spes.dataset.value[start]
      start = start + 250
      //relevant_ar[area_list[i]] = relevant_ar[area_list[i]] + alders_grupper_spes.dataset.value[start]
      start = start + 250
    }
  }

  //find three best areas
  var best = area_list[0]
  var nestbest;
  var tredje;

  highest = 0
  for (var i = 0; i < 17; i++) {
    if (relevant_ar[area_list[i]] > highest && best != area_list[i]) {
      nestbest = area_list[i]
      highest = relevant_ar[area_list[i]]
    }
  }

  highest = 0
  for (var i = 0; i < 17; i++) {
    if (relevant_ar[area_list[i]] > highest && best != area_list[i] && nestbest != area_list[i]) {
      tredje = area_list[i]
      highest = relevant_ar[area_list[i]]
    }
  }

  income_best = [best, nestbest, tredje]

  return income_best

}

//ligninger_alder_inntekt_bydel: sted, gruppe, aar, kategori
//relevant data: sted, gruppe, 2015, inntekt

/*
alders_grupper
alle
"17-34": "17-34 år",
"35-66": "35-66 år",
"67+": "67 år eller eldre"
*/


function getArea_income(inntekt, alder) {

  var relevant_a = {"Gamle Oslo":0, "Grünerløkka":0, "Sagene":0,
  "St. Hanshaugen":0, "Frogner":0, "Ullern":0, "Vestre Aker":0, "Nordre Aker":0,
  "Bjerke":0, "Grorud":0, "Stovner":0, "Alna":0, "Østensjø":0,
  "Nordstrand":0, "Søndre Nordstrand":0, "Sentrum":0, "Marka":0, "Uoppgitt bydel Oslo":0}

  //17-34
  if (alder < 35) {

    var start = 87
    for (var i = 0; i < 18; i++) {
      relevant_a[area_list[i]] = alders_grupper.dataset.value[start]
      start = start + 308
    }
  }
  //mellom 35-66
  else if (alder < 67) {

    var start = 164
    for (var i = 0; i < 18; i++) {
      relevant_a[area_list[i]] = alders_grupper.dataset.value[start]
      start = start + 308
    }
  }

  //over 66
  else {

    var start = 241
    for (var i = 0; i < 18; i++) {
      relevant_a[area_list[i]] = alders_grupper.dataset.value[start]
      start = start + 308
    }
  }

  //beregne distance fra verdier ifht denne personens Lonn

  inntekt_diff = new Array(18)

  for (var i = 0; i < 18; ++i) {
      inntekt_diff[i] = inntekt - relevant_a[area_list[i]]
        if (inntekt_diff[i] < 0) {
          inntekt_diff[i] = inntekt_diff[i]* (-1)
        }
  }

  //find three best areas
  var best = area_list[0]
  var nestbest;
  var tredje;

  //set 1mill (higher than all)
  var lowest = 1000000
  for (var i = 1; i < 17; i++) {
    if (inntekt_diff[i] < lowest) {
      best = area_list[i]
      lowest = inntekt_diff[i]
    }
  }

  lowest = 1000000
  for (var i = 0; i < 17; i++) {
    if (inntekt_diff[i] < lowest && best != area_list[i]) {
      nestbest = area_list[i]
      lowest = inntekt_diff[i]
    }
  }

  lowest = 1000000
  for (var i = 0; i < 17; i++) {
    if (inntekt_diff[i] < lowest && best != area_list[i] && nestbest != area_list[i]) {
      tredje = area_list[i]
      lowest = inntekt_diff[i]
    }
  }

  income_best = [best, nestbest, tredje]

  return income_best
  //return list og three areas with highest number of households in your category
}


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
//console.log(json.dataset.dimension.Region.category.label["030101a"])
//console.log(json.dataset.dimension.Region.category.index[0])


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

    //find three best areas
    var best = area_list[0]
    var nestbest;
    var tredje;

    var highest = relevant_areas[area_list[0]]
    for (var i = 1; i < 17; i++) {
      if (relevant_areas[area_list[i]] > highest) {
        best = area_list[i]
        highest = relevant_areas[area_list[i]]
      }
    }

    highest = 0
    for (var i = 0; i < 17; i++) {
      if (relevant_areas[area_list[i]] > highest && best != area_list[i]) {
        nestbest = area_list[i]
        highest = relevant_areas[area_list[i]]
      }
    }

    highest = 0
    for (var i = 0; i < 17; i++) {
      if (relevant_areas[area_list[i]] > highest && best != area_list[i] && nestbest != area_list[i]) {
        tredje = area_list[i]
        highest = relevant_areas[area_list[i]]
      }
    }

    income_best = [best, nestbest, tredje]

    return income_best

    //return list og three areas with highest number of households in your category
}




function best_a(status_list, age_list, income_list) {
  var res = new Array(17)

  for (var i = 0; i < 17; i++) {
    res[i] = 0
  }

  for (var i = 0; i < 17; i++) {
    //for each of the three elements in the list
    for (var j = 0; j < 3; j++) {
      if (status_list[j] == area_list[i]) {
        res[i] = res[i] + (j+1)
      }
      if (age_list[j] == area_list[i]) {
        res[i] = res[i] + (j+1)
      }
      if (income_list[j] == area_list[i]) {
        res[i] = res[i] + (j+1)
      }
    }
  }

  highest = 0
  index_high = 0

  for (var i = 0; i < 17; i++) {
    if (res[i] > highest) {
      index_high = i
      highest = res[i]
    }
  }

  return area_list[index_high]

}

//gyldige statuser: 'med_barn', 'uten_eller_voksne_barn', 'alene'
function find_area(status, age, income) {

  var status_list = getAreas_status(status)

  var age_list = getArea_age(age)

  var income_list = getArea_income(income, age)

  var best = best_a(status_list, age_list, income_list)

  return best


}

find_area('med_barn', 37, 800000)
