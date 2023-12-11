const spaceApi = require("../provider/spaceApiProvider");
const modelSpace = require("../model/launchesModel")


exports.listAllLaunches = async (req,res) => {
    try {

        let listLaunches = spaceApi.getAllLaunches();
        let response = await listLaunches;
        for (let i=0; i < response.length; i++){
            let getLaunches = new modelSpace(response[i]);
            await getLaunches.save();
        }

        res.status(201).json({message : "requete valide"});
    }catch (error) {
        console.error(error);
        res.status(401).json({message : "requete invalide"});
    }
}