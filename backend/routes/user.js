const {Router} = require("express")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const salt = 16
var jsonParser = bodyParser.json()
const db = require("../db")
const router = Router()

router.post("/", jsonParser, (req,res) => {
    const hashed = bcrypt.hashSync(req.body.password, salt)
    db.query('insert into user values (0, ?, ?, ? )', [req.body.username, req.body.email,  hashed], (err) => {
        if(err) {
            console.log(err)
            return res.status(500).send({"msg" : "Ada suatu kesalahan pada sistem"})
        }
        else return res.status(201).send({"msg" : "User telah berhasil didaftar"})
    });
})

router.get("/", (req, res) => {
    const email = req.query.email
    const password = req.query.password
    db.query("select password,fullname,email from user where email = ?", [email], (err,rows,fields) => {
        if (err) {
            return res.status(500).send({"msg" : "Ada suatu kesalahan pada sistem"})
        }
        else{
            if (rows.length) {
                const cek = bcrypt.compare(password, rows[0].password)
                cek.then(function(result) {
                    if(result){
                        return res.status(200).send({
                            "msg" : "Berhasil Login",
                            "data" : {
                                fullname : rows[0].fullname,
                                email : rows[0].email,
                            }
                        })
                    }else{
                        return res.status(400).send({"msg" : "Email atau Password anda salah"})
                    }
                })
            }else{
                return res.status(400).send({"msg" : "Email atau Password anda salah"})
            }
        }
    })
})

module.exports = router