const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.end(`
  <div>
    <nav>
      <ul>
        <li>
          <a href='/'>Home - JS</a>
        </li>
         <li>
          <a href='/html'>Html</a>
        </li>
        <li>
          <a href='/about'>React</a>
        </li>
      </ul>
    </nav>

    <h1>Home - JS page</h1>

    <img align="left" alt="JavaScript" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
  </div>`);
});

app.get("/html", (req, res) => {
  res.end(`
  <div>
    <nav>
      <ul>
        <li>
          <a href='/'>Home - JS</a>
        </li>
         <li>
          <a href='/html'>Html</a>
        </li>
        <li>
          <a href='/react'>React</a>
        </li>
      </ul>
    </nav>

    <h1>Html page</h1>

    <img align="left" alt="HTML5" width="42px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" /> 
  </div>`);
});

app.get("/react", (req, res) => {
  res.end(`
  <div>
    <nav>
      <ul>
        <li>
          <a href='/'>Home - JS</a>
        </li>
         <li>
          <a href='/html'>Html</a>
        </li>
        <li>
          <a href='/react'>React</a>
        </li>
      </ul>
    </nav>

    <h1>React page</h1>

    <img align="left" alt="React" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
  </div>`);
});

app.listen(PORT, () => {
  console.log("Server hes been started...");
});
