
const path       = require("path");
const express    = require("express");
const cors       = require("cors");
const hbs        = require("hbs");
const collection = require("./mongodb");     // <‑‑ Mongoose model

const app  = express();
const PORT = 3000;

/* ───── Static + View engine ───── */
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates"));

/* ───── Core middleware ───── */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ───── HBS demo routes (optional) ───── */
app.get("/",      (_, res) => res.render("login" ));
app.get("/signup",(_, res) => res.render("signup"));



/* ───── REST‑API ROUTES that React will call ───── */

/**  POST /api/signup   { email, password } */
app.post("/api/signup", async (req, res) => {
  
  const { email, password } = req.body;
 try {
    const exists = await collection.findOne({ email });
    if (exists) {
        return res.status(400).json({ message: "Email already registered" });
    }

    const confirm = await collection.create({ email, password });
    console.log(confirm);

    return res.json({ redirect: "/B2World" }); // Or wherever
} catch (err) {
    return res.status(500).json({ message: "Signup error" });
}
})
/**  POST /api/login   { email, password } */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.json({ redirect: "/B2world" });
  } catch (err) {
    return res.status(500).json({ message: "Login error" });
  }
});

/* ───── Launch server ───── */
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
