const abbreviateNumber = (value) => {
    var new_value = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffix_num = Math.floor( (""+value).length/3 );
        var short_value = '';
        for (var precision = 2; precision >= 1; precision--) {
          short_value = parseFloat( (suffix_num !== 0 ? (value / Math.pow(1000,suffix_num) ) : value).toPrecision(precision));
          var dotLessShort_value = (short_value + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShort_value.length <= 2) { break; }
        }
        if (short_value % 1 !== 0) {
          short_value = short_value.toFixed(1)
        }
      new_value = short_value+suffixes[suffix_num];
    }
    return new_value;
  }
  
  export default abbreviateNumber;