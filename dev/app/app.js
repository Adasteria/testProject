
class MyApp {

    constructor () {
      this.start();
    }

    start () {
      new HomePage();
    }
}

class HomePage {

  constructor () {
    this.initUI();
  }

  initUI () {
    document.write("<h1>Hello World</h1>");
    document.body.innerHTML += `<form>
    Mail <br>
    <input type="text"><br><br>

    Password <br>
    <input type="text"><br><br>
    <button id="boutton">Valider</button>
    </form>`
  }

}

new MyApp();
