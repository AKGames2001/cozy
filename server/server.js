const express = require("express");
const app = express();
const cors = require("cors");
var fs = require("fs"),
  json;
const userFileName = "./data/users.json";
const userFile = require(userFileName);

function readJsonFileSync(filepath, encoding) {
  if (typeof encoding == "undefined") {
    encoding = "utf8";
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getUserData(email) {
  let file_content = fs.readFileSync(userFileName);
  let content = JSON.parse(file_content);

  let jsonUser = content.filter((username) => {
    return username.email.toLowerCase().includes(email.toLowerCase());
  });
  return jsonUser[0];
}

function postUserData(data) {
  let file_content = fs.readFileSync(userFileName);
  let content = JSON.parse(file_content);
  content.push(data);
  fs.writeFile(
    userFileName,
    JSON.stringify(content, null, 4),
    function writeJSON(err) {
      if (err) {
        return false;
      } else {
        return true;
      }
    }
  );
}

function getWineryData() {
  var filepath = __dirname + "/" + "data/winery.json";
  var file = readJsonFileSync(filepath);
  return file.wines;
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// AUTH ROUTES ------------------------

app.post("/api/auth", (req, res) => {
  const email = req.body.email;

  let file_content = fs.readFileSync(userFileName);
  let content = JSON.parse(file_content);
  let jsonEmail = content.filter((username) => {
    return username.email.toLowerCase().includes(email.toLowerCase());
  });

  if (jsonEmail.length > 0 && email === jsonEmail[0].email) {
    res.json({
      statusCode: "200",
      email: jsonEmail[0].email,
      username: jsonEmail[0].username,
    });
  } else {
    res.json({ statusCode: "800", email: content.email });
  }
});

app.post("/api/auth/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user = getUserData(email);

  if (email === user.email && password === user.password) {
    res.json({ statusCode: "200" });
  } else {
    res.json({ statusCode: "800" });
  }
});

app.post("/api/auth/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  let data = {
    username: username,
    email: email,
    password: password,
  };

  let response = postUserData(data);
  if (response) {
    res.json({ statusCode: "200" });
  } else {
    res.json({ statusCode: "800" });
  }
});

// HOME ROUTES ------------------------

app.get("/api/featured", (req, res) => {
  const data = getWineryData();
  let winery = [];

  for (i = 0; i < 3; i++) {
    let curr = data[i];
    let product = {
      id: curr.id,
      title: curr.title,
      image: "/" + curr.image,
      price: curr.variants[0].price,
    };
    winery.push(product);
  }

  res.json(winery);
});

app.get("/api/winery", (req, res) => {
  const data = getWineryData();
  let winery = [];

  for (i = 0; i < data.length; i++) {
    let curr = data[i];
    let product = {
      id: curr.id,
      title: curr.title,
      image: "/" + curr.image,
      description: curr.collections[0].seo.description,
      price: curr.variants[0].price,
    };
    winery.push(product);
  }

  res.json(winery);
});

app.get("/api/carousel", (req, res) => {
  const data = {
    carousel: [
      {
        id: "01",
        title: "Your Best Value Proposition",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti facilis libero fugit quis quibusdam commodi quae minus veritatis qui dolorem modi tempora culpa beatae placeat, ex cum eius ab.",
        image: "featured-1.jpg",
      },
      {
        id: "02",
        title: "Your Best Value Proposition",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti facilis libero fugit quis quibusdam commodi quae minus veritatis qui dolorem modi tempora culpa beatae placeat, ex cum eius ab.",
        image: "featured-1.jpg",
      },
      {
        id: "03",
        title: "Your Best Value Proposition",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti facilis libero fugit quis quibusdam commodi quae minus veritatis qui dolorem modi tempora culpa beatae placeat, ex cum eius ab.",
        image: "featured-1.jpg",
      },
    ],
  };
  res.json(data);
});

app.post("/api/product", (req, res) => {
  const productId = req.body.id;
  const data = getWineryData();

  let jsonData = data.filter((ele) => {
    return ele.id.toLowerCase().includes(productId.toLowerCase());
  });

  res.json({
    id: jsonData[0].id,
    title: jsonData[0].title,
    image: "/" + jsonData[0].image,
    description: jsonData[0].collections[0].seo.description,
    price: jsonData[0].variants[0].price,
  });
});

// TRANSACTION ROUTES ----------------

app.post("/api/cart/fetch", (req, res) => {
  const userEmail = req.body.email;

  console.log("Email: ", userEmail);

  let file_content = fs.readFileSync(userFileName);
  let content = JSON.parse(file_content);

  let jsonEmail = content.filter((username) => {
    return username.email.toLowerCase().includes(userEmail.toLowerCase());
  });

  console.log("jsonEmail", jsonEmail[0].cart);

  res.json({
    cart: jsonEmail[0].cart,
  });
});

app.post("/api/cart/add", (req, res) => {
  const userEmail = req.body.email;
  const productId = req.body.id;
  const productData = getWineryData();

  let jsonData = productData.filter((ele) => {
    return ele.id.toLowerCase().includes(productId.toLowerCase());
  });

  let userData = getUserData(userEmail);

  // userData.cart.push();

  // let jsonUser = {
  //   username: userData.username,
  //   email: userData.email,
  //   password: userData.password,
  //   cart: userData.cart,
  // };

  let file_content = fs.readFileSync(userFileName);
  let content = JSON.parse(file_content);
  content = content
    .filter((a) => a.username === userData.username)[0]
    .cart.push({
      id: jsonData[0].id,
      title: jsonData[0].title,
      image: "/" + jsonData[0].image,
      description: jsonData[0].collections[0].seo.description,
      price: jsonData[0].variants[0].price,
    });

  fs.writeFile(
    userFileName,
    JSON.stringify(content, null, 4),
    function writeJSON(err) {
      if (err) {
        res.json({ statusCode: "800" });
      } else {
        res.json({ statusCode: "200" });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server listening on PORT 5000");
});
