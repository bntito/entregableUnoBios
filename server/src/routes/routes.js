const express = require("express");
const router = express.Router();

const { 
    addMessageJson,
    getMessageJson, 
    delMessageJson,
    readMessageJson
} = require("../controller/jsonMessage");

const { 
    addSubscriptJson, 
    getSubscriptJson 
} = require("../controller/jsonSubscript");

router.post("/add/message", addMessageJson);
router.get("/get/message", getMessageJson);
router.delete("/del/message/:idM", delMessageJson);
router.put("/read/message/:idM", readMessageJson)

router.post("/add/subscript", addSubscriptJson);
router.get("/get/subscript", getSubscriptJson);

module.exports = router;