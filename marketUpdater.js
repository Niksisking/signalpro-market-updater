const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
process.env.FIREBASE_SERVICE_ACCOUNT
);

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function updateMarketData() {
await db.collection("market").doc("live").set({
nifty: "25120",
niftyChange: "+0.52%",


bankNifty: "58240",
bankNiftyChange: "+0.38%",

sensex: "82340",
sensexChange: "+0.44%",

indiaVix: "12.43",
indiaVixChange: "-1.20%",

updatedAt: Date.now()


});

console.log("Market Data Updated");
}

updateMarketData();
