// Bakerloo status
$.getJSON ('https://api.tfl.gov.uk/Line/bakerloo/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusbakerloo = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusbakerloo);

  $('.statusbakerloo').text(statusbakerloo);
    });
});

// Central status
$.getJSON ('https://api.tfl.gov.uk/Line/central/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuscentral = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuscentral);

  $('.statuscentral').text(statuscentral);
    });
});

// Circle status
$.getJSON ('https://api.tfl.gov.uk/Line/circle/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuscircle = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuscircle);

  $('.statuscircle').text(statuscircle);
    });
});

// District status
$.getJSON ('https://api.tfl.gov.uk/Line/district/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusdistrict = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusdistrict);

  $('.statusdistrict').text(statusdistrict);
    });
});

// Hammersmith status
$.getJSON ('https://api.tfl.gov.uk/Line/hammersmith-city/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statushammersmith = value.lineStatuses[0].statusSeverityDescription;
  console.log(statushammersmith);

  $('.statushammersmith').text(statushammersmith);
    });
});

// Jubilee status
$.getJSON ('https://api.tfl.gov.uk/Line/jubilee/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusjubilee = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusjubilee);

  $('.statusjubilee').text(statusjubilee);
    });
});

// Metropolitan status
$.getJSON ('https://api.tfl.gov.uk/Line/metropolitan/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusmetropolitan = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusmetropolitan);

  $('.statusmetropolitan').text(statusmetropolitan);
    });
});

// Northern status
$.getJSON ('https://api.tfl.gov.uk/Line/northern/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusnorthern = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusnorthern);

  $('.statusnorthern').text(statusnorthern);
    });
});

// Overground status
$.getJSON ('https://api.tfl.gov.uk/Line/london-overground/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusoverground = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusoverground);

  $('.statusoverground').text(statusoverground);
    });
});

// Piccadilly status
$.getJSON ('https://api.tfl.gov.uk/Line/piccadilly/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuspiccadilly = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuspiccadilly);

  $('.statuspiccadilly').text(statuspiccadilly);
    });
});

// Victoria status
$.getJSON ('https://api.tfl.gov.uk/Line/victoria/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusvictoria = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusvictoria);

  $('.statusvictoria').text(statusvictoria);
    });
});

// Waterloo & City status
$.getJSON ('https://api.tfl.gov.uk/Line/waterloo-city/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuswaterloo = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuswaterloo);

  $('.statuswaterloo').text(statuswaterloo);
    });
});

// DLR status
$.getJSON ('https://api.tfl.gov.uk/Line/dlr/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusdlr = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusdlr);

  $('.statusdlr').text(statusdlr);
    });
});

// Tfl Rail status
$.getJSON ('https://api.tfl.gov.uk/Line/tfl-rail/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusrail = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusrail);

  $('.statusrail').text(statusrail);
    });
});

// Tram status
$.getJSON ('https://api.tfl.gov.uk/Line/tram/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statustram = value.lineStatuses[0].statusSeverityDescription;
  console.log(statustram);

  $('.statustram').text(statustram);
    });
});
