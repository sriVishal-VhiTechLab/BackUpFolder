document.getElementById("openBtn").addEventListener('click', () => {
      document.getElementById("dropLists").style.display = "block";
})
let ddl1 = document.getElementById('namesList');
let ddl2 = document.getElementById('dispList');
createOption = (ddl1, text, value) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.text = text;
      ddl1.options.add(opt);
}
configureDropDownLists = (ddl1, ddl2) => {
      let Sindhu = ['sindhu1', 'sindhu2', 'sindhu3', 'sindhu4'];
      let Vinoth = ['vinoth1', 'vinoth2', 'vinoth3', 'vinoth4'];
      let Vineeth = ['vineeeth1', 'vineeeth2', 'vineeeth3'];
      let Vishwa = ['vishwa1', 'vishwa2', 'vishwa3', 'vishwa4', 'vishwa5'];
      let Sathish = ['sathish1', 'sathish2', 'sathish3', 'sathish4', 'sathish5'];
      ddl2.options.length = 0

      switch (ddl1.value) {
            case 'Sindhu':
                  for (let s of Sindhu) {
                        createOption(ddl2, s, s);
                  }
                  break;
            case 'Vinoth':
                  for (let v of Vinoth) {
                        createOption(ddl2, v, v);
                  }
                  break;
            case 'Vineeth':
                  for (let v of Vineeth) {
                        createOption(ddl2, v, v);
                  }
                  break;
            case 'Vishwa':
                  for (let v of Vishwa) {
                        createOption(ddl2, v, v);
                  }
                  break;
            case 'Sathish':
                  for (let s of Sathish) {
                        createOption(ddl2, s, s);
                  }
                  break;
            default:
                  break;
      }
}
ddl1.addEventListener('change', () => {
      configureDropDownLists(ddl1, ddl2)
})